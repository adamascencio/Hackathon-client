// npm modules
import { NavLink } from 'react-router-dom'

// types
import { User } from '../../types/models'
import { BsGear } from 'react-icons/bs';

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
  
  return <>
    
    <div className="flex items-center justify-center">
      
  <div className='fixed flex w-[96%] bottom-0 gap-12 justify-center p-4 text-3xl border-gray-400 bg-gray-300 border-[1px] mb-8 rounded-[100px] shadow-2xl'>
    {user?
            <>
          <NavLink to="/"><AiFillHome/></NavLink>
          <NavLink to="/worlds"><CgMathDivide/></NavLink>
          <NavLink to="/profiles"><TbSwords/></NavLink>
          <NavLink to="/profiles" onClick={(e)=> handleLogout()}><BsGear/></NavLink>
          <NavLink to="/profile"><BsFillPersonFill/></NavLink>
          </>
          :
          <> 
          <NavLink to="/login">Log In</NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          </>   
          }
      </div>
     
      </div>
      </>
    
  
}

export default NavBar