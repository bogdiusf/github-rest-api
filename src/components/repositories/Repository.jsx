// React libraries
import React from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion } from 'framer-motion'
import { AiFillStar } from 'react-icons/ai'
import { GoRepoForked } from 'react-icons/go'
import { RepositoryStyles } from './Repositories.styles'

// Others
import FadeTransition from '../shared/FadeTransition'

const useStyles = createUseStyles(RepositoryStyles)

const Repository = ({ item, index }) => {
  const classes = useStyles()

  return (
    <FadeTransition delay={index * 0.15}>
      <motion.div
        className={classes.repo}
        transition={{ duration: 0.5, type: 'spring' }}
        whileHover={{
          scale: 1.1,
          cursor: 'pointer',
          backgroundColor: 'var(--light-grey)'
        }}
        onClick={(e) => window.open(item.clone_url, '_blank')}
      >
        <div>{item.name}</div>
        <div className={classes.starAndForkContainer}>
          <div className={classes.center}>
            <span>{item.stargazers_count}</span>
            <AiFillStar fill="var(--star-yellow)" />
          </div>
          <div className={classes.center}>
            <span>{item.forks_count}</span>
            <GoRepoForked fill="var(--forrest-green)" />
          </div>
        </div>
      </motion.div>
    </FadeTransition>
  )
}

export default Repository
