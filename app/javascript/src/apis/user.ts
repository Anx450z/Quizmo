import axios from 'axios'

type User = {
  user: { username: string; password: string; email: string | undefined }
}
type Login = {
  user:{username: string
  password: string}
}

const signup = (user: User) =>
  axios.post('/user', user, {
    withCredentials: true,
  })

const login = (user: Login) =>
  axios.post('/login', user, {
    withCredentials: true,
  })

const is_logged_in = () => axios.get('/is_logged_in')

const logout = () => axios.delete('/logout')

const userApi = { signup, login, is_logged_in, logout }

export default userApi
