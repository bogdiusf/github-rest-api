// React libraries
import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

// Style related components / libraries
import { motion } from 'framer-motion'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { HiOutlineLink } from 'react-icons/hi'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { ProfileCardStyles } from './ProfileCard.styles'

// Others
import FetchData from '../../utils/FetchData'

const useStyles = createUseStyles(ProfileCardStyles)

const ProfileCard = () => {
  const navigate = useNavigate()
  const { fetchedData } = useSelector((state) => state)
  const { userData } = fetchedData

  const city = userData.location?.replace(/ ,.*/, '')
  const blogUrl = !userData.blog
    ? ''
    : userData.blog?.includes('https://') || userData.blog?.includes('http://')
    ? userData.blog
    : `https://${userData.blog}`

  const { fetchUserData } = FetchData()

  useEffect(() => {
    fetchUserData()
  }, [])

  const classes = useStyles()

  return (
    <motion.header className={classes.header}>
      <div className={classes.headerLeftCol}>
        <motion.div
          animate={{ scale: [1.2, 0.9, 1.2] }}
          whileHover={{ cursor: 'pointer' }}
          transition={{ repeat: Infinity, duration: 3 }}
          title="Home"
          onClick={() => navigate('/')}
          className={classes.homeBtn}
        >
          <AiOutlineHome />
        </motion.div>
        <motion.img
          whileHover={
            userData && {
              scale: 1.3,
              borderRadius: '5px',
              transition: { type: 'spring' }
            }
          }
          transition={{ duration: 0.5 }}
          className={classes.avatar}
          src={userData.avatar_url}
          onClick={() => window.open(userData.html_url, '_blank')}
        />
      </div>
      <div className={classes.headerRightCol}>
        <div className={classes.username}>{userData.login}</div>
        <div className={classes.statisticsHeader}>
          <motion.div
            whileHover={{ cursor: 'pointer', scale: 1.1 }}
            onClick={() =>
              window.open(`${userData.html_url}?tab=repositories`, '_blank')
            }
          >
            <span>{userData.public_repos}</span>
            <span> repositories</span>
          </motion.div>
          <motion.div
            whileHover={{ cursor: 'pointer', scale: 1.1 }}
            onClick={() =>
              window.open(`${userData.html_url}?tab=followers`, '_blank')
            }
          >
            <span>{userData.followers}</span>
            <span> followers</span>
          </motion.div>
          <motion.div
            whileHover={{ cursor: 'pointer', scale: 1.1 }}
            onClick={() =>
              window.open(`${userData.html_url}?tab=following`, '_blank')
            }
          >
            <span>{userData.following}</span>
            <span> following</span>
          </motion.div>
        </div>
        <div className={classes.personalInfo}>
          {userData.name && <div>{userData.name}</div>}
          {userData.email && (
            <motion.div whileHover={{ cursor: 'pointer', scale: 1.1 }}>
              <a href={'mailto:' + userData.email} target="_blank">
                {userData.email}
              </a>
              <AiOutlineMail />
            </motion.div>
          )}
          {blogUrl && (
            <motion.div
              whileHover={{ cursor: 'pointer', scale: 1.1 }}
              onClick={() => window.open(blogUrl, '_blank')}
            >
              {blogUrl.length > 40 ? blogUrl.slice(0, 40) + '...' : blogUrl}
              <HiOutlineLink />
            </motion.div>
          )}
          {userData.company && (
            <motion.div
              whileHover={{ cursor: 'pointer', scale: 1.1 }}
              onClick={() =>
                window.open(
                  `https://www.google.com/search?q=${userData.company}`,
                  '_blank'
                )
              }
            >
              {userData.company}
              <MdOutlineWorkOutline />
            </motion.div>
          )}
          {userData.location && (
            <motion.div
              whileHover={{ cursor: 'pointer', scale: 1.1 }}
              onClick={() =>
                window.open(
                  `https://www.google.com/maps/place/${city}`,
                  '_blank'
                )
              }
            >
              {userData.location}
              <GoLocation />
            </motion.div>
          )}
        </div>
      </div>
    </motion.header>
  )
}

export default ProfileCard
