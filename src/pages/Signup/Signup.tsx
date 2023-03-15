// npm packages
import { useState } from 'react'

// components
import SignupForm from '../../Components/SignupForm/SignupForm'

// types
interface SignupProps {
  handleAuthEvt: () => void;
}

const Signup = (props: SignupProps): JSX.Element => {
  const [message, setMessage] = useState('')

  const updateMessage = (msg: string): void => setMessage(msg)

  return (
    <main className='flex items-center justify-center w-screen h-screen'>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup