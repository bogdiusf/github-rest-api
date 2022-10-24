import React from 'react'
import { createUseStyles } from 'react-jss'
import { UserRepositoryStyles } from './UserRepository.styles'

import { AiFillStar } from 'react-icons/ai'
import { CgGitFork } from 'react-icons/cg'

import { motion } from 'framer-motion'

const useStyles = createUseStyles(UserRepositoryStyles)

const UserRepository = ({ props }) => {
  const classes = useStyles()

  console.log(props)

  const { name, clone_url, stargazers_count, forks_count } = props

  const hovered = {
    scale: 1.1,
    cursor: 'pointer',
    backgroundColor: 'rgba(0,0,0,1)'
  }

  return (
    <motion.div
      className={classes.repoContainer}
      transition={{ duration: 0.3 }}
      whileHover={hovered}
      onClick={(e) => window.open(clone_url, '_blank')}
      layout
    >
      <div>{name}</div>
      <div style={{ display: 'flex', gap: 15 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 5
          }}
        >
          <span>{stargazers_count}</span>
          <AiFillStar fill="yellow" />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <span>{forks_count}</span>
          <CgGitFork fill="green" />
        </div>
      </div>
    </motion.div>
  )
}

export default UserRepository