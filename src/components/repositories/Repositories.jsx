// React libraries
import React, { useEffect } from 'react'
import { createUseStyles } from 'react-jss'
import { useSearchParams } from 'react-router-dom'

// Style related components / libraries
import { RepositoryStyles } from './Repositories.styles'

// Others
import FadeTransition from '../shared/FadeTransition'
import Repository from './Repository'
import SurfingButtons from '../surfing-buttons/SurfingButtons'

const useStyles = createUseStyles(RepositoryStyles)

const UserRepository = ({ repos, nrOfPages }) => {
  const [searchParams, setSearchParams] = useSearchParams()
  const classes = useStyles()
  const urlPageNr = parseInt(searchParams.get('page'))

  useEffect(() => {
    if (urlPageNr < 1 || isNaN(searchParams.get('page'))) {
      setSearchParams({ page: 1 })
    }
    if (urlPageNr > nrOfPages) {
      setSearchParams({ page: nrOfPages })
    }
  }, [])

  return (
    <>
      <main className={classes.repoContainer}>
        <h1>Repositories</h1>
        {repos?.map((item, index) => (
          <Repository key={index} item={item} index={index} layout />
        ))}
        <FadeTransition delay={0.5}>
          <SurfingButtons
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            nrOfPages={nrOfPages}
          />
        </FadeTransition>
      </main>
    </>
  )
}

export default UserRepository
