// React libraries
import React from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { TbError404 } from 'react-icons/tb'
import { AiOutlinePlus } from 'react-icons/ai'
import { TbEqual } from 'react-icons/tb'
import { NotFoundStyles } from './NotFound.styles'
import trollface from '../../assets/trollface.png'
import angryicon from '../../assets/angryicon.png'

// Others
import NotFoundTemplate from '../shared/NotFoundTemplate'

const useStyles = createUseStyles(NotFoundStyles)

const NotFound = () => {
  const classes = useStyles()

  const Content = () => {
    return (
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
    )
  }

  return <NotFoundTemplate content={<Content />} />
}

export default NotFound
