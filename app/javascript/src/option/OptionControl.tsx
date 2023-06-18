import React, { useState } from 'react'
import optionApi from '../apis/option'
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
    if (!value){
      return
    }
    const option = {
      option_text: value!,
      correct: correct,
      question_id: props.id as string,
    }
    await optionApi.createOption(props.question_id, option)
    setValue("")
    props.onMutate()
  }

  return (
    <div className="flex items-center align-middle justify-between px-2">
      <div className=' bg-white/90 rounded-xl min-w-[400px] w-full z-[1]'>        
        <ReactQuill
        placeholder='Add new option here...'
          value={value}
          onChange={setValue}
          theme="bubble"
          modules={modules}
        />
        <button onClick={()=> setValue("")}>clear</button>
        <input
            type="checkbox"
            className="accent-blue-500"
            onChange={() => setCorrect(!correct)}>
        </input>
        <label className='text-xs text-blue-500 text-center'>correct?</label>
        <button onClick={handleOnSubmit}>Add</button>
      </div>
    </div>
  )
}

export default OptionControl
