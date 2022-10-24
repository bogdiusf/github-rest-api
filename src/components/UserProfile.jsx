import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { createUseStyles } from 'react-jss'
import { UserProfileStyles } from './UserProfile.styles'

import { AnimatePresence, motion } from 'framer-motion'

import UserRepository from './UserRepository'
import Loader from './Loader'

const BASE_URL = 'https://api.github.com/users'

const useStyles = createUseStyles(UserProfileStyles)

const UserProfile = () => {
  const { reposData, isLoading } = useSelector((state) => state)
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
        if (data.length > 0) {
          dispatch({ type: 'SET_REPOS', payload: data })
        } else {
          navigate('/user-has-no-repos')
        }
      } else if (response.status === 404) {
        navigate('/user-not-found')
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
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.div
            style={{
              height: 200,
              backgroundColor: '#3d3d3d',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 5,
              marginBottom: 50
            }}
          >
            Placeholder for profile img - nr of repos and others
          </motion.div>
          <h1>Repositories</h1>
          <div className={classes.reposContainer}>
            {reposData.map((item) => (
              <UserRepository key={item.id} props={item} />
            ))}
          </div>
        </motion.div>
      )}
    </>
  )
}

export default UserProfile
