import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import {useParams } from 'react-router-dom'
import questionApi from '../../apis/questions'

const QuestionForm = (props: any) => {
  const [value, setValue] = useState('')
  const modules = {
    toolbar: [
      [{ font: [] }],
      ['bold', 'italic', 'underline'],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
      [{ list: 'ordered' }, { list: 'bullet' }],
    ],
  }
  const { id } = useParams()
  
  const handleOnSubmit = async () => {
    if (!value){
      return
    }
    const question = {
      question: value
    }
    await questionApi.createQuestion(id!, question)
    props.onMutate()
    window.scrollTo(0, 0)
  }
  return (
    <div className="z-20">
      <div id="question">
        <div className="w-full rounded-2xl py-2 px-2 bg-white shadow-xl">
          <ReactQuill
            placeholder="Add new question here..."
            modules={modules}
            value={value}
            onChange={setValue}
            theme="snow"
          />
          <button onClick={()=> setValue('')}>clear</button>
          <button onClick={handleOnSubmit}>{props.button}</button>
        </div>
      </div>
    </div>
  )
}

export default QuestionForm
