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
  setRepoLoading
}) => {
  const [selectedPage, setSelectedPage] = useState()

  const classes = useStyles()

  useEffect(() => {
    setSelectedPage(parseInt(searchParams.get('page')))
  }, [searchParams])

  const handlePages = (pageNr) => {
    if (selectedPage === pageNr) {
      return
    } else {
      setRepoLoading(true)
      setSearchParams({ page: pageNr })
      window.scrollTo({ top: 0, behavior: 'smooth' })

      setTimeout(() => {
        setRepoLoading(false)
      }, 1500)
    }
  }

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
