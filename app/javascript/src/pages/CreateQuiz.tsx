import React, { useState } from 'react'
import QuizForm from './QuizForm'
import { useNavigate } from 'react-router-dom'
import quizApi from '../apis/quiz'

const CreateQuiz = () => {
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()

  const handleCreateQuiz = async () => {

    const quiz = {
      title: title as string,
      description: description as string,
    }

    await quizApi.create(quiz)
  }

  const navigate = useNavigate()
  return (
    <>
      <QuizForm
        button={'Create'}
        handleSubmit={handleCreateQuiz}
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
      />
      <button onClick={() => navigate('/')}>All Quizzes</button>
    </>
  )
}

export default CreateQuiz
