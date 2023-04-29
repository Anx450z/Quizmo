import axios from 'axios'

export type QuestionType = {
  id: string
  question: string
}

type Question = {
  question: string
}

const createQuestion = (id: string, question: Question) => axios.post(`/quiz/${id}/question`, question)
const deleteQuestion = (quiz_id:string, question_id: string) => axios.delete(`/quiz/${quiz_id}/question/${question_id}`)

const questionApi = { createQuestion, deleteQuestion }

export default questionApi
