import React, { useState } from 'react'
import quizApi from '../apis/quiz'
import { useParams } from 'react-router-dom'
import useSwr from 'swr'

type Option = {
  option: {
    id: string | number,
    option_text: string
  }
}

type Question = {
  id: string | number,
  question: string
}

type Quiz = {
  quiz: {
    id: string | number,
    title: string,
    description: string
  }
  questions :{
    question: Question[],
    options: Option[]
  },
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
      {isLoading ? <> Loading...</>:
      <>

      </>}
    </>
  )
}

export default PreviewQuiz
