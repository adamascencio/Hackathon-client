
// npm packages
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../Services/profileService'

// types
import { Profile } from '../../types/models'

import { ProfileDailyChallenge, ProfileFeaturedGames, ProfileMathByTopic } from './ProfileComps'

const Profiles = (): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>([])

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfiles()
  }, [])

  return (
    <>     
     <div className="flex">
      <div className='text-[35px] font-bold mt-10 ml-2 font-nunito'>Welcome back!</div>
      <img src="" alt="" className='rounded-[50%] border-black border-[1px] w-20 h-20 ml-auto m-4'></img>
    </div>

    <div className="flex flex-col gap-4">
    <ProfileDailyChallenge/>
    <ProfileFeaturedGames/>
    <div className='w-screen overflow-x-scroll'>
    <ProfileMathByTopic/>
    </div>
    </div>

    </>
  )
}
 
export default Profiles