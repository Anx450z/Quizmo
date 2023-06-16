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
    return response.data
  }

  const logout = async () => {
    await userApi.logout()
    mutate()
  }

  const logged_in_mutate = async () => mutate()

  const {
    data: current_user,
    mutate,
    isLoading,
  } = useSwr('/is_logged_in', handleUserIsLogged, {
    revalidateOnFocus: false,
  })

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {current_user?.is_logged_in ? (
            <>
            <div className='flex items-start justify-between'>
              <div className="">
                <h1 className="text-left text-2xl font-extrabold text-indigo-600 shadow-black drop-shadow-sm">
                  Quizmo
                </h1>
              </div>
              <div>
                <label className='font-bold mx-2'>@{current_user.user?.username}</label>
                <div onClick={() => navigate('/new_quiz')} className="create-quiz-button">
                  + New Quiz
                </div>
                <label className='text-red-500 text-sm font-bold cursor-pointer' onClick={logout}>Logout</label>
              </div>
            </div>
              <Quizzes />
            </>
          ) : (
            <>
              <Login mutate={logged_in_mutate} />
            </>
          )}
        </>
      )}
    </>
  )
}

export default Home
