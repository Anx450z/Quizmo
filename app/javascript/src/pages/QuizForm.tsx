import React, { useEffect } from 'react'

const QuizForm = (props: any) => {
  useEffect(() => {
    ;(document.getElementById('title') as HTMLInputElement).placeholder =
      props.data?.quiz.title || ''
    ;(document.getElementById('description') as HTMLInputElement).placeholder =
      props.data?.quiz.description || ''
  }, [])
  return (
    <div className="flex-col border rounded m-1 p-1">
      <form onSubmit={props.handleSubmit}>
        {/* <label>Title : </label> */}
        <input required placeholder="Title" id="title" name="title"></input>
        <br></br>
        {/* <label>description : </label> */}
        <textarea placeholder="Description" id="description" name="description"></textarea>
        <br></br>
        <button type="submit" className=''>{props.button}</button>
      </form>
    </div>
  )
}

export default QuizForm
