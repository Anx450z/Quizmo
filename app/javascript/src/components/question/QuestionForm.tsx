import React from 'react'

const QuestionForm = (props:any) => {
  return (
    <div className='flex-col'> 
      <form id='question' onSubmit={props.onSubmit}>
          {/* <label>Enter your Question : </label> */}
          <br></br>
          <textarea placeholder='Your question goes here' id="question" name="question"></textarea>
          <br></br>
          <button type='submit'>{props.button}</button>
      </form>
    </div>
  )
}

export default QuestionForm
