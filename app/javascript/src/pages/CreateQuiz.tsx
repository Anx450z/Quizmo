import React from 'react'
import QuizForm from './QuizForm'
import { useNavigate } from 'react-router-dom'
import quizApi from '../apis/quiz'

const CreateQuiz = () => {
  const handleCreateQuiz = async (e:any) => {

    const data = new FormData(e.currentTarget)

    const quiz = {
      title: data.get('title')as string,
      description: data.get('description') as string
    }

    await quizApi.create(quiz)
  }

  const navigate = useNavigate()
  return (
    <>
      <QuizForm button={"Create"} handleSubmit={handleCreateQuiz}/>
      <button onClick={()=>navigate('/')}>All Quizzes</button>
    </>
  )
}

export default CreateQuiz
