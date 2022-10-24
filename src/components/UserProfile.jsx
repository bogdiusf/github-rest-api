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
  const { reposData, isLoading } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  console.log(reposData)
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
      {isLoading ? (
        <Loader />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            style={{
              height: 200,
              backgroundColor: '#3d3d3d',
              display: 'flex',
              alignItems: 'center',
              borderRadius: 5,
              marginBottom: 50,
              padding: '0px 50px',
              gap: 45
            }}
          >
            <motion.div
              whileHover={{ scale: 1.2, cursor: 'pointer' }}
              title="Home"
              style={{ marginBottom: 100, marginLeft: -30 }}
              onClick={() => navigate('/')}
            >
              <BiArrowBack
                fill="white"
                style={{
                  fontSize: 50,
                  borderRadius: '50%',
                  border: '1px solid white',
                  padding: 10
                }}
              />
            </motion.div>
            <motion.img
              initial={{ borderRadius: '50%', border: '1px solid white' }}
              whileHover={{
                scale: 1.5,
                borderRadius: '5px',
                cursor: 'pointer'
              }}
              transition={{ duration: 0.5 }}
              src={
                reposData.length > 0
                  ? reposData[0].owner.avatar_url
                  : defaultAvatar
              }
              width="150"
            />
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
