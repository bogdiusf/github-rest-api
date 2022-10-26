import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { createUseStyles } from 'react-jss'
import { HomeStyles } from './Home.styles'
import { ImGithub } from 'react-icons/im'
import { AiOutlineArrowRight } from 'react-icons/ai'
import FadeTransition from './shared/FadeTransition'

const useStyles = createUseStyles(HomeStyles)

function Home() {
  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState('')

  const classes = useStyles()

  const handleSubmit = () => {
    navigate(`/user/${inputUsername}`)
  }

  const submitButtonTransition = {
    initial: { opacity: 0, scale: 0 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0 },
    transition: { duration: 0.5 }
  }

  return (
    <FadeTransition>
      <header className={classes.header}>
        <h1>Not enough info about your future employee?</h1>
        <h2>Grab his spare time projects now!</h2>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <ImGithub />
        </motion.div>
      </header>
      <main className={classes.main}>
        <AnimatePresence mode="popLayout">
          <motion.input
            layout
            key="input"
            className={classes.input}
            placeholder="Enter a username..."
            value={inputUsername}
            onChange={(e) => setInputUsername(e.target.value)}
            onKeyDown={(e) => (e.key === 'Enter' ? handleSubmit() : null)}
          />
          {inputUsername && (
            <motion.button
              layout
              key="button"
              {...submitButtonTransition}
              className={classes.button}
              whileHover={
                inputUsername
                  ? {
                      scale: 1.1,
                      cursor: 'pointer',
                      transition: { type: 'spring' }
                    }
                  : { cursor: 'not-allowed' }
              }
              onClick={handleSubmit}
            >
              <span>Fetch repos</span>
              <AiOutlineArrowRight />
            </motion.button>
          )}
        </AnimatePresence>
      </main>
    </FadeTransition>
  )
}

export default Home
