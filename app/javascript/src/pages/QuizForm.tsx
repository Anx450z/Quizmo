import React, { useRef } from 'react'

const QuizForm = (props: any) => {
  const quizForm = useRef(null)

  // const handleQuizSubmit = (e:any) => {
  //   e.preventDefault()
  //   const form = quizForm.current
  //   props.setQuiz({
  //     title: (form!['title']as HTMLInputElement).value,
  //     description: (form!['description']as HTMLInputElement).value
  //   })
  // }
  return (
    <form onSubmit={props.handleSubmit} ref={quizForm}>
      <label>Title</label>
      <input required placeholder='Title' id='title' name='title'></input>
      <label>description</label>
      <textarea placeholder='Description' id='description' name='description'></textarea>
      <button type='submit'>{props.button}</button>
    </form>
  )
}

export default QuizForm
