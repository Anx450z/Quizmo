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

  const handleUpdateQuiz = async (e:any) => {
    const data = new FormData(e.currentTarget)

    const quiz = {
      title: data.get('title')as string,
      description: data.get('description') as string
    }
    await quizApi.update(id!,quiz)
    mutate()
  }

  const { data: quiz, isLoading, mutate} = useSwr<Quiz>(`quiz/${id}`, getQuiz)
  
  return (
    <div className='flex'>
    {isLoading ? <>Loading...</> :<>
      <QuizForm data={quiz} button={"Update"} handleSubmit={handleUpdateQuiz}/>
      <button onClick={()=>navigate('/')}>All Quizzes</button>
    </> }
    </div>
  )
}

export default Quiz
