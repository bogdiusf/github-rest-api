// React libraries
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion, AnimatePresence } from 'framer-motion'
import { ImGithub } from 'react-icons/im'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { HomeStyles } from './Home.styles'

// Others
import FadeTransition from '../shared/FadeTransition'

const useStyles = createUseStyles(HomeStyles)

function Home() {
  const [inputUsername, setInputUsername] = useState('')
  const navigate = useNavigate()

  const handleSubmit = () => {
    navigate(`/user/${inputUsername}?page=1`)
  }

  const classes = useStyles()

  return (
    <FadeTransition className={classes.homeContainer}>
      <header key="1" className={classes.header}>
        <h1>Not enough info about your future employee?</h1>
        <h2>Grab his spare time projects now!</h2>
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity }}
        >
          <ImGithub />
        </motion.div>
      </header>
      <AnimatePresence mode="popLayout">
        <main key="2" className={classes.main}>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.button}
              whileHover={
                inputUsername
                  ? {
                      scale: 1.2,
                      cursor: 'pointer',
                      transition: { type: 'spring' }
                    }
                  : { cursor: 'not-allowed' }
              }
              onClick={handleSubmit}
            >
              <AiOutlineArrowRight fill="#242424" />
            </motion.button>
          )}
        </main>
      </AnimatePresence>
    </FadeTransition>
  )
}

export default Home
