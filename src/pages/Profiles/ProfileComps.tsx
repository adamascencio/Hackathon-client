import React from 'react'

export const ProfileDailyChallenge = () => {
  return (
    <>
    <div className='flex flex-col items-center'>
        <div className=" w-[22rem] h-[6rem] border-gray-400 border-[1px] rounded-3xl shadow-xl"><h1 className='text-lg pl-4 pt-1 font-nunito font-bold'>Daily Challenge</h1></div>
    </div>
    </>
  )
}

export const ProfileFeaturedGames = () => {
    return (
      <>
    <div className='flex flex-col'>
        <h1 className='text-lg pl-4 pt-1 font-bold font-nunito'>Featured Games</h1>
        <div className='flex justify-evenly'>
        <div className=" w-[10rem] h-[15rem] border-gray-400 border-[1px] rounded-tl-none rounded-2xl shadow-xl"></div>
        <div className=" w-[10rem] h-[15rem] border-gray-400 border-[1px] rounded-2xl shadow-xl"></div>
        </div>
    </div>
      </>
    )
  }

  export const ProfileMathByTopic = () => {
    return (
      <>
    <div className='flex flex-col'>
        <h1 className='text-lg pl-4 pt-1 font-bold font-nunito'>Math by topic</h1>
        <div className='flex justify-evenly'>
        <div className=" w-[10rem] h-[10rem] border-gray-400 border-[1px] rounded-2xl shadow-xl"></div>
        <div className=" w-[10rem] h-[10rem] border-gray-400 border-[1px] rounded-2xl shadow-xl "></div>
        
        </div>
    </div>
      </>
    )
  }


