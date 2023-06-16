import React from 'react'
import userApi from '../apis/user'
import { useNavigate } from 'react-router-dom'

const Login = (props:any) => {
  const navigate = useNavigate()
  
  const handleLogin = async() => {
    const user = {
      user:{
        username: (document.getElementById('username') as HTMLInputElement).value as string,
        password: (document.getElementById('password') as HTMLInputElement).value as string
      }
    }

    await userApi.login(user)
    props.mutate()
  
  }
  return (
    <div className='grid min-h-screen place-items-center content-center border'>
      <h1 className='text-center font-extrabold text-6xl py-10 text-indigo-600 drop-shadow-sm shadow-black'>
        Quizmo
      </h1>
      <label>username</label>
      <input placeholder='username' id='username'></input>
      <label>password</label>
      <input type='password' placeholder='*********' id='password'></input>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
