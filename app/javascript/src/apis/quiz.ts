import axios from 'axios'

export type QuizType = {
  title: string
  description: string
}

const list = () => axios.get('/quiz', {})
const create = (quiz: QuizType) => axios.post('/quiz', quiz)
const destroy = (id: string) => axios.delete(`/quiz/${id}`)
const show = (id: string) => axios.get(`/quiz/${id}`)
const update = (id: string, quiz:QuizType) => axios.patch(`/quiz/${id}`, quiz)

const quizApi = { list, create, destroy, update, show }

export default quizApi
