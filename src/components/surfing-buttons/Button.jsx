// React libraries
import React from 'react'

// Style related components / libraries
import { motion } from 'framer-motion'

const Button = ({
  index,
  selectedPage,
  handlePages,
  classes,
  buttonRef,
  handleBackAndForth
}) => {
  return (
    <motion.button
      ref={buttonRef}
      initial={{ opacity: 0 }}
      animate={{
        backgroundColor: index === selectedPage ? '#3D3D3D' : '#242424',
        scale: index === selectedPage ? 1.05 : 0.8,
        fontWeight: index === selectedPage ? 700 : 400,
        border: `1px solid ${index === selectedPage ? '#FFFFFF' : '#3d3d3d'}`,
        opacity: 1,
        marginLeft: index === selectedPage ? 10 : 0,
        marginRight: index === selectedPage ? 10 : 0
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      onClick={() => {
        if (index === 'Back' || index === 'Next') {
          handleBackAndForth()
        } else {
          handlePages(index)
        }
      }}
      className={classes.button}
    >
      {index}
    </motion.button>
  )
}

export default Button
