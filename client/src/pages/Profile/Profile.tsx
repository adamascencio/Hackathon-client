// npm modules
import { useEffect, useState } from "react"

//types
import { Profile } from "../../types/models";

// services
import * as profileService from '../../Services/profileService'

// stylesheets
import './Profile.css'

const ProfilePage = (props: any) => {
  const { user, profile } = props


  return (
    <div id="profile-page">
      <div id="username-and-avatar">
        <div id="user-and-level">
          <h2>{profile.name}</h2>
          <h3>Level 2</h3>
        </div>
        <img src={profile.photo} alt="" />
      </div>
      <div id="xp-score">
        <img src="/xp.png" alt="" />
        <img src="/score.png" alt="" />
      </div>
      <div id="streak">
        <img src="/slider-demo.png" alt="" />
      </div>
      <div id="weekly-streak">
        <img src="/week-challenge.png" alt="" />
      </div>
      <div id="achievements">
        <h1>Achievements</h1>
        <img src="/achievements.png" alt="" />
      </div>
    </div>
  );
}

export default ProfilePage;