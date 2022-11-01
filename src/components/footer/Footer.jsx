import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

const Footer = () => {
  return (
    <AnimatePresence>
      <motion.div
        style={{
          height: 250,
          backgroundColor: '#3D3D3D',
          display: 'flex',
          marginTop: 200,
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          // position: 'absolute',
          bottom: 0,
          '@media screen and (maxWidth: 768px)': {
            marginTop: 0
          }
        }}
        layout
      >
        <p>This is a footer</p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Footer
