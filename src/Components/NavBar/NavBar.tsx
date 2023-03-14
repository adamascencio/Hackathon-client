// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'

//icons
import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillHome } from 'react-icons/ai';
import { TbSwords } from 'react-icons/tb';
import { CgMathDivide } from 'react-icons/cg';


interface NavBarProps {
  user: User | null;
  handleLogout: () => void;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { user, handleLogout } = props
  
  return (
    <div className="flex items-center justify-center">
  <div className='fixed flex bottom-0 gap-16 p-4 text-3xl border-gray-400 bg-gray-300 border-[1px] mb-8 rounded-[100px] shadow-2xl'>
      {user ?
            <>
          <NavLink to="/profiles"><AiFillHome/></NavLink>
          <NavLink to="/profiles"><CgMathDivide/></NavLink>
          <NavLink to="/profiles"><TbSwords/></NavLink>
          <NavLink to="/profiles"><BsFillPersonFill/></NavLink>
          </>
      :
          <>
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          </>
          
      }
      </div>
      </div>
  )
}

export default NavBar