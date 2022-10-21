import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route, Outlet } from 'react-router-dom'
import Home from '../components/Home'
import NotFound from '../components/NotFound'
import UserNotFound from '../components/UserNotFound'
import UserProfile from '../components/UserProfile'
import CustomRoute from './CustomRoute'

const AppRoutes = () => {
  const { inputUsername } = useSelector((state) => state)
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/user/${inputUsername}`}
          element={<UserProfile inputUsername={inputUsername} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default AppRoutes
