import React, { useState } from 'react'
import QuizForm from './QuizForm'
import quizApi, { QuizType } from '../apis/quiz'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'
import questionApi, { QuestionType } from '../apis/questions'
import CreateQuestion from '../components/question/CreateQuestion'
import QuestionCard from '../components/question/QuestionCard'

const Quiz = () => {
  const navigate = useNavigate()
  const { id } = useParams()

  // const [selectedQuestion,setSelectedQuestion] = useState<string>()
  // const [selectedOption,setSelectedOption] = useState<string>()

  interface Quiz extends QuizType {
    questions: QuestionType[]
  }

  const getQuiz = async () => {
    const response = await quizApi.show(id!)
    return response.data
  }

  const handleUpdateQuiz = async (e: any) => {
    const data = new FormData(e.currentTarget)

    const quiz = {
      title: data.get('title') as string,
      description: data.get('description') as string,
    }
    await quizApi.update(id!, quiz)
    mutate()
  }

  const handleCreateQuestion = async () => {
    mutate()
  }

  const handleCreateOption = async () => {
    mutate()
  }

  const handleDeleteOption = async () => {
    mutate()
  }


  const handleDeleteQuestion = async (question_id: string) => {
    await questionApi.deleteQuestion(id!, question_id!)
    mutate()
  }

  const { data: quiz, isLoading, mutate } = useSwr<Quiz>([`quiz`, id], getQuiz)

  return (
    <div className="w-screen flex-col" id="quiz-container">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <QuizForm data={quiz} button={'Update'} handleSubmit={handleUpdateQuiz} />
          <button onClick={() => navigate('/')}>All Quizzes</button>
          <CreateQuestion onSubmit={handleCreateQuestion}/>
          <p className="m-2 p-2 text-xl font-bold">Questions</p>
          <ul className="container flex-col">
            {quiz?.questions.map(({ question, options }: QuestionType, index: number) => (
              <QuestionCard
                id={question.id}
                key={question.id}
                index={index}
                handleDeleteQuestion={handleDeleteQuestion}
                question={question.question}
                options = {options}
                onOptionCreate={handleCreateOption}
                onOptionDelete={handleDeleteOption}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Quiz
