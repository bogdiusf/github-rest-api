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
      window.scrollTo({ top: 0, behavior: 'smooth' })
      setSearchParams({ page: pageNr })

      setTimeout(() => {
        setRepoLoading(false)
      }, 2000)
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

  return <div className={classes.buttonsContainer}>{surfingButtons}</div>
}

export default SurfingButtons
