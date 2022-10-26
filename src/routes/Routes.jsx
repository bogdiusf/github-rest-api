import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import UserNotFound from '../components/UserNotFound'
import UserProfile from '../components/UserProfile'
import { AnimatePresence } from 'framer-motion'

const AppRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/user">
          <Route index={true} element={<Navigate to="/" />} />
          <Route path={`:user`}>
            <Route index={true} element={<UserProfile />} />
            <Route path="user-not-found" element={<UserNotFound />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  )
}

export default AppRoutes
