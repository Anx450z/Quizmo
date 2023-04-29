import React from 'react'
import QuestionForm from './QuestionForm'
import { useParams } from 'react-router-dom'
import questionApi from '../../apis/questions'

const CreateQuestion = () => {

  const {id} = useParams()

  const handleOnSubmit = async (e:any) => {
    const data = new FormData(e.currentTarget)
    const question = {
      question: data.get('question') as string
    }
    await questionApi.createQuestion(id!, question)
  }
  
  return (
    <div className="flex">
      <label>Add new question</label>
      <QuestionForm button="Add" onSubmit={handleOnSubmit}/>
    </div>
  )
}

export default CreateQuestion
