import React from 'react'
import Quizzes from './Quizzes'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/new_quiz')}>Create new quiz</button>
      <Quizzes />
    </>
  )
}

export default Home
