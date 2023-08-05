import React from 'react'
import quizApi from '../apis/quiz'
import useSwr from 'swr'
import { useNavigate } from 'react-router-dom'
import Quill from '../components/common/Quill'
import GlowButton from '../components/button/GlowButton'
import GlowButtonSecondary from '../components/button/GlowButtonSecondary'
import GlowCard from '../components/card/GlowCard'
import CardGrid from '../components/cardGrid/CardGrid'

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
          <div className="grid place-items-center bg-white">
            <CardGrid>
              {quizList?.map(({ id, title, description, questions_count, attempts }: Quiz) => (
                <GlowCard key={id} id={id.toString()} className='h-[150px] w-[450px]'>
                  <div className="item-start flex justify-between font-semibold">
                    <div>
                      <Quill value={title} />
                      {questions_count! ? (
                        <div className="flex items-start justify-between">
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
                </GlowCard>
              ))}
            </CardGrid>
          </div>
          <GlowButtonSecondary
                className="fixed bottom-4 right-4 text-white"
                onClick={() => navigate('/new_quiz')}>
                + New Quiz
              </GlowButtonSecondary>
        </>
      )}
    </>
  )
}

export default Quizzes
