import axios from 'axios'

export type OptionType = {
    id: string,
    option_text: string,
    correct: boolean
}

type Option = {
  option_text: string,
  correct: boolean
}

const createOption = (id: string, option: Option) => axios.post(`/question/${id}/option`, option)
const deleteOption = (question_id:string, option_id: string) => axios.delete(`/question/${question_id}/option/${option_id}`)

const optionApi = { createOption, deleteOption }

export default optionApi
