import React from 'react'

import { motion, AnimatePresence } from 'framer-motion'

const Footer = () => {
  return (
    <AnimatePresence>
      <motion.div
        style={{
          height: 150,
          backgroundColor: '#3D3D3D',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw'
        }}
        layout
      >
        <p>This is a footer</p>
      </motion.div>
    </AnimatePresence>
  )
}

export default Footer
