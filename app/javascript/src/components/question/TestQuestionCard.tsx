import React from 'react'
import OptionPreview from '../../option/OptionPreview'
import ReactQuill from 'react-quill'

const TestQuestionCard = (props: any) => {
  return (
    <li
      key={props.id}
      id={'question' + props.id}
      className='valid-question'>
      <div className="flex items-center justify-between align-middle">
        <div className="flex items-center justify-center align-middle">
          <div
            className='pill bg-slate-200 text-slate-500'>
            {props.index + 1}
          </div>
          <label>Question</label>
        </div>
      </div>
      <div className="w-full">
        <ReactQuill readOnly value={props.question} theme="bubble" />
      </div>
      <OptionPreview options={props.options} mutate={props.mutate} quiz_id={props.quiz_id} question_id={props.id}/>
    </li>
  )
}

export default TestQuestionCard
