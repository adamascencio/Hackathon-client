import React from 'react';
import dcPlanet from './images/dc-planet.svg';
import rbPlanet from './images/purple-rocket.svg';
import astronaut from './images/astronaut.svg';
import countPlanet1 from './images/count-planet-1.svg';
import countPlanet2 from './images/count-planet-2.svg';
import countPlanet3 from './images/count-planet-3.svg';
import jupiter from './images/add-planet.svg';
import './ProfileComps.css'

const planets = [countPlanet1, countPlanet2, countPlanet3];

export const ProfileDailyChallenge = () => {
  return (
    <>
      <div id='dc' className="flex items-center justify-end w-[22rem] h-[6rem] border-[1px] rounded-3xl shadow-xl opacity-70 relative">
        <div className='font-nunito text-lunarWhite absolute z-10 top-4 left-10'>
          <h1 className='text-lg font-bold'>Daily Challenge</h1>
          <h2 className='text-md font-thin'>Solve 5 problems in a row!</h2>
        </div>
        <img src={dcPlanet} alt='planet' className='mr-8' />
      </div>
    </>
  )
}

export const ProfileFeaturedGames = () => {
    return (
      <div className='flex flex-col font-nunito'>
        <h1 className='text-lg pt-1 font-bold'>Featured Games</h1>
        <div className='flex justify-start gap-[5vw] text-lunarWhite font-bold'>
          <div className='relative'>
            <img src={rbPlanet} alt='rocket ship' className='absolute top-[10%] left-2 z-30'></img>
            <div id='rb' className="flex items-end justify-center w-[10rem] h-[15rem] border-[1px] rounded-tl-none rounded-2xl shadow-xl opacity-70 relative">
              <h1 className='absolute z-20 bottom-3 text-lg'>Rocket Builder</h1>
              <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
            </div>
          </div>
          <div className='relative'>
            <img src={astronaut} alt='astronaut' className='absolute z-30 top-[10%]'/>
            <div id='an' className="flex items-end justify-center w-[10rem] h-[15rem] border-[1px] rounded-tl-none rounded-2xl shadow-xl opacity-70 relative">
              <h1 className='absolute z-20 bottom-3 text-lg'>Astronaughty</h1>
              <div className='w-[100%] h-[3rem] bg-white opacity-10 overflow-hidden rounded-t-none rounded-2xl'></div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  export const ProfileMathByTopic = () => {
    return (
      <>
    <div className='flex flex-col font-nunito text-lg font-bold'>
        <h1 className='text-lg pt-1 font-bold font-nunito'>Math by topic</h1>
        <div className='flex justify-start gap-[5vw] text-lunarWhite'>
          <div className='relative'>
            <div className='absolute flex left-2 top-[20%]'>
              {planets.map((planet, index) => {
                return (
                  <img src={planet} alt='planet' className='z-30' key={index}/>
                )
              })}
            </div>
            <div className="flex items-end justify-center w-[10rem] h-[10rem] border-[1px] bg-lime-300 rounded-tl-none rounded-2xl shadow-xl relative">
              <h1 className='absolute z-20 bottom-3'>Counting</h1>
              <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
            </div>
          </div>
          <div className='relative'>
            <img src={jupiter} alt='planet' className='absolute z-30 left-9 top-[20%]' />
            <div className="flex items-end justify-center w-[10rem] h-[10rem] border-[1px] bg-yellow-400 rounded-2xl shadow-xl relative">
              <h1 className='absolute z-20 bottom-3'>Addition</h1>
              <div className='w-[100%] h-[3rem] bg-black opacity-20 overflow-hidden rounded-t-none rounded-2xl'></div>
            </div>
          </div>
        </div>
    </div>
      </>
    )
  }


