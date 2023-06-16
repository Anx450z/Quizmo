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
          <div className="">
            <h1 className="text-left text-2xl font-extrabold text-indigo-600 shadow-black drop-shadow-sm">
              Quizmo
            </h1>
          </div>
          <div className="absolute bottom-0 w-full bg-blue-500">In progress</div>
          <div className="grid min-h-screen place-items-center content-center bg-slate-50">
            <ul className="grid w-full place-items-center content-center">
              {quizList?.map(({ id, title, description, questions_count }: Quiz) => (
                <li key={id} id={id.toString()} className="quiz-card">
                  <div className="item-start flex justify-between font-semibold">
                    <div>
                      <Quill value={title} />
                      {questions_count! ? (
                        <>
                          <label className="pill bg-green-100 text-green-700">
                            {questions_count} questions
                          </label>
                        </>
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
                      <button onClick={() => navigate(`/show_quiz/${id}`)}>view</button>
                      <button onClick={() => navigate(`/preview_quiz/${id}`)}>Preview</button>
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
