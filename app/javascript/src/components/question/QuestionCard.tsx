import React from 'react'
import OptionControl from './OptionControl'
import Option from './Option'

const QuestionCard = (props: any) => {
  const invalidQuestion = props.notEnoughOption || !props.containsCorrectOption
  return (
    <li
      key={props.id}
      id={props.id}
      className={invalidQuestion ? 'invalid-question' : 'valid-question'}>
      <div className="flex items-start justify-between ">
        <div>
          <label className={invalidQuestion?'pill bg-red-200 text-red-500':'pill bg-slate-200 text-slate-500'}>{props.index + 1}</label>
          <label>{props.question}</label>
        </div>
        <div>
          {props.notEnoughOption ? (
            <>
              <label className="pill bg-orange-200 text-orange-500">Not enough options</label>
            </>
          ) : null}
          {!props.containsCorrectOption ? (
            <>
              <label className="pill bg-indigo-200 text-indigo-500">No correct options</label>
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
      <OptionControl question_id={props.id} onMutate={props.onMutate} />
      <Option options={props.options} onMutate={props.onMutate} />
    </li>
  )
}

export default QuestionCard
