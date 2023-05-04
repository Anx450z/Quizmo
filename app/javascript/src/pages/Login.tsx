import React from 'react'

const Login = () => {
  const handleLogin = () => {
    console.log('login')
  }
  return (
    <form className='border flex-col' onSubmit={handleLogin}>
      <label>username</label>
      <input placeholder='username'></input>
      <label>email</label>
      <input placeholder='email' type='email'></input>
      <label>password</label>
      <input type='password' placeholder='*********'></input>
      <button type='submit'>Create</button>
    </form>
  )
}

export default Login
