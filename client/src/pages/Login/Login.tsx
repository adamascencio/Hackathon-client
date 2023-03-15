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
    <main>
      <p>{message}</p>
      <LoginForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default LoginPage