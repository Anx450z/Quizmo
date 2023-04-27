import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { axiosInterceptor, setAuthHeaders } from './apis/axios'
import CreateQuiz from './pages/CreateQuiz'

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
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
