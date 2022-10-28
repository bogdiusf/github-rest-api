// React libraries
import React from 'react'

// Style related components / libraries
import { motion, AnimatePresence } from 'framer-motion'

const FadeTransition = ({
  children,
  delay = 0,
  isRepoComp,
  className = ''
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{
          opacity: 0,
          scale: 0,
          transition: {
            duration: isRepoComp ? 0.5 : 1,
            delay: isRepoComp && 0.5
          }
        }}
        transition={{ duration: 1, delay: delay }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}

export default FadeTransition
