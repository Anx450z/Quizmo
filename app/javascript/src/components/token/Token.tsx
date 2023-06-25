import React, { useState } from 'react'
import tokenApi from '../../apis/token'
import { useNavigate } from 'react-router-dom'

const Token = () => {

  const [token, setToken] = useState<string>('')
  const navigate = useNavigate()

  const handleSubmitToken = async (e:any) => {
    console.log(token)
    const response = await tokenApi.getQuizId(token)
    response.data.quiz_id! ? navigate(`/preview_quiz/${response.data.quiz_id}`) : null
}

  return (
    <>
      <input placeholder='Enter Token here' onChange={(e) => setToken(e.target.value)} value={token}></input>
      <button onClick={handleSubmitToken}>submit</button>
    </>
  )
}

export default Token
