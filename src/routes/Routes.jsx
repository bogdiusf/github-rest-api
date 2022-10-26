import React from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

import Home from '../components/home/Home'
import UserProfile from '../components/user-profile/UserProfile'
import UserNotFound from '../components/user-not-found/UserNotFound'
import NotFound from '../components/404/NotFound'

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
