import React from 'react'
import QuestionForm from './QuestionForm'

const CreateQuestion = (props: any) => {
  return (
    <>
      <div className='flex items-center align-middle'>
        <label className="pill bg-red-100 text-red-500">{props.newIndex}</label>
        <label>Add new question</label>
      </div>
        <QuestionForm button="Add" onMutate={props.onMutate}/>
    </>
  )
}

export default CreateQuestion
