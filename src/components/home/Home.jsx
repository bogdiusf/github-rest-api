// React libraries
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

// Style related components / libraries
import { motion, AnimatePresence } from 'framer-motion'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { HomeStyles } from './Home.styles'
import amdarisLogo from '../../assets/amdaris-logo.svg'
import githubLogo from '/icons8-github-200.svg'

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
      <motion.div
        key="amdaris-svg"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <img src={amdarisLogo} height="150" width="300" />
      </motion.div>
      <motion.img
        src={githubLogo}
        width="150"
        height="150"
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 5, repeat: Infinity, repeatType: 'reverse' }}
        style={{ margin: '0 auto', marginBottom: 30 }}
      />
      <motion.main key="main" className={classes.main}>
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
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className={classes.button}
              whileHover={{ scale: 1.2, cursor: 'pointer' }}
              onClick={handleSubmit}
            >
              <AiOutlineArrowRight fill="var(--white)" />
            </motion.button>
          )}
        </AnimatePresence>
      </motion.main>
    </FadeTransition>
  )
}

export default Home
