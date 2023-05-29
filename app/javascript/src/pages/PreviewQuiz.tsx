import React, { useEffect, useState } from 'react'
import quizApi from '../apis/quiz'
import { useNavigate, useParams } from 'react-router-dom'
import useSwr from 'swr'
import Quill from '../components/common/Quill'
import TestQuestionCard from '../components/question/TestQuestionCard'

type Option = {
  option: {
    id: string | number
    option_text: string
  }
}

type Question = {
  id: string | number
  question: string
}

type Questions = {
  question: Question
  options: Option
  question_attempted: boolean
}

type Quiz = {
  quiz: {
    id: string | number
    title: string
    description: string
  }
  questions: Questions[]
}

type MarkedQuestions = {
  question_id: string | number
  marked: boolean
}

const PreviewQuiz = () => {
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()
  const { id } = useParams()
  const navigate = useNavigate()
  const [quizIndex, setQuizIndex] = useState<number>(0)
  const [markedQuestions, setMarkedQuestions] = useState<MarkedQuestions[]>()
  const [timer, setTimer] = useState(66)

  const getQuiz = async () => {
    const response = await quizApi.preview(id!)
    setTitle(response.data.quiz.title)
    setDescription(response.data.quiz.description)
    return response.data
  }

  const mutatePreview = () => mutate()

  const {
    data: quiz,
    isLoading,
    mutate,
  } = useSwr<Quiz>([`quiz`, id], getQuiz, {
    revalidateOnFocus: false,
  })

  const countdown = () => {
    setTimer(timer - 1)
    if (timer < 1) {
      navigate(`/quiz/show_score/${id}`)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      countdown()
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [timer])
  return (
    <>
      {isLoading ? (
        <> Loading...</>
      ) : (
        <>
          <div className="sm:grid-rows-10 grid h-screen grid-cols-10">
            <section className="col-span-7 sm:row-span-6 mx-4">
              <div className="grid min-h-screen place-items-center content-center">
                <TestQuestionCard
                  id={quiz!.questions[quizIndex].question.id}
                  index={quizIndex}
                  question={quiz!.questions[quizIndex].question.question}
                  options={quiz!.questions[quizIndex].options}
                  mutate={mutatePreview}
                  quiz_id={id}
                  setQuizIndex={setQuizIndex}
                  quizIndex={quizIndex}
                  totalQuestions={quiz?.questions.length}
                  markedQuestions={markedQuestions}
                  setMarkedQuestions={setMarkedQuestions}
                />
              </div>
            </section>
            <section className="col-span-3 flex-col content-center items-center bg-white sm:row-span-4">
              <div className="grid h-screen grid-rows-3">
                <div>
                  <Quill value={title} />
                  <Quill value={description} />
                  <label className={timer<60?'text-red-600':''}>
                    Time remaining: <b>{Math.floor(timer/60)}:{timer%60}</b>
                  </label>
                </div>
                <ul className="grid grid-cols-4">
                  {quiz?.questions.map(
                    ({ question, question_attempted }: Questions, index: number) =>
                      question_attempted ? (
                        <li
                          className={
                            index === quizIndex
                              ? `question-list border-blue-500 bg-blue-200`
                              : `question-list`
                          }
                          key={question.id}
                          onClick={() => setQuizIndex(index)}>
                          {index + 1}
                        </li>
                      ) : (
                        <li
                          className={
                            index === quizIndex
                              ? `question-list border-blue-500 bg-yellow-200`
                              : `question-list bg-yellow-200`
                          }
                          key={question.id}
                          onClick={() => setQuizIndex(index)}>
                          {index + 1}
                        </li>
                      )
                  )}
                </ul>
                <button onClick={() => navigate(`/quiz/show_score/${id}`)}>submit</button>
                <button>all quizzes</button>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  )
}

export default PreviewQuiz
