import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { UserProfileStyles } from './UserProfile.styles'
import { motion } from 'framer-motion'
import UserRepository from './UserRepository'
import Loader from './Loader'
import defaultAvatar from '../assets/default_github_avatar.png'
import { BiArrowBack } from 'react-icons/bi'

const BASE_URL = 'https://api.github.com/users'

const useStyles = createUseStyles(UserProfileStyles)

const UserProfile = () => {
  const { fetchedData } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const classes = useStyles()

  const { user } = useParams()

  const fetchData = async () => {
    try {
      dispatch({ type: 'SET_LOADER', payload: true })
      const response = await fetch(`${BASE_URL}/${user}/repos`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      })
      if (response.status === 200) {
        const data = await response.json()
        dispatch({ type: 'SET_REPOS', payload: data })
      } else if (response.status === 404) {
        navigate(`/user/${user}/user-not-found`)
      }
    } catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      dispatch({ type: 'SET_LOADER', payload: false })
    }, 1000)
  }

  useEffect(() => {
    fetchData()
  }, [user])

  return (
    <>
      {fetchedData.isLoading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.header className={classes.header}>
            <motion.div
              whileHover={{ scale: 1.2, cursor: 'pointer' }}
              transition={{ type: 'spring' }}
              title="Home"
              onClick={() => navigate('/')}
              className={classes.homeBtn}
            >
              <BiArrowBack fill="white" />
            </motion.div>
            <motion.img
              whileHover={
                fetchedData.repos.length && {
                  scale: 1.5,
                  borderRadius: '5px',
                  transition: { type: 'spring' }
                }
              }
              transition={{ duration: 0.5 }}
              className={classes.avatar}
              src={
                fetchedData.repos.length > 0
                  ? fetchedData?.repos[0].owner.avatar_url
                  : defaultAvatar
              }
              onClick={() =>
                fetchedData.repos.length > 0
                  ? window.open(fetchedData.repos[0].owner.avatar_url, '_blank')
                  : null
              }
            />
          </motion.header>
          <h1>Repositories</h1>
          <div className={classes.reposContainer}>
            {fetchedData.repos.map((item) => (
              <UserRepository key={item.id} props={item} />
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}

export default UserProfile
