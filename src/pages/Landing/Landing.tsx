import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className='flex place-content-center text-center flex-col h-screen bg-lpBg text-white px-8 gap-8'>
      <h1 className='text-4xl'>Math Masters</h1>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
      <div className='flex justify-center'>
        <div className='grid gap-4 w-5/6 max-w-md'>
          <NavLink to="/login" className='rounded-full bg-gradient-to-r from-loginBtnDark to-loginBtnLight py-2 border-2 border-btnBorder outline outline-btnBorder outline-offset-3 shadow-md'>LOGIN</NavLink>
          <NavLink to="/signup" className='rounded-full bg-transparent py-2 border-2 border-btnBorder'>SIGN UP</NavLink>
        </div>
      </div>
    </main>
  )
}

export default Landing