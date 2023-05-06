import React from 'react'
import quizApi from '../apis/quiz'
import useSwr from 'swr'
import { useNavigate } from 'react-router-dom'

const Quizzes = () => {
  type Quiz = {
    id: string
    title: string
    description: string
    questions_count: number | string
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
  const {
    data: quizList,
    mutate,
    isLoading,
  } = useSwr<Quiz[]>('/quiz', getQuiz, {
    revalidateOnFocus: false,
  })

  return (
    <>
      {isLoading ? (
        <h2>Loading your quizzes...</h2>
      ) : (
        <>
          <div className="bg-slate-300">Hello</div>
          <div className="absolute bottom-0 w-full bg-blue-500">In progress</div>
          <div>
            <ul>
              {quizList?.map(({ id, title, description, questions_count }: Quiz) => (
                <li key={id} id={id.toString()} className="valid-quiz">
                  <div className="item-start flex justify-between font-semibold">
                    <div>
                      {title}
                      {questions_count !== 0 ? <>
                      
                      <label className="pill bg-green-100 text-green-700">
                        {questions_count} questions
                      </label>
                      </>:<>
                      <label className='pill bg-red-100 text-red-700'>No question</label>
                      </>}
                    </div>
                    <div>
                      <button className="delete" onClick={() => deleteQuiz(id)}>
                        Delete
                      </button>
                      <button onClick={() => navigate(`/show_quiz/${id}`)}>view</button>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-sm text-slate-600">{description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Quizzes
