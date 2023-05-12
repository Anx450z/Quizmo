import React from 'react'

const FilterQuestions = (props:any) => {
  console.log(props.invalidQuestionsCount)
  const validQuestionsCount = props.allQuestionsCount - props.invalidQuestionsCount 
  return (
    <div className="flex items-center align-middle justify-between">
      <label className="m-2 p-2 text-xl font-bold">Questions</label>
      <div className='flex items-center align-middle'>
        <label>Filters</label>
        <label className="pill bg-red-100 text-red-500 cursor-pointer" >invalid question {props.inValidQuestionsCount || 0} </label>
        <label className="pill bg-green-100 text-green-700 cursor-pointer">valid questions {validQuestionsCount} </label>
        <label className="pill bg-blue-100 text-blue-500 cursor-pointer">All questions {props.allQuestionsCount} </label>
      </div>
    </div>
  )
}

export default FilterQuestions
