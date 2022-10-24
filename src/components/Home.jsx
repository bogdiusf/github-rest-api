import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'

import { createUseStyles } from 'react-jss'
import { HomeStyles } from './Home.styles'

import { ImGithub } from 'react-icons/im'

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
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 50
          }}
        >
          <h1 style={{ padding: 0 }}>Not enough info of a future employee?</h1>
          <h2>Grab his spare time projects now!</h2>
          <ImGithub style={{ fontSize: 140 }} />
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <motion.input
            className={classes.input}
            placeholder="Enter a username..."
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
          />
          <motion.button
            className={classes.button}
            whileHover={inputUsername && { scale: 1.1 }}
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
