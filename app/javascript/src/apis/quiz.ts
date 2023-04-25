import axios from 'axios'
import toast from 'react-hot-toast'

const list = () =>
  axios.get('/quiz', {
    timeout: 5000,
  })

const quizApi = { list }

export default quizApi
