// React libraries
import React from 'react'

// Style related components / libraries
import { motion } from 'framer-motion'

const Button = ({ i, selectedPage, handlePages, classes }) => {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{
        backgroundColor: i + 1 === selectedPage ? '#3D3D3D' : '#242424',
        scale: i + 1 === selectedPage ? 1.05 : 0.8,
        fontWeight: i + 1 === selectedPage ? 700 : 400,
        border: `1px solid ${i + 1 === selectedPage ? '#242424' : '#3d3d3d'}`,
        opacity: 1,
        marginLeft: i + 1 === selectedPage ? 10 : 0,
        marginRight: i + 1 === selectedPage ? 10 : 0
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      onClick={() => handlePages(i + 1)}
      className={classes.button}
    >
      {i + 1}
    </motion.button>
  )
}

export default Button