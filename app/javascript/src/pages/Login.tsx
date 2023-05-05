import React from 'react'
import userApi from '../apis/user'
import { useNavigate } from 'react-router-dom'

const Login = (props:any) => {
  const navigate = useNavigate()
  
  const handleLogin = async(e:any) => {
    const data = new FormData(e.currentTarget)
    const user = {
      user:{
        username: data.get('username') as string,
        password: data.get('password') as string
      }
    }

    await userApi.login(user)
    props.mutate()
  
  }
  return (
    <form className='border flex-col' onSubmit={handleLogin}>
      <label>username</label>
      <input placeholder='username' name='username'></input>
      <label>password</label>
      <input type='password' placeholder='*********' name='password'></input>
      <button type='submit'>Login</button>
    </form>
  )
}

export default Login
