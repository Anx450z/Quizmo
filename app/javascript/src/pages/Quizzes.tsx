import React, { useEffect, useState } from 'react'
import quizApi from '../apis/quiz'
import toast from 'react-hot-toast'
import useSwr from 'swr'
import { useNavigate } from 'react-router-dom'

const Quizzes = () => {
  type Quiz = {
    id: number
    title: string
    description: string
  }
  const navigate = useNavigate()

  const getQuiz = async () => {
    const response = await quizApi.list()
    return response.data.quizzes
  }

  const { data: quizList } = useSwr<Quiz[]>('/quiz', getQuiz)
  return (
    <>
      <div className="bg-red-800">Hello</div>

      <div className="absolute bottom-0 w-full bg-red-800">Hello</div>
      <div>
        <ul>
          {quizList?.map(({ id, title, description }: Quiz, index: number) => (
            <li key={id} id={id.toString()}>
              <label className="text-sm text-indigo-700">title</label>
              {title}
              <label className="text-sm text-indigo-700">description</label>
              {description}
              <button onClick={() => navigate('edit/quiz/${id}')}></button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Quizzes
