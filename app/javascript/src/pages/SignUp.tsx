import React from 'react'
import userApi from '../apis/user'

const SignUp = () => {
  const handleSignUp = async () => {
    const user = {
      user: {
        username: (document.getElementById('username') as HTMLInputElement).value as string,
        email: (document.getElementById('email') as HTMLInputElement).value as string,
        password: (document.getElementById('password') as HTMLInputElement).value as string,
        password_confirmation: (document.getElementById('password-confirmation') as HTMLInputElement).value as string
      },
    }

    await userApi.signup(user)
  }

  return (
    <form className="flex-col border" onSubmit={handleSignUp}>
      <label>username</label>
      <input placeholder="username" id="username"></input>
      <label>email</label>
      <input placeholder="email" type="email" id="email"></input>
      <label>password</label>
      <input type="password" placeholder="*********" id="password"></input>
      <label>password confirmation</label>
      <input type="password" placeholder="*********" id="password-confirmation"></input>
      <button type="submit">Create new account</button>
    </form>
  )
}

export default SignUp
