import React, { useState } from 'react'
import optionApi from '../../apis/option'

const OptionControl = (props: any) => {
  const [correct, setCorrect] = useState(false)

  const handleOnSubmit = async (e: any) => {
    const data = new FormData(e.currentTarget)
    const option = {
      option_text: data.get('option') as string,
      correct: correct,
      question_id: props.id as string,
    }
    await optionApi.createOption(props.question_id, option)
    props.onMutate()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <input placeholder="Add option" name="option"></input>
      <label>correct answer? </label>
      <input type="checkbox" onChange={() => setCorrect(!correct)}></input>
      <button type="submit">Add</button>
    </form>
  )
}

export default OptionControl
