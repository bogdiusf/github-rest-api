import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useNavigate } from 'react-router-dom'

const SurfingButton = ({
  searchParams,
  setSearchParams,
  setIsPageLoading,
  page
}) => {
  const navigate = useNavigate()

  const [isSelected, setIsSelected] = useState(false)
  const [clickedPage, setClickedPage] = useState(page)
  const urlPage = searchParams.get('page')

  console.log(urlPage === clickedPage)

  const handlePages = () => {
    setClickedPage(page)
    setIsPageLoading(true)
    // setSearchParams({ page: page })
    navigate(`?page=${page}`)
    setTimeout(() => {
      setIsPageLoading(false)
    }, 1500)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.5, backgroundColor: '#242424' }}
      onClick={() => handlePages()}
      style={{
        cursor: 'pointer',
        color: 'white',
        textAlign: 'center',
        width: 50,
        height: 50,
        borderRadius: '50%',
        backgroundColor: 'rgba(61,61,61,1)'
      }}
      //TODO: styles
    >
      {page}
    </motion.button>
  )
}

export default SurfingButton
