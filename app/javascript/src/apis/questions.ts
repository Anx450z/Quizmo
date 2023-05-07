import axios from 'axios'
import { OptionType } from './option'

export type QuestionType = {
  id: string
  question: {
    correct_options: number,
    id: string|number,
    question: string,
    number_of_options: number
  }
  options: OptionType[],
}

type Question = {
  question: string
}

const createQuestion = (id: string, question: Question) => axios.post(`/quiz/${id}/question`, question)
const deleteQuestion = (quiz_id:string, question_id: string) => axios.delete(`/quiz/${quiz_id}/question/${question_id}`)

const questionApi = { createQuestion, deleteQuestion }

export default questionApi
