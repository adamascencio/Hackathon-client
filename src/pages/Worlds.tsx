import React from 'react'
import solarsystem from './solarsystem.png'
import star from './Star.png'
import moon from './Moon.png'
import './world.css'

import { User } from './../types/models'
interface WorldsProps {
    user: User | null;
  }

const Worlds = (props: WorldsProps): JSX.Element => {
    const {user} = props
  return (
    <>
    <div onClick={(e) =>console.log('hi')} className='bg-transparent w-4 h-4 absolute scale-[7.5] left-[15.49rem] top-[5rem] rounded-xl z-10 cursor-pointer'></div>
    <div onClick={(e) =>console.log('hi')}  className='bg-transparent w-4 h-4 z-10 top-[13rem] scale-[5] left-[10rem] rounded-xl absolute'></div>
    <div onClick={(e) =>console.log('hi')}  className='bg-transparent w-4 h-4 z-10 top-[18rem] scale-[6] left-[21rem] rounded-xl absolute'></div>
    <div onClick={(e) =>console.log('hi')}  className='bg-transparent w-4 h-4 z-10 top-[27rem] scale-[7.2] left-[17.3rem] rounded-xl absolute'></div>
    <div onClick={(e) =>console.log('hi')}  className='bg-transparent w-4 h-4 z-10 top-[33rem] scale-[5] left-[9.3rem] rounded-xl absolute'></div>
    <div onClick={(e) =>console.log('hi')}  className='bg-transparent w-4 h-4 z-10 top-[42rem] left-[4.5rem] scale-[5] rounded-xl absolute'></div>
    <div className='w-screen h-screen flex overflow-clip' id="world">
      <div className='flex fixed w-screen justify-between p-5 top-1'>
      <div className="bg-gray-800 flex gap-1 rounded-xl w-16 p-1">
      <img src={star}  />
      <p className='text-white font-bold font-nunito '>mm</p>
      </div>
      <div className="bg-gray-800 flex gap-1 rounded-xl w-16 p-1">
      <img src={moon}  />
      <p className='text-white font-bold font-nunito'>no</p>
      </div>
      </div>
        <img src={solarsystem} className="scale-[1.5] translate-y-[-50px] my-auto" alt="" />
    </div>
    </>
  )
}

export default Worlds