import React, { useState } from 'react'
import optionApi from '../../apis/option'
import ReactQuill from 'react-quill'

const OptionControl = (props: any) => {
  const [correct, setCorrect] = useState(false)
  const [value, setValue] = useState<string>()

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [{ script: 'sub' }, { script: 'super' }],
      ['blockquote', 'code-block'],
    ],
  }

  const handleOnSubmit = async () => {
    const option = {
      option_text: value!,
      correct: correct,
      question_id: props.id as string,
    }
    await optionApi.createOption(props.question_id, option)
    props.onMutate()
  }

  return (
    <div className="flex items-center align-middle justify-between px-2">
      <div className='border rounded-xl min-w-[300px] max-w-3xl'>        
        <ReactQuill
        placeholder='Option goes here...'
          value={value}
          onChange={setValue}
          theme="bubble"
          modules={modules}
        />
      </div>
      <div className="pill flex items-center bg-blue-100 align-middle">
        <input
          type="checkbox"
          className="accent-blue-500"
          onChange={() => setCorrect(!correct)}></input>
        <label className=" font-semibold text-blue-500">mark correct </label>
      </div>
      <button onClick={handleOnSubmit}>Add</button>
    </div>
  )
}

export default OptionControl
