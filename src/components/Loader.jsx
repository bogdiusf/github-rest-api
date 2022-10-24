import React from 'react'
import { motion } from 'framer-motion'

const loadingContainer = {
  width: '4rem',
  height: '4rem',
  display: 'flex',
  justifyContent: 'space-around'
}
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

const Loader = () => {
  return (
    <motion.div
      style={loadingContainer}
      variants={loadingContainerVariants}
      initial="start"
      animate="end"
    >
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
      <motion.span
        style={loadingCircle}
        variants={loadingCircleVariants}
        transition={loadingCircleTransition}
      />
    </motion.div>
  )
}

export default Loader
