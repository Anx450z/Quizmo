import axios from 'axios'

export type OptionType = {
    id: string,
    option_text: string,
    correct: boolean
}

type Option = {
  question_id: string,
  option_text: string,
  correct: boolean
}

const createOption = (id: string, option: Option) => axios.post(`/question/${id}/option`, option)
const deleteOption = (option_id: string) => axios.delete(`/option/${option_id}`)

const optionApi = { createOption, deleteOption }

export default optionApi
