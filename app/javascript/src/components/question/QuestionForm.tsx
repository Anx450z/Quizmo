import React from 'react'

const QuestionForm = (props:any) => {
  return (
    <> 
      <form id='question' onSubmit={props.onSubmit}>
          <label>Enter your Question : </label>
          <textarea placeholder='Your question goes here' id="question" name="question"></textarea>
          <button type='submit'>{props.button}</button>
      </form>
    </>
  )
}

export default QuestionForm
