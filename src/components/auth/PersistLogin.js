import {useState, useEffect} from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from './auth'

const PersistLogin = () => {
    const [isLoadin, setIsLoadin] = useState('')
    const auth = useAuth()
    console.log(auth.token);
      const token = auth.token
  return token ? <Outlet /> : <Navigate to='/login' />

}

export default PersistLogin