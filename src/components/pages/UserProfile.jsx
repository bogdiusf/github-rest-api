import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const BASE_URL = 'https://api.github.com/users'

const UserProfile = ({ inputUsername }) => {
  const [isLoading, setIsLoading] = useState(false)
  const data = useSelector((state) => state.reposData)
  const dispatch = useDispatch()

  const fetchData = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${BASE_URL}/${inputUsername}/repos`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}`
        }
      })
      const data = await response.json()
      dispatch({ type: 'POPULATE_REPOS', payload: data })
    } catch (e) {
      console.log(e)
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      {isLoading
        ? 'Loading'
        : data?.map((item) => (
            <div
              // onClick={async () => {
              //   await navigator.clipboard
              //     .writeText(item.clone_url !== undefined)
              //     .then(() => alert('Copied to clipboard'))
              // }}
              onClick={() =>
                dispatch({ type: 'DELETE_REPO', payload: item.id })
              }
              key={item.id}
            >
              {item.name}
            </div>
          ))}
    </>
  )
}

export default UserProfile
