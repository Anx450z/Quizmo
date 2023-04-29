import React from 'react'
import QuizForm from './QuizForm'
import quizApi, { QuizType } from '../apis/quiz'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'
import questionApi, { QuestionType } from '../apis/questions'
import CreateQuestion from '../components/question/CreateQuestion'

const Quiz = () => {
  const navigate = useNavigate()
  const { id } = useParams()

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

  const handleDeleteQuestion = async (question_id: string) => {
    await questionApi.deleteQuestion(id!, question_id!)
    mutate()
  }

  const { data: quiz, isLoading, mutate } = useSwr<Quiz>(`quiz/${id}`, getQuiz)

  return (
    <div className="flex">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <QuizForm data={quiz} button={'Update'} handleSubmit={handleUpdateQuiz} />
          <button onClick={() => navigate('/')}>All Quizzes</button>
          <CreateQuestion />
          <ul className="flex-col">
            {quiz?.questions.map(({ id, question }: QuestionType) => (
              <li key={id} id={id}>
                <label>question : </label>
                <label>{question}</label>
                <button className="delete" onClick={() => handleDeleteQuestion(id)}>
                  delete
                </button>
                <button>Edit</button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Quiz
