// React libraries
import React from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { BiUserX } from 'react-icons/bi'
import { UserNotFoundStyles } from './UserNotFound.styles'

// Others
import NotFoundTemplate from '../shared/NotFoundTemplate'

const useStyles = createUseStyles(UserNotFoundStyles)

const UserNotFound = () => {
  const classes = useStyles()

  const Content = () => {
    return (
      <>
        <BiUserX key="icon" className={classes.icon} />
        <div className={classes.message}>User !found ❗️</div>
      </>
    )
  }
  return <NotFoundTemplate content={<Content />} />
}

export default UserNotFound
