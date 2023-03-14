// npm modules
import { useEffect, useState } from "react"

//types
import { Profile } from "../../types/models";
import { ProfileProps } from "../../types/props";

// services
import * as profileService from '../../Services/profileService'

// stylesheets
import './Profile.css'

const ProfilePage = (props: ProfileProps) => {
  const { user } = props

  const profileId = user!.profile.id

  const [profile, setProfile] = useState<Profile>({
    name: "",
    userName: "",
    photo: "",
    id: 0,
    createdAt: "",
    updatedAt: "",
  })

  useEffect((): void => {
    const fetchProfile = async (): Promise<void> => {
      try {
        console.log("profileId", profileId)
        const profileData: Profile = await profileService.getProfile(profileId)
        console.log("profileData", profileData)
        setProfile(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    fetchProfile()
  }, [user])


  return (
    <div id="profile-page">
      <div id="username-and-avatar">
        <h2>{profile.name}</h2>
        <img src={profile.photo} alt="" />
      </div>
      <div id="streak">
        <img src="/slider-demo.png" alt="" />
      </div>
      <div id="weekly-streak">
        <img src="/week-challenge.png" alt="" />
      </div>
      <div id="achievements">
        <img src="/achievement-badge.png" alt="" />
        <img src="/achievement-badge.png" alt="" />
        <img src="/achievement-badge.png" alt="" />
      </div>
      <div id="challenges">
        <img src="/challenge-demo.png" alt="" />
        <img src="/challenge-demo.png" alt="" />
      </div>
    </div>
  );
}

export default ProfilePage;