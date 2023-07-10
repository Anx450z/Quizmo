import React from 'react'
import Quizzes from './Quizzes'
import { useNavigate } from 'react-router-dom'
import userApi from '../apis/user'
import useSwr from 'swr'
import Login from './Login'
import Navbar from '../components/common/Navbar'

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
                <Navbar>
                  <div>
                    <label className="mx-2 font-bold">@{current_user.user?.username}</label>
                    <div onClick={() => navigate('/new_quiz')} className="create-quiz-button">
                      + New Quiz
                    </div>
                    <label
                      className="cursor-pointer text-sm font-bold text-red-500"
                      onClick={logout}>
                      Logout
                    </label>
                  </div>
                </Navbar>
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
