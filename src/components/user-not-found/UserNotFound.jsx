// React libraries
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { BiUserX } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'
import { UserNotFoundStyles } from './UserNotFound.styles'

// Others
import FadeTransition from '../shared/FadeTransition'
import Loader from '../shared/Loader'

const useStyles = createUseStyles(UserNotFoundStyles)

const UserNotFound = () => {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const classes = useStyles()

  return isLoading ? (
    <Loader location="fromHome" />
  ) : (
    <FadeTransition className={classes.userNotFound}>
      <BiUserX key="icon" />
      <div className={classes.message}>
        <span>Oops! Looks like the potential employee does not have a</span>
        <AiFillGithub />
        <span>account. Consider moving to the next candidate! 😆</span>
      </div>
    </FadeTransition>
  )
}

export default UserNotFound
