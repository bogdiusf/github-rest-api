import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

function Home() {
  const navigate = useNavigate()
  const inputUsername = useSelector((state) => state.inputUsername)
  const dispatch = useDispatch()

  return (
    <>
      <button
        style={{ position: 'absolute', top: 100, left: '47.5%' }}
        onClick={() => navigate(`/`)}
      >
        Home
      </button>
      <input
        style={{ position: 'absolute', top: 150, left: '45%' }}
        value={inputUsername}
        onChange={(e) =>
          dispatch({ type: 'SET_USER', payload: e.target.value })
        }
      />
      <button
        style={{ position: 'absolute', top: 200, left: '47.5%' }}
        onClick={() => navigate(`/user/${inputUsername}`)}
      >
        Fetch repos
      </button>
      <button
        style={{ position: 'absolute', top: 250, left: '47.5%' }}
        // onClick={() =>
        //   dispatch({
        //     type: 'ADD_REPO',
        //     payload: { id: 12121222, name: 'PENIS_PENIS' }
        //   })
        // }
      >
        Add repos
      </button>
    </>
  )
}

export default Home
