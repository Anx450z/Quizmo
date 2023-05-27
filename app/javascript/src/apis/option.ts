import axios from 'axios'

export type OptionType = {
    id: string,
    option_text: string,
    correct: boolean,
    selected: number | undefined,
}

type Option = {
  question_id: string,
  option_text: string,
  correct: boolean
}

type SelectedOption = {
  select_option:{
    question_id: string | number,
    quiz_id: string | number,
    marked_option: number | string
  }
}

const createOption = (id: string, option: Option) => axios.post(`/question/${id}/option`, option)
const deleteOption = (option_id: string) => axios.delete(`/option/${option_id}`)
const selectOption = (selectedOption: SelectedOption) => axios.post(`/marked_option`,selectedOption)
const clearOption = (question_id: string) => axios.delete(`/marked_option/delete/${question_id}`)
const optionApi = { createOption, deleteOption, selectOption, clearOption }

export default optionApi
