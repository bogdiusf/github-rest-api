import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useSearchParams } from 'react-router-dom'
import FadeTransition from '../shared/FadeTransition'
import Loader from '../Loader'
import { UserRepositoryStyles } from './Repositories.styles'
import { AiFillStar } from 'react-icons/ai'
import { GoRepoForked } from 'react-icons/go'
import { motion } from 'framer-motion'

import SurfingButtons from '../surfing-buttons/SurfingButtons'
import SurfingButton from '../surfing-buttons/SurfingButton'

const useStyles = createUseStyles(UserRepositoryStyles)

const UserRepository = ({ repos }) => {
  const [isPageLoading, setIsPageLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const classes = useStyles()

  const pageNumber = (searchParams.get('page') - 1) * 5
  const reposPerPage = pageNumber + 5
  const nrOfPages = Math.ceil(repos.length / 5)

  const surfingButtons = []
  for (let i = 1; i <= nrOfPages; i++) surfingButtons.push(i)

  useEffect(() => {
    if (searchParams.get('page') < 1) {
      setSearchParams({ page: 1 })
    }
    if (searchParams.get('page') > nrOfPages) {
      setSearchParams({ page: nrOfPages })
    }
    if (isNaN(searchParams.get('page'))) {
      setSearchParams({ page: 1 })
    }
  }, [searchParams.get('page')])

  return (
    <>
      <h1>Repositories</h1>
      {isPageLoading ? (
        <FadeTransition>
          <Loader />
        </FadeTransition>
      ) : (
        <div className={classes.repoContainer}>
          {repos.slice(pageNumber, reposPerPage).map((item, index) => (
            <FadeTransition
              delay={index * 0.15}
              isRepoComp={true}
              key={item.id}
            >
              <motion.div
                className={classes.repo}
                transition={{ duration: 0.3 }}
                whileHover={{
                  scale: 1.1,
                  cursor: 'pointer',
                  backgroundColor: '#000',
                  transition: { type: 'spring' }
                }}
                onClick={(e) => window.open(item.clone_url, '_blank')}
              >
                <div>{item.name}</div>
                <div className={classes.separator} />
                <div className={classes.starAndForkContainer}>
                  <div className={classes.center}>
                    <span>{item.stargazers_count}</span>
                    <AiFillStar fill="#ffff00" />
                  </div>
                  <div className={classes.center}>
                    <span>{item.forks_count}</span>
                    <GoRepoForked fill="#34c759" />
                  </div>
                </div>
              </motion.div>
            </FadeTransition>
          ))}
        </div>
      )}
      <SurfingButtons
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        setIsPageLoading={setIsPageLoading}
        nrOfPages={nrOfPages}
      />
    </>
  )
}

export default UserRepository
