import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <header className={classes.header}>
        <h1>Not enough info about a future employee?</h1>
        <h2>Grab his spare time projects now!</h2>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <ImGithub />
        </motion.div>
      </header>
      <main className={classes.main}>
        <motion.input
          className={classes.input}
          placeholder="Enter a username..."
          value={inputUsername}
          onChange={(e) => setInputUsername(e.target.value)}
        />
        <motion.button
          className={classes.button}
          whileHover={
            inputUsername
              ? { scale: 1.1, cursor: 'pointer' }
              : { cursor: 'not-allowed' }
          }
          disabled={!inputUsername}
          onClick={handleSubmit}
        >
          Fetch repos
        </motion.button>
      </main>
    </motion.div>
  )
}

export default Home
