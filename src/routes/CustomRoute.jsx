import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import UserNotFound from '../components/UserNotFound'
import UserProfile from '../components/UserProfile'

const CustomRoute = ({ reposData, inputUsername }) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (reposData?.length > 0) {
      navigate(`/user/${inputUsername}`)
    }
  }, [])

  return <div>CustomRoute</div>
}

export default CustomRoute
