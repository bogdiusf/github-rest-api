import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

import { BiUserX } from 'react-icons/bi'
import { AiFillGithub } from 'react-icons/ai'

import FadeTransition from '../shared/FadeTransition'
import Loader from '../shared/Loader'

const useStyles = createUseStyles({
  userNotFound: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    margin: ['auto', 0],

    '& svg': {
      fontSize: 100
    }
  },
  message: {
    fontSize: 20,
    fontWeight: 500,
    minWidth: 350,
    width: '50vh',
    lineHeight: 2,

    '& svg': {
      fontSize: 36,
      margin: [0, 5]
    }
  }
})

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
