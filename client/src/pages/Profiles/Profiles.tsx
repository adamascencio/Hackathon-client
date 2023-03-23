
// npm packages
import { useState, useEffect } from 'react'

// services
import * as profileService from '../../Services/profileService'

// types
import { Profile } from '../../Types/models'

import { ProfileDailyChallenge, ProfileFeaturedGames, ProfileMathByTopic } from './ProfileComps'

const Profiles = (): JSX.Element => {
  const [profiles, setProfiles] = useState<Profile[]>([])
  console.log(profiles)

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
    <div className='bg-orbit px-5'>     
      <div className='flex items-center'>
        <div className='text-[35px] font-nunito'>Welcome back!</div>
        <img src="" alt="" className='rounded-[50%] border-black border-[1px] w-20 h-20 ml-auto m-4'></img>
      </div>

    <div className="flex flex-col gap-4 xs:items-center">
      <ProfileDailyChallenge/>
      <ProfileFeaturedGames/>
      <div className='flex overflow-x-scroll xs:items-center'>
        <ProfileMathByTopic/>
      </div>
    </div>

    </div>
  )
}
 
export default Profiles