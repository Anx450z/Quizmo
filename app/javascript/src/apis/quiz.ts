import axios from 'axios'
import toast from 'react-hot-toast'

export type Quiz = {
  title: string
  description: string
}

const list = () => axios.get('/quiz', {})

const create = (quiz: Quiz) => axios.post('/quiz', quiz)

const quizApi = { list, create }

export default quizApi
