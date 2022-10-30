// React libraries
import { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

// Others
import Repositories from '../repositories/Repositories'
import Loader from '../shared/Loader'
import ProfileCard from './ProfileCard'
import FadeTransition from '../shared/FadeTransition'

const useStyles = createUseStyles({
  userProfileContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: 20,
    padding: [20, 0, 40, 0],
    margin: [0, 20]
  }
})

const UserProfile = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    window.scrollTo({ top: 0 })
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
