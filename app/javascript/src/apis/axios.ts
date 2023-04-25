import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-hot-toast'

const DEFAULT_ERROR_NOTIFICATION = "Something went wrong"

const handleSuccessResponse = (response: AxiosResponse) => {
  if (response.data.message){
    toast.success(response.data.message)
  } else if (response.data.error){
    toast.error(response.data.error)
  }
  return response
}

const handleErrorResponse = (axiosError: any) => {
  toast.error(axiosError.response?.data?.error || DEFAULT_ERROR_NOTIFICATION)

  return Promise.reject(axiosError)
}

export const axiosInterceptor = () => {
  axios.interceptors.response.use(handleSuccessResponse, err => handleErrorResponse(err))
}
