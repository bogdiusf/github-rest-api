import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { createUseStyles } from 'react-jss'
import { UserProfileStyles } from './UserProfile.styles'
import { motion } from 'framer-motion'
import UserRepository from '../repositories/Repositories'
import Loader from '../Loader'
import { BiArrowBack } from 'react-icons/bi'
import FadeTransition from '../shared/FadeTransition'

const BASE_URL = 'https://api.github.com/users'

const useStyles = createUseStyles(UserProfileStyles)

const UserProfile = () => {
  const { fetchedData } = useSelector((state) => state)
  const userData = fetchedData.userData
  const reposData = fetchedData.repos
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const classes = useStyles()

  const { user } = useParams()

  const fetchData = async () => {
    try {
      dispatch({ type: 'SET_LOADER', payload: true })
      const repoResponse = await fetch(`${BASE_URL}/${user}/repos`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      })
      const userResponse = await fetch(`${BASE_URL}/${user}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      })
      if (repoResponse.status === 200) {
        const reposData = await repoResponse.json()
        const userData = await userResponse.json()
        dispatch({ type: 'SET_REPOS', payload: reposData })
        dispatch({ type: 'SET_USER_DATA', payload: userData })
      } else if (repoResponse.status === 404) {
        navigate(`/user/${user}/user-not-found`)
      }
    } catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      dispatch({ type: 'SET_LOADER', payload: false })
    }, 2000)
  }

  useEffect(() => {
    fetchData()
  }, [user])

  return (
    <>
      {fetchedData.isLoading ? (
        <FadeTransition>
          <Loader />
        </FadeTransition>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className={classes.userProfileContainer}
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
                userData && {
                  scale: 1.5,
                  borderRadius: '5px',
                  transition: { type: 'spring' }
                }
              }
              transition={{ duration: 0.5 }}
              className={classes.avatar}
              src={userData.avatar_url}
              onClick={() => window.open(userData.avatar_url, '_blank')}
            />
            <div>{userData.name}</div>
            <div>Number of repositories: {userData.public_repos}</div>
          </motion.header>
          <main className={classes.userRepoContainer}>
            {reposData.length > 0 && <UserRepository reposData={reposData} />}
          </main>
        </motion.div>
      )}
    </>
  )
}

export default UserProfile
