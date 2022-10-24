import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/Home'
import NoRepos from '../components/NoRepos'
import NotFound from '../components/NotFound'
import UserNotFound from '../components/UserNotFound'
import UserProfile from '../components/UserProfile'

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={`/user/:user`} element={<UserProfile />} />
        <Route path="/user/:user/no-repos" element={<NoRepos />} />
        <Route path="/user/:user/user-not-found" element={<UserNotFound />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
