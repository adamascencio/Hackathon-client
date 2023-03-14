// npm modules
import { useState } from 'react'

// components
import LoginForm from '../../Components/LoginForm/LoginForm'

// types
interface LoginPageProps {
  handleAuthEvt: () => void;
} 

const LoginPage = (props: LoginPageProps): JSX.Element => {
  const [message, setMessage] = useState('')
  const updateMessage = (msg: string): void => setMessage(msg)

  return (
    <main className='flex place-content-center text-center flex-col h-screen bg-lpBg text-white px-8 gap-8'>
      <h1 className='text-4xl'>Welcome Back</h1>
      <p>{message}</p>
      <LoginForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default LoginPage