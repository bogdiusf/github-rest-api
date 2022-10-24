import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const BASE_URL = 'https://api.github.com/users'

const UserProfile = () => {
  const { reposData, isLoading, response } = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user } = useParams()

  const fetchData = async () => {
    try {
      dispatch({ type: 'SET_LOADER', payload: true })
      const response = await fetch(`${BASE_URL}/${user}/repos`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      })
      if (response.status === 200) {
        const data = await response.json()
        if (data.length > 0) {
          dispatch({ type: 'SET_REPOS', payload: data })
        } else {
          dispatch({
            type: 'SET_RESPONSE',
            payload: { success: false, message: 'User has no repositories!' }
          })
        }
      } else if (response.status === 404) {
        dispatch({
          type: 'SET_RESPONSE',
          payload: { success: false, message: 'User not found!' }
        })
        navigate('/user-not-found')
      }
    } catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      dispatch({ type: 'SET_LOADER', payload: false })
    }, 1000)
  }

  useEffect(() => {
    dispatch({ type: 'SET_REPOS', payload: [] })
  }, [])

  useEffect(() => {
    fetchData()
  }, [user])

  useEffect(() => {
    if (user === '') {
      navigate('/')
    }
  }, [user])

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <>
          {reposData?.map((item) => (
            <div
              onClick={async () => {
                await navigator.clipboard
                  .writeText(item.clone_url)
                  .then(() => alert('Copied to clipboard'))
              }}
              key={item.id}
            >
              {item.name}
            </div>
          ))}
          {!response.success && <div>{response.message}</div>}
        </>
      )}
    </>
  )
}

export default UserProfile
