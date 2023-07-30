import React from 'react'
import userApi from '../apis/user'
import { useNavigate } from 'react-router-dom'
import Token from '../components/token/Token'
import GlowButton from '../components/button/GlowButton'
import GlowButtonSecondary from '../components/button/GlowButtonSecondary'
import GlowCard from '../components/card/GlowCard'
import CardGrid from '../components/cardGrid/CardGrid'

const Login = (props: any) => {
  const navigate = useNavigate()

  const handleLogin = async () => {
    const user = {
      user: {
        username: (document.getElementById('username') as HTMLInputElement).value as string,
        password: (document.getElementById('password') as HTMLInputElement).value as string,
      },
    }

    await userApi.login(user)
    props.mutate()
  }
  return (
    <div className="grid min-h-screen place-items-center content-center">
      <h1 className="py-10 text-center text-6xl font-extrabold text-indigo-600 shadow-black drop-shadow-sm">
        Quizmo
      </h1>
      <CardGrid>
        <GlowCard className="h-[100px] bg-red-300">
          <Token />
        </GlowCard>
        <GlowCard className="bg-green-300">
          <label>Login</label>
          <input placeholder="username" id="username"></input>
          <input type="password" placeholder="*********" id="password"></input>
          <GlowButtonSecondary onClick={handleLogin}>Login</GlowButtonSecondary>
        </GlowCard>
      </CardGrid>
          <GlowButton onClick={() => navigate('signup')}>Sign up</GlowButton>
    </div>
  )
}

export default Login
