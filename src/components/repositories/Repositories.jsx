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
  const nrOfPages = Math.ceil(userData.public_repos / 5)

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
      <AnimatePresence mode="popLayout">
        <h2 className={classes.header}>Repositories</h2>
        {repoLoading ? (
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
              exit={{
                scale: 0,
                opacity: 0
              }}
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
        <motion.div layout key="buttons" transition={{ duration: 1 }}>
          <SurfingButtons
            searchParams={searchParams}
            setSearchParams={setSearchParams}
            nrOfPages={nrOfPages}
            repoLoading={repoLoading}
            setRepoLoading={setRepoLoading}
          />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default Repositories
