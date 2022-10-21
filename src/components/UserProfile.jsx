import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const UserProfile = () => {
  const { reposData, isLoading, response } = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log(response)

  useEffect(() => {
    dispatch({ type: 'SET_REPOS', payload: [] })
  }, [])

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        <div>
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
          {response.success === false && <div>{response.message}</div>}
        </div>
      )}
    </>
  )
}

export default UserProfile
