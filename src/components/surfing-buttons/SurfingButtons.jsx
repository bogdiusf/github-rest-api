import React from 'react'
import { motion } from 'framer-motion'

const SurfingButtons = ({ setSearchParams, setIsPageLoading, nrOfPages }) => {
  const handlePages = (pageNr) => {
    setIsPageLoading(true)
    setSearchParams({ page: pageNr + 1 })
    setTimeout(() => {
      setIsPageLoading(false)
    }, 1500)
  }

  const pageButtons = []
  for (let i = 0; i < nrOfPages; i++)
    pageButtons.push(
      <motion.button
        key={i}
        onClick={() => handlePages(i)}
        style={{ minWidth: '15%', flex: 2, cursor: 'pointer' }}
        //TODO: styles
      >
        {i + 1}
      </motion.button>
    )

  return (
    <motion.div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {pageButtons}
    </motion.div>
  )
}

export default SurfingButtons
