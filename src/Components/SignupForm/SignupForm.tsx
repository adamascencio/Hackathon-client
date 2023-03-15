// npm modules
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

// services
import * as authService from '../../Services/authService'

//images
import rocket from './rocket1.svg'

// types
import { AuthFormProps } from '../../Types/props'
import { SignupFormData, PhotoFormData } from '../../Types/forms'
import { handleErrMsg } from '../../Types/validators'

const SignupForm = (props: AuthFormProps): JSX.Element => {
  const {updateMessage, handleAuthEvt} = props
  const navigate = useNavigate()

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
    passwordConf: '',
  })
  const [photoData, setPhotoData] = useState<PhotoFormData>({
    photo: null
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleChangePhoto = (evt: React.ChangeEvent<HTMLInputElement>) => {
    if (evt.target.files) setPhotoData({ photo: evt.target.files.item(0) })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    if(isSubmitted) return
    try {
      setIsSubmitted(true)
      await authService.signup(formData, photoData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
      setIsSubmitted(false)
    }
  }

  const { name, email, password, passwordConf } = formData

  const isFormInvalid = (): boolean => {
    return !(name && email && password && password === passwordConf)
  }

  return (
    <>
    <div className='w-screen flex flex-col items-center justify-center h-screen'>
      <img src={rocket} className="w-60 rotate-45 z-[-1]" />
    <form  className="border-gray-500 flex flex-col gap-5 border-[1px] shadow-xl rounded-2xl w-[90%] h-[50%] p-5 mb-40" autoComplete="off" onSubmit={handleSubmit}>
   <h1 className='text-xl text-center font-nunito'>Welcome to Mathscots!</h1>
      <div className="flex flex-col h-20">
        <label htmlFor="name" className="font-nunito text-xl">Name</label>
        <input type="text" className="border-gray-400 border-[1px] rounded-lg h-[50%] " value={name} name="name" onChange={handleChange}/>
      </div>

      <div className="flex flex-col h-20">
        <label htmlFor="email" className="font-nunito text-xl" >Email</label>
        <input type="text" className="border-gray-400 border-[1px] rounded-lg h-[50%]" value={email} name="email"onChange={handleChange}/>
      </div>

      <div className="flex flex-col h-20">
        <label htmlFor="password" className="font-nunito text-xl">Password</label>
        <input className="border-gray-400 border-[1px] rounded-lg h-[50%]" type="password" value={password} name="password" onChange={handleChange}/>
      </div>

      <div className="flex flex-col h-20">
        <label htmlFor="confirm" className="font-nunito text-xl">Confirm Password</label>
       <input className="border-gray-400 border-[1px] rounded-lg h-[50%]" type="password" value={passwordConf} name="passwordConf" onChange={handleChange}/>
      </div>      

      <div className='flex'>
        <Link className='mr-auto border-gray-400 shadow-md border-[1px] rounded-xl p-2 font-nunito bg-gray-300 hover:bg-gray-400' to="/"><button>Cancel</button></Link>
        <Link className=' border-gray-400 shadow-md border-[1px] rounded-xl p-2 font-nunito bg-blue-400 hover:bg-blue-500' to="/login"><button>Login</button></Link>
        <button className=' border-gray-400 shadow-md ml-1 cursor-pointer border-[1px] rounded-xl p-2 font-nunito bg-blue-400 hover:bg-blue-500' disabled={isFormInvalid() || isSubmitted}>{!isSubmitted ? "Sign Up" : "🚀 Sending..."}</button>
        
      </div>
</form>
      </div>
      </>
    
  )
}

export default SignupForm