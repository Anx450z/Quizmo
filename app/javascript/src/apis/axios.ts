import axios, { AxiosError, AxiosResponse } from 'axios'
import { toast } from 'react-hot-toast'

const DEFAULT_ERROR_NOTIFICATION = "Something went wrong"

export const setAuthHeaders = () => {
  axios.defaults.headers.common = {
    "Content-Type": "application/json",
    "X-CSRF-Token": document.querySelector('meta[name="csrf-token"]')?.getAttribute("content") as string,
  }
}

const handleSuccessResponse = (response: AxiosResponse) => {
  if (response.data.message){
    toast.success(response.data.message, {
      position: 'bottom-center'
    })
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
