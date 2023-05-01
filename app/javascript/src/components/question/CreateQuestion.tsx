import React from 'react'
import QuestionForm from './QuestionForm'
import { useParams } from 'react-router-dom'
import questionApi from '../../apis/questions'

const CreateQuestion = (props:any) => {

  const {id} = useParams()

  const handleOnSubmit = async (e:any) => {
    const data = new FormData(e.currentTarget)
    const question = {
      question: data.get('question') as string
    }
    await questionApi.createQuestion(id!, question)
  }
  
  return (
    <div className="flex-col border rounded container">
      <label>Add new question</label>
      <br></br>
      <QuestionForm button="Add" onSubmit={handleOnSubmit}/>
    </div>
  )
}

export default CreateQuestion
