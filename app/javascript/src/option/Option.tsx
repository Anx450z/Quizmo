import React from 'react'
import optionApi, {OptionType} from '../apis/option'
import ReactQuill from 'react-quill'

const Option = (props:any) => {

  const handleDeleteOption = async(id: string) => {
    await optionApi.deleteOption(id)
    props.onMutate()
  }
  
  return (
   <ul className='grid grid-cols-2 content-center place-items-center '>
    {props.options?.map(({id, option_text, correct} : OptionType, index:number) => (
      <li key={id} className='p-2 '>
        <div className='grid grid-cols-10'>
          <div className={correct?'correct-option':'option'}>
            <ReactQuill readOnly value={option_text} theme='bubble'/>
          </div>
            <button className='delete' onClick={() => handleDeleteOption(id)}>x</button>
        </div>
      </li>
    ))}
   </ul>
  )
}

export default Option
