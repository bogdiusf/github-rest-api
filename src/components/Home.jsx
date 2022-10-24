import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { createUseStyles } from 'react-jss'
import { HomeStyles } from './Home.styles'

const useStyles = createUseStyles(HomeStyles)

function Home() {
  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState('')

  const classes = useStyles()

  const handleSubmit = () => {
    navigate(`/user/${inputUsername}`)
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div
          style={{
            height: 200,
            backgroundColor: '#3d3d3d',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
            marginBottom: 50
          }}
        >
          Placeholder for an image or someth
        </div>
        <div>
          <motion.input
            className={classes.input}
            placeholder="Enter a username..."
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
          <motion.button
            className={classes.button}
            whileHover={{ scale: 1.1 }}
            disabled={!inputUsername}
            onClick={handleSubmit}
          >
            Fetch repos
          </motion.button>
        </div>
      </motion.div>
    </>
  )
}

export default Home
