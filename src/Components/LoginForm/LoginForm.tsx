// npm modules
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsFillPersonFill } from 'react-icons/bs';
import { FaLock } from 'react-icons/fa';

// services
import styles from './LoginForm.module.css'

// stylesheets
import * as authService from '../../Services/authService'

// types
import { AuthFormProps } from '../../Types/props'
import { LoginFormData } from '../../Types/forms'
import { handleErrMsg } from '../../Types/validators'

const LoginForm = (props: AuthFormProps): JSX.Element => {
  const { updateMessage, handleAuthEvt } = props
  const navigate = useNavigate()

  const [formData, setFormData] = useState<LoginFormData>({
    username: '',
    password: '',
  })

  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    updateMessage('')
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = async (evt: React.FormEvent): Promise<void> => {
    evt.preventDefault()
    try {
      await authService.login(formData)
      handleAuthEvt()
      navigate('/')
    } catch (err) {
      console.log(err)
      handleErrMsg(err, updateMessage)
    }
  }

  const { username, password } = formData

  const isFormInvalid = (): boolean => {
    return !(username && password)
  }

  return (
    <form
      autoComplete="off"
      onSubmit={handleSubmit}
      className='flex flex-col items-center gap-10'
    >
      <div className='flex flex-col gap-2'>
        <div className="relative inline-flex items-center">
          <input
            type="text"
            id="username"
            value={formData.username}
            name="username"
            onChange={handleChange}
            className='rounded-lg px-3 py-2 opacity-50 text-black font-bold text-lg'
          />
          {formData.username === '' && 
          <div className="absolute left-7 top-2 text-lpBg font-light flex items-center gap-2">
            <BsFillPersonFill />
            <label htmlFor='username'>Username</label>
          </div>
          }
        </div>
        <div className="relative">
          <input
            type="password"
            id="password"
            value={formData.password}
            name="password"
            onChange={handleChange}
            className='rounded-lg px-3 py-2 opacity-50 text-black font-bold text-lg'
          />
          {formData.password === '' && 
          <div className="absolute left-7 top-2 text-lpBg font-light flex items-center gap-2">
            <FaLock />
            <label htmlFor='password'>Password</label>
          </div>
          }
        </div>
      </div>
      <div className='grid gap-4 w-5/6 max-w-xs'>
        <button disabled={isFormInvalid()} className='rounded-full bg-gradient-to-r from-loginBtnDark to-loginBtnLight py-2 border-2 border-btnBorder outline outline-btnBorder outline-offset-3 shadow-md'>
          LOGIN
        </button>
        <Link to="/">
          <button>Cancel</button>
        </Link>
      </div>
    </form>
  )
}

export default LoginForm