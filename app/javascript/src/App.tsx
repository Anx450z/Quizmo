import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { axiosInterceptor, setAuthHeaders } from './apis/axios'
import CreateQuiz from './pages/CreateQuiz'
import Quiz from './pages/Quiz'
import SignUp from './pages/SignUp'
import Login from './pages/Login'

const App = () => {
  useEffect(() => {
    setAuthHeaders()
    axiosInterceptor()
  }, [])

  return (
    <>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new_quiz" element={<CreateQuiz />} />
          <Route path="/show_quiz/:id" element={<Quiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
