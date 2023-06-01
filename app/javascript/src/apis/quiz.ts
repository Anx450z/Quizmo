import axios from 'axios'

export type QuizType = {
  title: string
  description: string
}
// quiz apis
const list = () => axios.get('/quiz', {})
const create = (quiz: QuizType) => axios.post('/quiz', quiz)
const destroy = (id: string) => axios.delete(`/quiz/${id}`)
const show = (id: string) => axios.get(`/quiz/${id}`)
const preview = (id: string) => axios.get(`/quiz/${id}/preview`)
const update = (id: string, quiz: QuizType) => axios.patch(`/quiz/${id}`, quiz)
const score = (id: string) => axios.get(`/quiz/${id}/score`)

// Quiz setting apis
const getQuizSettings = (quiz_id: string) => axios.get(`/quiz/${quiz_id}/setting`)
const updateQuizSettings = (quiz_id: string) => axios.put(`/quiz/${quiz_id}/setting`)
// export api
const quizApi = {
  list,
  create,
  destroy,
  update,
  show,
  preview,
  score,
  getQuizSettings,
  updateQuizSettings,
}

export default quizApi
