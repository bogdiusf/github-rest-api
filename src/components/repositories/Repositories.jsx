// React libraries
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { useSearchParams } from 'react-router-dom'

// Style related components / libraries
import { motion } from 'framer-motion'
import { RepositoryStyles } from './Repositories.styles'

// Others
import FadeTransition from '../shared/FadeTransition'
import Repository from './Repository'
import SurfingButtons from '../surfing-buttons/SurfingButtons'
import FetchData from '../../utils/FetchData'
import Loader from '../Loader'

const useStyles = createUseStyles(RepositoryStyles)

const Repositories = () => {
  const [repoLoading, setRepoLoading] = useState(false)

  const [searchParams, setSearchParams] = useSearchParams()
  const classes = useStyles()
  const urlPageNr = parseInt(searchParams.get('page'))

  const { fetchedData } = useSelector((state) => state)
  const { repos, userData } = fetchedData
  const { fetchRepoData } = FetchData()

  const currentPage = parseInt(searchParams.get('page'))
  const nrOfPages = Math.ceil(userData.public_repos / 10)

  useEffect(() => {
    if (urlPageNr < 1 || isNaN(searchParams.get('page'))) {
      setSearchParams({ page: 1 })
    }
    if (urlPageNr > nrOfPages) {
      setSearchParams({ page: nrOfPages })
    }
  }, [])

  useEffect(() => {
    if (searchParams.get('page') === null || searchParams.get('page') === '') {
      setSearchParams({ page: 1 })
    }
  }, [searchParams])

  useEffect(() => {
    fetchRepoData(currentPage)
  }, [currentPage])

  return (
    <>
      {repoLoading ? (
        <Loader />
      ) : (
        repos.length > 0 && (
          <FadeTransition>
            <motion.main className={classes.repoContainer}>
              <h1>Repositories</h1>
              {repos?.map((item, index) => (
                <Repository key={index} item={item} index={index} />
              ))}
              <SurfingButtons
                searchParams={searchParams}
                setSearchParams={setSearchParams}
                nrOfPages={nrOfPages}
                repoLoading={repoLoading}
                setRepoLoading={setRepoLoading}
              />
            </motion.main>
          </FadeTransition>
        )
      )}
    </>
  )
}

export default Repositories
