import React, { useEffect } from 'react'

const QuizForm = (props: any) => {
  useEffect(() => {
    ;(document.getElementById('title') as HTMLInputElement).placeholder =
      props.data?.quiz.title || ''
    ;(document.getElementById('description') as HTMLInputElement).placeholder =
      props.data?.quiz.description || ''
  }, [])
  return (
    <form onSubmit={props.handleSubmit} className="flex-col">
      <label>Title : </label>
      <input required placeholder="Title" id="title" name="title"></input>
      <label>description : </label>
      <textarea placeholder="Description" id="description" name="description"></textarea>
      <button type="submit">{props.button}</button>
    </form>
  )
}

export default QuizForm
