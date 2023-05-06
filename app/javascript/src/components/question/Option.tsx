import React from 'react'
import optionApi, {OptionType} from '../../apis/option'

const Option = (props:any) => {

  const handleDeleteOption = async(id: string) => {
    await optionApi.deleteOption(id)
    props.onMutate()
  }
  
  return (
   <ul className='grid-cols-2 p-1 m-1'>
    {props.options?.map(({id, option_text, correct} : OptionType, index:number) => (
      <li key={id} className='p-2'>
        <label className={correct?'correct-option':'option'}>{option_text}</label>
        <button className='delete' onClick={() => handleDeleteOption(id)}>x</button>
      </li>
    ))}
   </ul>
  )
}

export default Option
