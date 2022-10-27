import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

const BASE_URL = 'https://api.github.com/users'

const FetchData = () => {
  const dispatch = useDispatch()
  const { user } = useParams()

  const fetchData = async () => {
    try {
      dispatch({ type: 'SET_LOADER', payload: true })
      const repoResponse = await fetch(`${BASE_URL}/${user}/repos`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      })
      const userResponse = await fetch(`${BASE_URL}/${user}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      })
      if (repoResponse.status === 200) {
        const reposData = await repoResponse.json()
        const userData = await userResponse.json()
        dispatch({ type: 'SET_REPOS', payload: reposData })
        dispatch({ type: 'SET_USER_DATA', payload: userData })
      } else if (repoResponse.status === 404) {
        navigate(`/user/${user}/user-not-found`)
      }
    } catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      dispatch({ type: 'SET_LOADER', payload: false })
    }, 2000)
  }

  return fetchData
}

export default FetchData
