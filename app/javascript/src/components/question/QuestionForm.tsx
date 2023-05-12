import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import { useParams } from 'react-router-dom'
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
    const question = {
      question: value
    }
    await questionApi.createQuestion(id!, question)
    props.onMutate()
  }
  return (
    <div className="flex-col z-20">
      <div id="question" onSubmit={props.onSubmit}>
        <div className="w-full rounded-2xl border border-b-4 py-2">
          <ReactQuill
            placeholder="Add new question here..."
            modules={modules}
            value={value}
            onChange={setValue}
            theme="snow"
            className="bg-white"
          />
        </div>
        <button onClick={handleOnSubmit}>{props.button}</button>
      </div>
    </div>
  )
}

export default QuestionForm
