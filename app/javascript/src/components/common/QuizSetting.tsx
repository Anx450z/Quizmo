import React from 'react'
import quizApi from '../../apis/quiz'
import useSwr from 'swr'

const QuizSetting = (props:any) => {

  const getQuizSetting = async() => {
    const response = await quizApi.getQuizSettings(props.quizId)
    console.log(response.data)
    return response.data
  }
  
  const {data: quiz_setting} = useSwr(`/quiz/${props.quizId}/setting`, getQuizSetting)
  return (
    <div>QuizSetting</div>
  )
}

export default QuizSetting
