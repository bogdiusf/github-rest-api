// React libraries
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { ButtonsStyles } from './Buttons.styles'
import { motion } from 'framer-motion'

// Others
import Button from './Button'

const useStyles = createUseStyles(ButtonsStyles)

const SurfingButtons = ({
  searchParams,
  setSearchParams,
  nrOfPages,
  setIsLoading
}) => {
  const [selectedPage, setSelectedPage] = useState()

  const handlePages = (pageNr) => {
    if (selectedPage === pageNr) {
      return
    } else {
      setIsLoading(true)
      setSearchParams({ page: pageNr })
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }

  const classes = useStyles()

  const surfingButtons = []
  for (let i = 0; i < nrOfPages; i++)
    surfingButtons.push(
      <Button
        key={i}
        i={i}
        selectedPage={selectedPage}
        handlePages={handlePages}
        classes={classes}
      />
    )

  useEffect(() => {
    setSelectedPage(parseInt(searchParams.get('page')))
  }, [searchParams])

  return (
    <motion.div
      animate={{ transition: { delay: 0.5 } }}
      className={classes.buttonsContainer}
    >
      {surfingButtons}
    </motion.div>
  )
}

export default SurfingButtons
