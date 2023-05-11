import React, { useState } from 'react'
import ReactQuill from 'react-quill'

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
  return (
    <div className="flex-col">
      <form id="question" onSubmit={props.onSubmit}>
        {/* <label>Enter your Question : </label> */}
        <br></br>
        <textarea placeholder="Your question goes here" id="question" name="question"></textarea>
        <div className="max-w-2xl rounded-2xl border border-b-4 py-2">
          <ReactQuill
            placeholder="Add new question here..."
            modules={modules}
            value={value}
            onChange={setValue}
            theme="snow"
            className="bg-white text-3xl"
          />
        </div>
        <br></br>
        <button type="submit">{props.button}</button>
      </form>
    </div>
  )
}

export default QuestionForm
