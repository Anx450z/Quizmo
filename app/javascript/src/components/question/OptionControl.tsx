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
    <form onSubmit={handleOnSubmit} className='flex items-start'>
      <input placeholder="Add option" name="option"></input>
      <div className='pill bg-green-100'>
        <input type="checkbox" onChange={() => setCorrect(!correct)}></input>
        <label className=' text-green-700'>mark correct </label>
      </div>
      <button type="submit">Add</button>
    </form>
  )
}

export default OptionControl
