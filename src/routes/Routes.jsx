import React from 'react'
import { useSelector } from 'react-redux'
import { Routes, Route } from 'react-router-dom'
import Home from '../components/pages/Home'
import UserProfile from '../components/pages/UserProfile'

const AppRoutes = () => {
  const inputUsername = useSelector((state) => state.inputUsername)
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path={`/user/${inputUsername}`}
          element={<UserProfile inputUsername={inputUsername} />}
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </>
  )
}

export default AppRoutes
