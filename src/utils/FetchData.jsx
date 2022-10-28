// React libraries
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const BASE_URL = 'https://api.github.com/users'

const FetchData = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useParams()

  const fetchRepoData = async (pageNumber = 1) => {
    try {
      const repoResponse = await fetch(
        `${BASE_URL}/${user}/repos?per_page=5&page=${pageNumber}`,
        {
          headers: {
            Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
          }
        }
      )
      if (repoResponse.status === 200) {
        const reposData = await repoResponse.json()
        dispatch({ type: 'SET_REPOS', payload: reposData })
      } else if (repoResponse.status === 404) {
        navigate(`/user/${user}/user-not-found`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  const fetchUserData = async () => {
    try {
      const userResponse = await fetch(`${BASE_URL}/${user}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      })
      if (userResponse.status === 200) {
        const userData = await userResponse.json()
        dispatch({ type: 'SET_USER_DATA', payload: userData })
      } else if (userResponse.status === 404) {
        navigate(`/user/${user}/user-not-found`)
      }
    } catch (e) {
      console.log(e)
    }
  }

  return { fetchRepoData, fetchUserData }
}

export default FetchData
