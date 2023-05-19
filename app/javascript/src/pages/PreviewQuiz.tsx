import React, { useState } from 'react'
import quizApi from '../apis/quiz'
import { useParams } from 'react-router-dom'
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

  const getQuiz = async () => {
    const response = await quizApi.preview(id!)
    setTitle(response.data.quiz.title)
    setDescription(response.data.quiz.description)
    console.log(response.data)
    return response.data
  }

  const { data: quiz, isLoading, mutate } = useSwr<Quiz>([`quiz`, id], getQuiz)
  return (
    <>
      {isLoading ? (
        <> Loading...</>
      ) : (
        <>
          <Quill value={title} />
          <Quill value={description} />
          <ul>
            {quiz?.questions.map(({ question, options }: Questions, index: number) => (
              <TestQuestionCard
                id={question.id}
                key={question.id}
                index={quiz?.questions.length - index - 1}
                question={question.question}
                options={options}
              />
            ))}
          </ul>
        </>
      )}
    </>
  )
}

export default PreviewQuiz
