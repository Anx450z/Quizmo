import React, { useState } from 'react'
import userApi from '../apis/user'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
  const navigate = useNavigate()

  const [userName, setUsername] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>('')

  const handleSignUp = async () => {
    const user = {
      user: {
        username: userName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation,
      },
    }
    const response = await userApi.signup(user)
    if (response.statusText == 'OK'){
      navigate('/')
    }
  }

  return (
    <>
      <div 
        className="grid min-h-screen place-items-center content-center border">
        <h1 className="py-10 text-center text-6xl font-extrabold text-indigo-600 shadow-black drop-shadow-sm">
          Quizmo
        </h1>
        <label>username</label>
        <input placeholder="username" id="username" onChange={(e)=>setUsername(e.currentTarget.value)} value={userName}></input>
        <label>email</label>
        <input placeholder="email" type="email" id="email" onChange={(e)=> setEmail(e.currentTarget.value)} value={email}></input>
        <label>password</label>
        <input type="password" placeholder="*********" id="password" onChange={(e)=> setPassword(e.currentTarget.value)} value={password}></input>
        <label>password confirmation</label>
        <input type="password" placeholder="*********" id="password-confirmation" onChange={(e)=> setPasswordConfirmation(e.currentTarget.value)} value={passwordConfirmation}></input>
        <button onClick={handleSignUp}>Create new account</button>
      <button onClick={() => navigate('/')}>Already have account?</button>
      </div>
    </>
  )
}

export default SignUp
