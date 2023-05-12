import React, { useState } from 'react'
import ReactQuill from 'react-quill'

const QuizForm = (props: any) => {
  const modules = {
    toolbar: [
      [{ font: [] }],
      ['bold', 'italic', 'underline'],
      [{ script: 'sub' }, { script: 'super' }],
    ],
  }

  return (
    <div className="flex-col border rounded m-1 p-1">
      <div>
        <div className='bg-white rounded-xl border'>
          <ReactQuill value={props.title} onChange={props.setTitle} modules={modules} theme='bubble'/>
        </div>
        <div className='bg-white rounded-xl border'>
          <ReactQuill value={props.description} onChange={props.setDescription} modules={modules} theme='bubble'/>
        </div>
        <button onClick={props.handleSubmit} className=''>{props.button}</button>
      </div>
    </div>
  )
}

export default QuizForm
