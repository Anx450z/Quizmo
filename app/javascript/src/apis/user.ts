import axios from 'axios'

type User = {
  user:{username: string
  password: string
  email: string | undefined}
}

const signup = (user : User) => axios.post('/user', user , {
  withCredentials: true
})

const login = (user : User) => axios.post('/login', user, {
  withCredentials: true
})

const userApi = { signup, login}

export default userApi
