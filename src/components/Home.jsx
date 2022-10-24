import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

function Home() {
  const navigate = useNavigate()
  const [inputUsername, setInputUsername] = useState('')

  const handleSubmit = () => {
    navigate(`/user/${inputUsername}`)
  }

  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: 'SET_USER', payload: '' })
        }}
      >
        Clear input
      </button>
      <input
        value={inputUsername}
        onChange={(e) => setInputUsername(e.target.value)}
      />
      <button disabled={!inputUsername} onClick={handleSubmit}>
        Fetch repos
      </button>
    </>
  )
}

export default Home
