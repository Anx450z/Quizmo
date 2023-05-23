import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { axiosInterceptor, setAuthHeaders } from './apis/axios'
import CreateQuiz from './pages/CreateQuiz'
import Quiz from './pages/Quiz'
import SignUp from './pages/SignUp'
import Login from './pages/Login'
import PreviewQuiz from './pages/PreviewQuiz'
import QuizScore from './pages/QuizScore'

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
          <Route path="/preview_quiz/:id" element={<PreviewQuiz />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/quiz/show_score/:id" element={<QuizScore />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
