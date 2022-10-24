import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import UserNotFound from '../components/UserNotFound'
import UserProfile from '../components/UserProfile'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/user/:user`}>
          <Route index={true} element={<UserProfile />} />
          <Route path="user-not-found" element={<UserNotFound />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
