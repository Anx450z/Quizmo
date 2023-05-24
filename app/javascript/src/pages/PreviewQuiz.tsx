import React, { useState } from 'react'
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

const PreviewQuiz = () => {
  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()
  const { id } = useParams()
  const navigate = useNavigate()

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
  return (
    <>
      {isLoading ? (
        <> Loading...</>
      ) : (
        <>
          <div className="grid grid-cols-10">
            <section className="col-span-7">
              <ul>
                {quiz?.questions.map(({ question, options }: Questions, index: number) => (
                  <TestQuestionCard
                    id={question.id}
                    key={question.id}
                    index={index}
                    question={question.question}
                    options={options}
                    mutate={mutatePreview}
                    quiz_id={id}
                  />
                ))}
              </ul>
            </section>
            <section className="col-span-3 bg-white">
              <div className="grid grid-rows-3">
                <div className="row-span-1">
                  <Quill value={title} />
                  <Quill value={description} />
                </div>
                <ul className="row-span-1 grid grid-cols-4">
                  {quiz?.questions.map(
                    ({ question, question_attempted }: Questions, index: number) =>
                      question_attempted ? (
                        <li className="question-list" key={question.id}>
                          {index + 1}
                        </li>
                      ) : (
                        <li className="question-list bg-yellow-200" key={question.id}>
                          {index + 1}
                        </li>
                      )
                  )}
                </ul>
                <button className="row-span-1" onClick={() => navigate(`/quiz/show_score/${id}`)}>
                  show score
                </button>
              </div>
            </section>
          </div>
        </>
      )}
    </>
  )
}

export default PreviewQuiz
