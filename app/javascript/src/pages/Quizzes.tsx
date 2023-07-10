import React from 'react'
import quizApi from '../apis/quiz'
import useSwr from 'swr'
import { useNavigate } from 'react-router-dom'
import Quill from '../components/common/Quill'

const Quizzes = () => {
  type Quiz = {
    id: string
    title: string
    description: string
    questions_count: number | string
    attempts: number
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
          <div className="absolute bottom-0 w-full bg-blue-500">In progress</div>
          <div className="grid place-items-center bg-slate-50">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {quizList?.map(({ id, title, description, questions_count, attempts }: Quiz) => (
                <li key={id} id={id.toString()} className="quiz-card">
                  <div className="item-start flex justify-between font-semibold">
                    <div>
                      <Quill value={title} />
                      {questions_count! ? (
                        <div className='flex items-start justify-between'>
                          <label className="pill bg-green-100 text-green-700">
                            {questions_count} questions
                          </label>
                          <label className="pill bg-blue-100 text-blue-700">
                            {attempts} attempts
                          </label>
                        </div>
                      ) : (
                        <>
                          <label className="pill bg-red-100 text-red-700">No questions</label>
                        </>
                      )}
                    </div>
                    <div>
                      <button className="delete" onClick={() => deleteQuiz(id)}>
                        Delete
                      </button>
                      <button onClick={() => navigate(`/show_quiz/${id}`)}>edit</button>
                      {(questions_count as number) > 0 ? (
                        <button onClick={() => navigate(`/preview_quiz/${id}`)}>Preview</button>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <Quill value={description} />
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
