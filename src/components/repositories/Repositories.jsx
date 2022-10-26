import React, { useEffect, useState } from 'react'
import { createUseStyles } from 'react-jss'
import { useSearchParams } from 'react-router-dom'
import FadeTransition from '../shared/FadeTransition'
import Loader from '../Loader'
import { UserRepositoryStyles } from './Repositories.styles'
import { AiFillStar } from 'react-icons/ai'
import ForkIcon from '../../assets/gitFork.svg'
import { motion } from 'framer-motion'

const useStyles = createUseStyles(UserRepositoryStyles)

const UserRepository = ({ reposData }) => {
  const [isPageLoading, setIsPageLoading] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const classes = useStyles()

  const pageNumber = (searchParams.get('page') - 1) * 5
  const reposPerPage = pageNumber + 5
  const nrOfPages = Math.ceil(reposData.length / 5)

  const handlePages = (pageNr) => {
    setIsPageLoading(true)
    setSearchParams({ page: pageNr + 1 })
    setTimeout(() => {
      setIsPageLoading(false)
    }, 2000)
  }

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

  const PageButtons = () => {
    const pageButtons = []
    for (let i = 0; i < nrOfPages; i++)
      pageButtons.push(
        <button
          key={i}
          onClick={() => handlePages(i)}
          style={{ minWidth: '15%', cursor: 'pointer' }}
        >
          {i + 1}
        </button>
      )

    return pageButtons
  }

  return (
    <>
      <h1>Repositories</h1>
      {isPageLoading ? (
        <FadeTransition>
          <Loader />
        </FadeTransition>
      ) : (
        <div className={classes.repoContainer}>
          {reposData.slice(pageNumber, reposPerPage).map((item, index) => (
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
                  backgroundColor: 'rgba(0,0,0,1)',
                  transition: { type: 'spring' }
                }}
                onClick={(e) => window.open(item.clone_url, '_blank')}
              >
                <div>{item.name}</div>
                <div className={classes.starAndForkContainer}>
                  <div className={classes.center}>
                    <span>{item.stargazers_count}</span>
                    <AiFillStar fill="yellow" />
                  </div>
                  <div className={classes.center}>
                    <span>{item.forks_count}</span>
                    <img src={ForkIcon} />
                  </div>
                </div>
              </motion.div>
            </FadeTransition>
          ))}
        </div>
      )}
      <motion.div
        layout
        style={{ display: 'flex', justifyContent: 'space-between' }}
      >
        <PageButtons />
      </motion.div>
    </>
  )
}

export default UserRepository
