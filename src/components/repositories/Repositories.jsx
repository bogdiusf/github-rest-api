// React libraries
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createUseStyles } from 'react-jss'
import { useSearchParams } from 'react-router-dom'

// Style related components / libraries
import { AnimatePresence, motion } from 'framer-motion'
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
      <AnimatePresence>
        {repoLoading ? (
          <FadeTransition delay={0.2}>
            <Loader />
          </FadeTransition>
        ) : (
          repos.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              key="child"
            >
              <motion.main className={classes.repoContainer}>
                <h1>Repositories</h1>
                {repos?.map((item, index) => (
                  <Repository key={index} item={item} index={index} />
                ))}
                <FadeTransition delay={0.3}>
                  <SurfingButtons
                    searchParams={searchParams}
                    setSearchParams={setSearchParams}
                    nrOfPages={nrOfPages}
                    repoLoading={repoLoading}
                    setRepoLoading={setRepoLoading}
                  />
                </FadeTransition>
              </motion.main>
            </motion.div>
          )
        )}
      </AnimatePresence>
    </>
  )
}

export default Repositories
