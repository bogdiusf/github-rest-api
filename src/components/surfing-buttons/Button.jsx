// React libraries
import React from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion } from 'framer-motion'
import { ButtonsStyles } from './Buttons.styles'

const useStyles = createUseStyles(ButtonsStyles)

const Button = ({ index, selectedPage, handlePages, buttonRef, children }) => {
  const classes = useStyles({ index })

  return (
    <motion.button
      layout
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
        opacity: 1
      }}
      exit={{ opacity: 0 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.5 }}
      onClick={() => {
        handlePages(index)
      }}
      className={classes.button}
    >
      {children}
    </motion.button>
  )
}

export default Button
