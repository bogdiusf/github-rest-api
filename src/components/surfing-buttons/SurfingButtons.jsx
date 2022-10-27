import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SurfingButtons = ({
  searchParams,
  setSearchParams,
  setIsPageLoading,
  nrOfPages
}) => {
  const [selectedPage, setSelectedPage] = useState()

  useEffect(() => {
    const currentPage = parseInt(searchParams.get('page'))
    setSelectedPage(currentPage)
  }, [searchParams])

  const handlePages = (pageNr) => {
    setIsPageLoading(true)
    setSearchParams({ page: pageNr })
    setTimeout(() => {
      setIsPageLoading(false)
    }, 1500)
  }

  const pageButtons = []
  for (let i = 0; i < nrOfPages; i++)
    pageButtons.push(
      <motion.button
        key={i}
        animate={
          i + 1 === selectedPage
            ? {
                backgroundColor: '#3d3d3d',
                scale: 1.2,
                fontWeight: 700
              }
            : { backgroundColor: '#242424', scale: 1, fontWeight: 400 }
        }
        whileHover={{ scale: 1.2 }}
        onClick={() => handlePages(i + 1)}
        style={{
          cursor: 'pointer',
          color: 'white',
          textAlign: 'center',
          width: 50,
          height: 50,
          borderRadius: 2
        }}
        //TODO: styles
      >
        {i + 1}
      </motion.button>
    )

  return (
    <motion.div style={{ display: 'flex', gap: 20, margin: '0 auto' }}>
      {pageButtons}
    </motion.div>
  )
}

export default SurfingButtons
