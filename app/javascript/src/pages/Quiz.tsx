import React, { useEffect, useState } from 'react'
import QuizForm from './QuizForm'
import quizApi, {Quiz} from '../apis/quiz'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'

const Quiz = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  const getQuiz = async () => {
    const response = await quizApi.show(id!)
    return response.data.quiz
  }

  const { data: quiz, isLoading} = useSwr<Quiz>(`quiz/${id}`, getQuiz)

  // const setQuiz = () => {
  // ;(document.getElementById('title')as HTMLInputElement).value = quiz?.title||'';
  // (document.getElementById('description') as HTMLInputElement).value = quiz?.description||''
  // }
  
  return (
    <>
    {isLoading ? <>Loading...</> :<>
      <QuizForm data={quiz}/>
      <button onClick={()=>navigate('/')}>All Quizzes</button>
    </> }
    </>
  )
}

export default Quiz
