import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const BASE_URL = 'https://api.github.com/users'

function Home() {
  const navigate = useNavigate()
  const inputUsername = useSelector((state) => state.inputUsername)

  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      dispatch({ type: 'SET_LOADER', payload: true })
      const response = await fetch(`${BASE_URL}/${inputUsername}/repos`, {
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
      }
    } catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      dispatch({ type: 'SET_LOADER', payload: false })
    }, 1000)
  }

  const handleSubmit = () => {
    fetchData()
    dispatch({
      type: 'SET_RESPONSE',
      payload: { success: true, message: '' }
    })
    navigate(`/user/${inputUsername}`)
  }

  return (
    <>
      <button
        onClick={() => {
          navigate(`/`)
          dispatch({ type: 'SET_USER', payload: '' })
        }}
      >
        Home
      </button>
      <input
        value={inputUsername}
        onChange={(e) =>
          dispatch({ type: 'SET_USER', payload: e.target.value })
        }
      />
      <button disabled={!inputUsername} onClick={handleSubmit}>
        Fetch repos
      </button>
    </>
  )
}

export default Home
