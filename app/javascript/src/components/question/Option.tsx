import React from 'react'
import optionApi, {OptionType} from '../../apis/option'

const Option = (props:any) => {

  const handleDeleteOption = async(id: string) => {
    await optionApi.deleteOption(id)
    props.onMutate()
  }
  
  return (
   <ul className='grid grid-cols-2 content-center place-items-center '>
    {props.options?.map(({id, option_text, correct} : OptionType, index:number) => (
      <li key={id} className='p-2 '>
        <label className={correct?'correct-option':'option'}>{option_text}</label>
        <button className='x' onClick={() => handleDeleteOption(id)}>x</button>
      </li>
    ))}
   </ul>
  )
}

export default Option
