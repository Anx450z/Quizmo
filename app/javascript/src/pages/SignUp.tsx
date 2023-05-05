import React from 'react'
import userApi from '../apis/user'

const SignUp = () => {
  const handleSignUp = async (e: any) => {
    const data = new FormData(e.currentTarget)
    const user = {
      user: {
        username: data.get('username') as string,
        email: data.get('email') as string,
        password: data.get('password') as string,
        password_confirmation: data.get('password-confirmation') as string,
      },
    }

    await userApi.signup(user)
  }

  return (
    <form className="flex-col border" onSubmit={handleSignUp}>
      <label>username</label>
      <input placeholder="username" name="username"></input>
      <label>email</label>
      <input placeholder="email" type="email" name="email"></input>
      <label>password</label>
      <input type="password" placeholder="*********" name="password"></input>
      <label>password confirmation</label>
      <input type="password" placeholder="*********" name="password-confirmation"></input>
      <button type="submit">Create new account</button>
    </form>
  )
}

export default SignUp
