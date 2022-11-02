// React libraries
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion } from 'framer-motion'
import { NotFoundTemplateStyles } from './NotFoundTemplate.styles'

// Others
import FadeTransition from './FadeTransition'
import Loader from './Loader'

const useStyles = createUseStyles(NotFoundTemplateStyles)

const NotFoundTemplate = ({ content }) => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const classes = useStyles()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return isLoading ? (
    <Loader location="fromHome" />
  ) : (
    <FadeTransition className={classes.notFoundContainer}>
      {content}
      <motion.button
        key="toHome"
        className={classes.toHomeButton}
        whileHover={{ cursor: 'pointer', scale: 1.1 }}
        onClick={() => navigate('/')}
      >
        Return home you prick!
      </motion.button>
    </FadeTransition>
  )
}

export default NotFoundTemplate
