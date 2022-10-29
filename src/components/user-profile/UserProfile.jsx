// React libraries
import { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

// Others
import Repositories from '../repositories/Repositories'
import Loader from '../Loader'
import ProfileCard from './ProfileCard'
import FadeTransition from '../shared/FadeTransition'

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
        <FadeTransition className={classes.userProfileContainer}>
          <ProfileCard key="profile" />
          <Repositories key="repos" />
        </FadeTransition>
      )}
    </>
  )
}

export default UserProfile
