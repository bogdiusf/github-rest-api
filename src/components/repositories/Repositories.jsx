// React libraries
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { useSearchParams } from 'react-router-dom'

// Style related components / libraries
import { AnimatePresence, motion } from 'framer-motion'
import { RepositoryStyles } from './Repositories.styles'
import noResults from '../../assets/no-results.png'
import repository from '../../assets/folder.png'

// Others
import FadeTransition from '../shared/FadeTransition'
import Repository from './Repository'
import SurfingButtons from '../surfing-buttons/SurfingButtons'
import FetchData from '../../utils/FetchData'
import Loader from '../shared/Loader'

const useStyles = createUseStyles(RepositoryStyles)

const Repositories = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const { fetchedData } = useSelector((state) => state)
  const { repos, userData } = fetchedData

  const urlPageNr = parseInt(searchParams.get('page'))
  const currentPage = parseInt(searchParams.get('page'))
  const nrOfPages = Math.ceil(userData.public_repos / 5)
  const { fetchRepoData } = FetchData()

  useEffect(() => {
    if (searchParams.get('page') === null || searchParams.get('page') === '') {
      setSearchParams({ page: 1 })
    }

    if (urlPageNr < 1 || isNaN(searchParams.get('page'))) {
      setSearchParams({ page: 1 })
    }
    if (urlPageNr > nrOfPages) {
      setSearchParams({ page: nrOfPages })
    }
  }, [])

  useEffect(() => {
    const abortController = new AbortController()
    fetchRepoData(currentPage, abortController.signal)

    return () => abortController.abort()
  }, [currentPage])

  const classes = useStyles()

  return (
    <>
      <AnimatePresence mode="popLayout">
        <div className={classes.headerTitle}>
          {!repos.length ? (
            <div className={classes.imageContainer}>
              <img src={noResults} height="200" width="200" />
            </div>
          ) : (
            <div className={classes.titleContainer}>
              <span>Repositories</span>
              <img src={repository} height="25" width="25" />
            </div>
          )}
        </div>
        {isLoading ? (
          <motion.div key="loader">
            <FadeTransition>
              <Loader />
            </FadeTransition>
          </motion.div>
        ) : (
          repos.length > 0 && (
            <motion.div
              key="child"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, transition: { duration: 1 } }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.main className={classes.repoContainer}>
                {repos?.map((item, index) => (
                  <Repository key={index} item={item} index={index} />
                ))}
              </motion.main>
            </motion.div>
          )
        )}
        <motion.div key="buttons" layout transition={{ duration: 1 }}>
          <SurfingButtons
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            nrOfPages={nrOfPages}
            setIsLoading={setIsLoading}
          />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Repositories
