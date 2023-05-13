import React from 'react'
import OptionControl from './OptionControl'
import Option from './Option'
import ReactQuill from 'react-quill'

const QuestionCard = (props: any) => {
  const invalidQuestion = props.notEnoughOption || !props.containsCorrectOption
  return (
    <li
      key={props.id}
      id={props.id}
      className={invalidQuestion ? 'invalid-question' : 'valid-question'}>
      <div className="flex items-center justify-between align-middle">
        <div className="flex items-center justify-center align-middle">
          <div
            className={
              invalidQuestion ? 'pill bg-red-100 text-red-500' : 'pill bg-slate-200 text-slate-500'
            }>
            {props.index + 1}
          </div>
          <label>Question</label>
        </div>
        <div className="flex items-center align-middle">
          {props.notEnoughOption ? (
            <>
              <label className="pill bg-orange-100 text-orange-500">Not enough options</label>
            </>
          ) : null}
          {!props.containsCorrectOption ? (
            <>
              <label className="pill bg-indigo-100 text-indigo-500">No correct options</label>
            </>
          ) : null}
          <button
            className="delete text-red-500"
            onClick={() => props.handleDeleteQuestion(props.id)}>
            Delete
          </button>
          <button>Edit</button>
        </div>
      </div>
      <div className="w-full">
        <ReactQuill readOnly value={props.question} theme="bubble" />
      </div>
      <OptionControl question_id={props.id} onMutate={props.onMutate} />
      <Option options={props.options} onMutate={props.onMutate} />
    </li>
  )
}

export default QuestionCard
