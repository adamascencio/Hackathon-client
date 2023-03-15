import React from 'react'
import './ProfileComps.css'

export const ProfileDailyChallenge = () => {
  return (
    <>
    <div className='flex flex-col items-center relative'>
      <div className='font-nunito text-lunarWhite absolute z-10 top-4 left-10'>
        <h1 className='text-lg font-bold'>Daily Challenge</h1>
        <h2 className='text-md font-thin'>Solve 5 problems in a row!</h2>
      </div>
      <div id='dc' className=" w-[22rem] h-[6rem] border-[1px] rounded-3xl shadow-xl opacity-70"></div>
    </div>
    </>
  )
}

export const ProfileFeaturedGames = () => {
    return (
      <>
    <div className='flex flex-col font-nunito'>
      <h1 className='text-lg pl-4 pt-1 font-bold'>Featured Games</h1>
      <div className='flex justify-evenly text-lunarWhite font-bold'>
        <div id='rb' className="flex items-end justify-center w-[10rem] h-[15rem] border-[1px] rounded-tl-none rounded-2xl shadow-xl opacity-70 relative">
          <h1 className='absolute z-20 bottom-3 text-lg'>Rocket Builder</h1>
          <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
        </div>
        <div id='an' className="flex items-end justify-center w-[10rem] h-[15rem] border-[1px] rounded-tl-none rounded-2xl shadow-xl opacity-70 relative">
          <h1 className='absolute z-20 bottom-3 text-lg'>Astronaughty</h1>
          <div className='w-[100%] h-[3rem] bg-white opacity-10 overflow-hidden rounded-t-none rounded-2xl'></div>
        </div>
      </div>
    </div>
      </>
    )
  }

  export const ProfileMathByTopic = () => {
    return (
      <>
    <div className='flex flex-col font-nunito'>
        <h1 className='text-lg pl-4 pt-1 font-bold font-nunito'>Math by topic</h1>
        <div className='flex justify-evenly text-lunarWhite'>

          <div className="flex items-end justify-center w-[10rem] h-[10rem] border-[1px] bg-lime-300 rounded-tl-none rounded-2xl shadow-xl relative">
            <h1 className='absolute z-20 bottom-3 text-lg'>Counting</h1>
            <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
          </div>

          <div className="flex items-end justify-center w-[10rem] h-[10rem] border-[1px] bg-yellow-400 rounded-2xl shadow-xl relative">
            <h1 className='absolute z-20 bottom-3 text-lg'>Addition</h1>
            <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
          </div>
        </div>
    </div>
      </>
    )
  }


