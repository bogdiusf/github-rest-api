// React libraries
import React from 'react'

// Style related components / libraries
import { motion } from 'framer-motion'

const Button = ({ index, selectedPage, handlePages, classes, buttonRef }) => {
  return (
    <motion.button
      ref={buttonRef}
      initial={{ opacity: 0 }}
      animate={{
        backgroundColor:
          index === selectedPage ? 'var(--light-grey)' : 'var(--dark-grey)',
        scale: index === selectedPage ? 1.05 : 0.8,
        fontWeight: index === selectedPage ? 700 : 400,
        border: `1px solid ${
          index === selectedPage ? 'var(--white)' : 'var(--light-grey)'
        }`,
        opacity: 1,
        marginLeft: index === selectedPage ? 10 : 0,
        marginRight: index === selectedPage ? 10 : 0
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      onClick={() => {
        handlePages(index)
      }}
      className={classes.button}
    >
      {index}
    </motion.button>
  )
}

export default Button
