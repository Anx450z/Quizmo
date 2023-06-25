import axios from 'axios'

type Token = string

const getQuizId = (token: Token) =>
  axios.get(`/token/${token}`, {
    withCredentials: true,
  })

const tokenApi = { getQuizId }

export default tokenApi
