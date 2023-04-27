import axios from 'axios'
import toast from 'react-hot-toast'

export type Quiz = {
  title: string
  description: string
}

const list = () => axios.get('/quiz', {})
const create = (quiz: Quiz) => axios.post('/quiz', quiz)
const destroy = (id: string) => axios.delete(`/quiz/${id}`)
const show = (id: string) => axios.get(`/quiz/${id}`)
const edit = (id: string, quiz:Quiz) => axios.patch(`/quiz/${id}`, quiz)

const quizApi = { list, create, destroy, edit, show }

export default quizApi
