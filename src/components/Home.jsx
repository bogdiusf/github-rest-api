import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

function Home() {
  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState('')

  const handleSubmit = () => {
    navigate(`/user/${inputUsername}`)
  }

  return (
    <>
      <motion.input
        as={motion.input}
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <motion.button
        whileHover={{ scale: 1.05 }}
        colorScheme="teal"
        disabled={!inputUsername}
        onClick={handleSubmit}
      >
        Fetch repos
      </motion.button>
    </>
  )
}

export default Home
