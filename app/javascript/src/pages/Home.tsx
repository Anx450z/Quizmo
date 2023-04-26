import React from 'react'
import Quiz from './Quizzes'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <button onClick={() => navigate('/new_quiz')}>Create new quiz</button>
    
    <Quiz/>
    </>
  )
}

export default Home
