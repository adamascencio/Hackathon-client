// npm modules
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

//imgs
import rocket from './rocket1.svg'
// stylesheets
import * as authService from '../../Services/authService'

// types
import { AuthFormProps } from '../../Types/props'
import { LoginFormData } from '../../Types/forms'
import { handleErrMsg } from '../../Types/validators'

const LoginForm = (props: AuthFormProps): JSX.Element => {
  const { updateMessage, handleAuthEvt } = props
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      setIsSubmitted(true)
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
      setIsSubmitted(false)
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
      setIsSubmitted(false)
    }
  }

  const { email, password } = formData

  const isFormInvalid = (): boolean => {
    return !(email && password)
  }

  return (
    <>
<div className='w-screen flex flex-col items-center justify-center h-screen'>
<img src={rocket} className="w-60 rotate-45 z-[-1]" />
<form  className="border-gray-500 flex flex-col gap-5 border-[2px] shadow-2xl rounded-2xl w-[90%] h-[50%] p-5 mb-40" autoComplete="off" onSubmit={handleSubmit}>
<h1 className='text-2xl text-center font-nunito font-boldest mb-6'>Welcome to Addventures!</h1>

<div className="flex flex-col h-20">
  <label htmlFor="email" className="font-nunito text-xl font-bolder" >Email</label>
  <input type="text" className="border-gray-400 border-[1px] rounded-lg h-[50%]" value={email} name="email"onChange={handleChange}/>
</div>

<div className="flex flex-col h-20">
  <label htmlFor="password" className="font-nunito text-xl font-bolder">Password</label>
  <input className="border-gray-400 border-[1px] rounded-lg h-[50%]" type="password" value={password} name="password" onChange={handleChange}/>
</div>
     

<div className='flex'>
  <Link className='mr-auto border-gray-400 shadow-md border-[1px] rounded-xl p-2 font-nunito bg-gray-300 font-bold hover:bg-gray-400' to="/"><button>Cancel</button></Link>
  <Link className=' border-gray-400 shadow-md border-[1px] rounded-xl p-2 font-nunito bg-blue-400 hover:bg-blue-500 font-bold'  to="/signup"><button>Signup</button></Link>
  <button className=' border-gray-400 shadow-md ml-1 cursor-pointer border-[1px] rounded-xl p-2 font-nunito font-bold bg-blue-400 hover:bg-blue-500'  disabled={isFormInvalid() || isSubmitted}>{!isSubmitted ? "Login" : "🚀 Sending..."}</button>
  
</div>
</form>
</div>
</>
  )
}

export default LoginForm