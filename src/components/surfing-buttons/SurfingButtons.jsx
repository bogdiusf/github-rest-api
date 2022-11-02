// React libraries
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { ButtonsStyles } from './Buttons.styles'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

// Others
import Button from './Button'
import { AnimatePresence, motion } from 'framer-motion'

const useStyles = createUseStyles(ButtonsStyles)

const SurfingButtons = ({
  searchParams,
  setSearchParams,
  nrOfPages,
  setIsLoading
}) => {
  const [selectedPage, setSelectedPage] = useState(
    parseInt(searchParams.get('page'))
  )
  const [endPage, setEndPage] = useState(1)
  const urlPageNr = parseInt(searchParams.get('page'))

  const handlePages = (index) => {
    if (
      selectedPage === index ||
      (selectedPage === 1 && index === 'Back') ||
      (selectedPage === nrOfPages && index === 'Next')
    ) {
      return
    } else {
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
      if (index === 'Back') {
        if (endPage - selectedPage === 3) {
          setEndPage((prev) => prev - 1)
        }
        setSearchParams({ page: selectedPage - 1 })
      } else if (index === 'Next') {
        setSearchParams({ page: selectedPage + 1 })
        if (endPage === selectedPage) {
          setEndPage((prev) => prev + 1)
        }
      } else {
        setSearchParams({ page: index })
      }
    }
  }

  const classes = useStyles({})

  const surfingButtons = []
  for (let i = 0; i < nrOfPages; i++)
    surfingButtons.push(
      <Button
        key={i}
        index={i + 1}
        selectedPage={selectedPage}
        handlePages={handlePages}
      >
        {i + 1}
      </Button>
    )

  useEffect(() => {
    setSelectedPage(urlPageNr)
  }, [urlPageNr])

  useEffect(() => {
    if (urlPageNr < 5) {
      setEndPage(4)
    } else {
      setEndPage(selectedPage)
    }
  }, [])

  return (
    <AnimatePresence>
      <motion.div className={classes.buttonsContainer}>
        {endPage - 3 > 1 && (
          <Button
            index={'Back'}
            selectedPage={selectedPage}
            handlePages={handlePages}
            classes={classes}
          >
            {<AiOutlineArrowLeft />}
          </Button>
        )}
        {surfingButtons.slice(endPage - 4, endPage)}
        {selectedPage !== nrOfPages && nrOfPages > 4 && (
          <Button
            index={'Next'}
            selectedPage={selectedPage}
            handlePages={handlePages}
            classes={classes}
          >
            <AiOutlineArrowRight />
          </Button>
        )}
      </motion.div>
    </AnimatePresence>
  )
}

export default SurfingButtons
