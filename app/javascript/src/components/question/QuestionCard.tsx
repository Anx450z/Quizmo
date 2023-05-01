import React from 'react'
import OptionControl from './OptionControl'
import Option from './Option'

const QuestionCard = (props: any) => {
  return (
    <li key={props.id} id={props.id} className="my-1 rounded-lg border p-1">
      <div className="flex items-start justify-between ">
        <div>
          <label className="number">
            {props.index + 1}
          </label>
          <label>{props.question}</label>
        </div>
        <div>
          <button
            className="delete text-red-500"
            onClick={() => props.handleDeleteQuestion(props.id)}>
            Delete
          </button>
          <button>Edit</button>
        </div>
      </div>
      <OptionControl question_id={props.id}/>
      <Option options={props.options}/>
    </li>
  )
}

export default QuestionCard
