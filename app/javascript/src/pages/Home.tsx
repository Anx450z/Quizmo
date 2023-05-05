import React from 'react'
import Quizzes from './Quizzes'
import { useNavigate } from 'react-router-dom'
import userApi from '../apis/user'
import useSwr from 'swr'
import Login from './Login'

const Home = () => {
  const navigate = useNavigate()
  const handleUserIsLogged = async () => {
   const response = await userApi.is_logged_in()
   console.log(response.data)
   return response.data.is_logged_in
  }

  const logout = async () => {
    await userApi.logout()
    mutate()
  }

  const logged_in_mutate = async () => mutate()

  const { data: is_logged_in, mutate } = useSwr('/is_logged_in', handleUserIsLogged)

  return (
    <>
      {is_logged_in ? (
        <>
          <button onClick={() => navigate('/new_quiz')}>Create new quiz</button>
          <button onClick={logout}>Logout</button>
          <Quizzes />
        </>
      ) : (
        <>
          <Login mutate={logged_in_mutate} />
        </>
      )}
    </>
  )
}

export default Home
