// React libraries
import React from 'react'

// Style related components / libraries
import { motion, AnimatePresence } from 'framer-motion'

const FadeTransition = ({ children, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0 }}
      transition={{ duration: 1, delay: delay }}
    >
      <AnimatePresence mode="wait">{children}</AnimatePresence>
    </motion.div>
  )
}

export default FadeTransition
