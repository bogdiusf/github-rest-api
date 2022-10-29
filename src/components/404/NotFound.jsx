// React libraries
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion } from 'framer-motion'
import { TbError404 } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbEqual } from 'react-icons/tb'
import trollface from '../../assets/trollface.png'
import angryicon from '../../assets/angryicon.png'
import { NotFoundStyles } from './NotFound.styles'

// Others
import FadeTransition from '../shared/FadeTransition'
import Loader from '../shared/Loader'

const useStyles = createUseStyles(NotFoundStyles)

const NotFound = () => {
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  const classes = useStyles()

  return isLoading ? (
    <Loader location="fromHome" />
  ) : (
    <FadeTransition className={classes.pageNotFoundContainer}>
      <div className={classes.iconsContainer}>
        <TbError404 key="404Icon" />
        <AiOutlinePlus key="plusIcon" />
        <img
          src={trollface}
          key="trollface"
          style={{ height: 150, width: 150 }}
        />
        <TbEqual key="equalIcon" />
        <img
          src={angryicon}
          key="angryicon"
          style={{ height: 150, width: 150 }}
        />
      </div>
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

export default NotFound
