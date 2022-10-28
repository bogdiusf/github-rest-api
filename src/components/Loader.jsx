// React libraries
import React from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion } from 'framer-motion'
import FadeTransition from './shared/FadeTransition'

const useStyles = createUseStyles({
  loadingContainer: ({ location }) => ({
    maxWidth: 'auto',
    minWidth: 800,
    height: location === 'fromHome' ? '100vh' : 420,
    display: 'flex',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center'
  })
})

const loadingCircle = {
  display: 'block',
  width: '1rem',
  height: '1rem',
  backgroundColor: 'white',
  borderRadius: '0.5rem'
}

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2
    }
  },
  end: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const loadingCircleVariants = {
  start: {
    y: '0%'
  },
  end: {
    y: '60%'
  }
}
const loadingCircleTransition = {
  duration: 0.4,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut'
}

const Loader = ({ location = 'fromRepos' }) => {
  const classes = useStyles({ location })

  return (
    <FadeTransition>
      <motion.div
        className={classes.loadingContainer}
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        {[1, 2, 3, 4].map((item) => (
          <motion.span
            key={item}
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          />
        ))}
      </motion.div>
    </FadeTransition>
  )
}

export default Loader
