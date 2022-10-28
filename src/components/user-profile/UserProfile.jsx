// React libraries
import { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion } from 'framer-motion'

// Others
import Repositories from '../repositories/Repositories'
import Loader from '../Loader'
import ProfileCard from './ProfileCard'

const useStyles = createUseStyles({
  userProfileContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    width: 'auto',
    maxWidth: 'fit-content',
    minWidth: 800
  }
})

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const classes = useStyles()

  return (
    <>
      {isLoading ? (
        <Loader location="fromHome" />
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          transition={{ duration: 1 }}
          className={classes.userProfileContainer}
        >
          <ProfileCard />
          <Repositories />
        </motion.div>
      )}
    </>
  )
}

export default UserProfile
