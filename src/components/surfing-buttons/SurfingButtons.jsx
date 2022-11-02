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

  const handleBackAndForth = (actionType) => {
    switch (actionType) {
      case 'BACK': {
        if (selectedPage === 1) {
          return
        } else {
          console.log(selectedPage)
          setSearchParams({ page: selectedPage - 1 })
        }
      }
      case 'NEXT': {
        if (selectedPage < nrOfPages) {
          setIsLoading(true)
          setTimeout(() => {
            setIsLoading(false)
          }, 1500)
          setSearchParams({ page: selectedPage + 1 })
          if (endPage === selectedPage) {
            setStartingPage((prev) => prev + 1)
            setEndPage((prev) => prev + 1)
          }
        } else {
          return
        }
      }
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
    setSelectedPage(parseInt(searchParams.get('page')))
  }, [searchParams])

  useEffect(() => {
    setStartingPage(parseInt(searchParams.get('page')) - 4)
    setEndPage(parseInt(searchParams.get('page')))
  }, [])

  return (
    <div className={classes.buttonsContainer}>
      <Button
        index={'Back'}
        selectedPage={selectedPage}
        handleBackAndForth={handleBackAndForth}
        classes={classes}
      />
      {surfingButtons.slice(startingPage, endPage)}
      <Button
        index={'Next'}
        selectedPage={selectedPage}
        handleBackAndForth={handleBackAndForth}
        classes={classes}
      />
    </div>
  )
}

export default SurfingButtons
