import React, { useState } from 'react'

const Token = () => {

  const [token, setToken] = useState<string>('')

  const handleSubmitToken = (e:any) => {
    console.log(token)
  }

  return (
    <>
      <input placeholder='Enter Token here' onChange={(e) => setToken(e.target.value)} value={token}></input>
      <button onClick={handleSubmitToken}>submit</button>
    </>
  )
}

export default Token
