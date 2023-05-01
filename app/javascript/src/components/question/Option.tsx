import React from 'react'
import {OptionType} from '../../apis/option'

const Option = (props:any) => {
  console.log(props.options)
  return (
   <ul className='grid-cols-2 p-1 m-1'>
    {props.options?.map(({id, option_text, correct} : OptionType, index:number) => (
      <li key={id} className='p-2'>
        <label className='number'>{index + 1}</label>
        <label className={correct?'correct-option':'option'}>{option_text}</label>
      </li>
    ))}
   </ul>
  )
}

export default Option
