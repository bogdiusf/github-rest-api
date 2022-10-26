import React from 'react'
import { motion } from 'framer-motion'

const loadingContainer = {
  width: 560,
  height: 420,
  display: 'flex',
  gap: 5,
  justifyContent: 'center',
  alignItems: 'center'
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
      {[1, 2, 3].map((item) => (
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
