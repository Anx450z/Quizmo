import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import quizApi from '../apis/quiz'

const QuizScore = () => {
  const { id } = useParams()
  const [score, setScore] = useState()
  const getScore = async() => {
    const response  = await quizApi.score(id!)
    setScore(response.data.score)
  }
  const navigate = useNavigate()

  useEffect(() => {
    getScore()
  },[])
  
  return (
    <>
      <h2>QuizScore</h2>
      <h1>{score}</h1>
      <button onClick={() => navigate('/')}>All quizzes</button>
    </>
  )
}

export default QuizScore
