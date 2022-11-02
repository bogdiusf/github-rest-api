// React libraries
import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { ButtonsStyles } from './Buttons.styles'

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
  const [startingPage, setStartingPage] = useState(0)
  const [endPage, setEndPage] = useState(4)
  const urlPageNr = parseInt(searchParams.get('page'))

  const handlePages = (pageNr) => {
    if (selectedPage === pageNr) {
      return
    } else {
      setSearchParams({ page: pageNr })
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }

  const handleBack = () => {
    if (selectedPage === 1) {
      return
    } else {
      setSearchParams({ page: selectedPage - 1 })
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
  }

  const handleNext = () => {
    if (selectedPage === nrOfPages) {
      return
    } else {
      setSearchParams({ page: selectedPage + 1 })
      setIsLoading(true)
      setTimeout(() => {
        setIsLoading(false)
      }, 1500)
    }
    if (endPage === selectedPage) {
      setStartingPage((prev) => prev + 1)
      setEndPage((prev) => prev + 1)
    }
  }

  const classes = useStyles()

  const surfingButtons = []
  for (let i = 0; i < nrOfPages; i++)
    surfingButtons.push(
      <Button
        key={i}
        index={i + 1}
        selectedPage={selectedPage}
        handlePages={handlePages}
        classes={classes}
      />
    )

  useEffect(() => {
    setSelectedPage(urlPageNr)
  }, [urlPageNr])

  useEffect(() => {
    if (urlPageNr < 5) {
      setStartingPage(0)
      setEndPage(4)
    } else {
      setStartingPage(urlPageNr - 4)
      setEndPage(urlPageNr)
    }
  }, [])

  return (
    <div className={classes.buttonsContainer}>
      <Button
        index={'Back'}
        selectedPage={selectedPage}
        handleBackAndForth={handleBack}
        classes={classes}
      />
      {surfingButtons.slice(startingPage, endPage)}
      <Button
        index={'Next'}
        selectedPage={selectedPage}
        handleBackAndForth={handleNext}
        classes={classes}
      />
    </div>
  )
}

export default SurfingButtons
