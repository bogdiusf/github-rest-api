// React libraries
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion } from 'framer-motion'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
import { GoLocation } from 'react-icons/go'
import { HiOutlineLink } from 'react-icons/hi'
import { MdOutlineWorkOutline } from 'react-icons/md'
import { UserProfileStyles } from './UserProfile.styles'

// Others
import UserRepository from '../repositories/Repositories'
import Loader from '../Loader'
import FadeTransition from '../shared/FadeTransition'

// Utils
import FetchData from '../../utils/FetchData'

const useStyles = createUseStyles(UserProfileStyles)

const UserProfile = () => {
  const { fetchedData } = useSelector((state) => state)
  const { user } = useParams()
  const navigate = useNavigate()

  const fetchData = FetchData()
  const { repos, userData, isLoading } = fetchedData

  const city = userData.location?.replace(/ ,.*/, '')
  const blog = !userData.blog
    ? ''
    : userData.blog?.includes('https://') || userData.blog?.includes('http://')
    ? userData.blog
    : `https://${userData.blog}`

  const classes = useStyles()

  useEffect(() => {
    fetchData()
  }, [user])

  return (
    <>
      {isLoading ? (
        <FadeTransition>
          <Loader />
        </FadeTransition>
      ) : (
        // TODO: check why FadeTransition is not working for the following div
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className={classes.userProfileContainer}
        >
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
                    window.open(
                      `${userData.html_url}?tab=repositories`,
                      '_blank'
                    )
                  }
                >
                  <span>{repos.length}</span>
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
                {blog && (
                  <motion.div
                    whileHover={{ cursor: 'pointer', scale: 1.1 }}
                    onClick={() => window.open(blog, '_blank')}
                  >
                    {userData.blog}
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
          <main className={classes.userRepoContainer}>
            {repos.length > 0 && <UserRepository repos={repos} />}
          </main>
        </motion.div>
      )}
    </>
  )
}

export default UserProfile
