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
  const [endPage, setEndPage] = useState(12)

  const handlePages = (pageNr) => {
    if (selectedPage === pageNr) {
      return
    } else {
      if (endPage === pageNr) {
        setStartingPage((prev) => prev + 1)
        setEndPage((prev) => prev + 1)
      }
      if (startingPage + 1 === pageNr && pageNr > 1) {
        setStartingPage((prev) => prev - 1)
        setEndPage((prev) => prev - 1)
      }
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
        handlePages={() => handlePages(i + 1)}
        classes={classes}
      />
    )

  useEffect(() => {
    setSelectedPage(parseInt(searchParams.get('page')))
  }, [searchParams])

  return (
    <div className={classes.buttonsContainer}>
      {surfingButtons.slice(startingPage, endPage)}
    </div>
  )
}

export default SurfingButtons
