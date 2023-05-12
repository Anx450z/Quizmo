import React, { useState } from 'react'
import QuizForm from './QuizForm'
import quizApi, { QuizType } from '../apis/quiz'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'
import questionApi, { QuestionType } from '../apis/questions'
import CreateQuestion from '../components/question/CreateQuestion'
import QuestionCard from '../components/question/QuestionCard'
import FilterQuestions from '../components/question/FilterQuestions'

const Quiz = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [invalidQuestionsCount, setInvalidQuestionsCount] = useState<number>(0)

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

  const handleMutateQuiz = async () => mutate()

  const handleDeleteQuestion = async (question_id: string) => {
    await questionApi.deleteQuestion(id!, question_id!)
    mutate()
  }

  const { data: quiz, isLoading, mutate } = useSwr<Quiz>([`quiz`, id], getQuiz)

  return (
    <div className="w-screen flex-col bg-slate-100" id="quiz-container">
      {isLoading ? (
        <>Loading...</>
      ) : (
        <>
          <QuizForm data={quiz} button={'Update'} handleSubmit={handleUpdateQuiz} />
          <button onClick={() => navigate('/')}>All Quizzes</button>
          <div className="main-question z-[2]">
            <CreateQuestion onMutate={handleMutateQuiz} newIndex={quiz?.questions.length! + 1} />
            <FilterQuestions
              allQuestionsCount={quiz?.questions.length}
              invalidQuestionsCount={invalidQuestionsCount}
            />
          </div>
          <ul className="container">
            {quiz?.questions.map(({ question, options }: QuestionType, index: number) => (
              <QuestionCard
                id={question.id}
                key={question.id}
                index={quiz?.questions.length - index - 1}
                handleDeleteQuestion={handleDeleteQuestion}
                question={question.question}
                options={options}
                onMutate={handleMutateQuiz}
                containsCorrectOption={question.correct_options}
                notEnoughOption={question.number_of_options < 2}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Quiz
