// React libraries
import React from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion } from 'framer-motion'

const useStyles = createUseStyles({
  loadingContainer: ({ location }) => ({
    width: 'auto',
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
    opacity: 0,
    scale: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.2
    }
  },
  end: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1,
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
  )
}

export default Loader
