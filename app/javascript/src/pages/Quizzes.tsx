import React from 'react'
import quizApi from '../apis/quiz'
import useSwr from 'swr'
import { useNavigate } from 'react-router-dom'

const Quizzes = () => {
  type Quiz = {
    id: string
    title: string
    description: string
  }
  const navigate = useNavigate()

  const getQuiz = async () => {
    const response = await quizApi.list()
    return response.data.quizzes
  }

  const deleteQuiz = async (id: string) => {
    await quizApi.destroy(`${id}`)
    mutate()
  }


  // This line of code imports and uses the `useSwr` hook from the `swr` library.
  // It fetches a list of quizzes from the specified endpoint, `/quiz`, with the data being returned as an array of `Quiz` objects.
  // The function getQuiz is called to fetch the data, which is then cached by the hook.
  const { data: quizList, mutate } = useSwr<Quiz[]>('/quiz', getQuiz, {
    revalidateOnFocus: false,
  });
  
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
              <button className='text-red-800 border' onClick={() => deleteQuiz(id)}>delete</button>
              <button className='text-blue-800 border' onClick={() => navigate(`/show_quiz/${id}`)}>view</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default Quizzes
