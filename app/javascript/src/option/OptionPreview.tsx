import React from 'react'
import optionApi, {OptionType} from '../apis/option'
import ReactQuill from 'react-quill'

const OptionPreview = (props:any) => {
  const handelSelectOption = async (id:string) => {
    const selectedOption = {
      select_option: {
        question_id: props.question_id as string,
        quiz_id: props.quiz_id as string,
        marked_option: id as string
      }
    }

    await optionApi.selectOption(selectedOption)
    props.mutate()
  }
  
  return (
   <ul className='grid grid-cols-2 content-center place-items-center '>
    {props.options?.map(({id, option_text, selected} : OptionType, index:number) => (
      <li key={id} className='p-2'>
          <div className={selected?'selected-option':'option'} onClick={()=>handelSelectOption(id)}>
            <ReactQuill readOnly value={option_text} theme='bubble'/>
          </div>
      </li>
    ))}
   </ul>
  )
}

export default OptionPreview
