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
        <AnimatePresence>
          <motion.div
            className={classes.profileContainer}
            layout
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <h1>Repositories</h1>
            <div className={classes.reposContainer}>
              {reposData.slice(0, 10).map((item) => (
                <UserRepository key={item.id} props={item} />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  )
}

export default UserProfile
