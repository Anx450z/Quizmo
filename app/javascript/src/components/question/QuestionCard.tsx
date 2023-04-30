import React from 'react'

const QuestionCard = (props:any) => {
  return (
    <li key={props.id} id={props.id} className='flex items-start justify-between'>
      <div>
        <label className="m-1 rounded-full bg-slate-200 px-2.5 py-1 ">{props.index + 1}</label>
        <label>{props.question}</label>
      </div>
      <div>
        <button className="delete text-red-500" onClick={() => props.handleDeleteQuestion(props.id)}>
          Delete
        </button>
        <button>Edit</button>
      </div>
    </li>
  )
}

export default QuestionCard
