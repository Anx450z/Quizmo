import React from 'react'
import QuizForm from './QuizForm'
import quizApi, { QuizType } from '../apis/quiz'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'
import questionApi, { QuestionType } from '../apis/questions'
import CreateQuestion from '../components/question/CreateQuestion'
import QuestionCard from '../components/question/QuestionCard'
import { OptionType } from '../apis/option'

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
    <div className="w-screen flex-col" id="quiz-container">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <QuizForm data={quiz} button={'Update'} handleSubmit={handleUpdateQuiz} />
          <button onClick={() => navigate('/')}>All Quizzes</button>
          <CreateQuestion />
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
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Quiz
