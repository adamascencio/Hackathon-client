// services
import * as tokenService from './tokenService'
import axios from 'axios'

// types
import { Profile } from '../Types/models'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/profiles`


async function getProfile(profileId: number | undefined): Promise<Profile> {
  try {
    const res = await fetch(`${BASE_URL}/${profileId}`, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` }
    })
    return await res.json() as Profile
  } catch (error) {
    throw error
  }
}

async function getAllProfiles(): Promise<Profile[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Profile[]
  } catch (error) {
    throw error
  }
}

async function addPhoto(photoData: any,   profileId: number){
  let photo = {"photo": photoData, "id": profileId}
    axios.put(`${BASE_URL}/${profileId}/add-photo`, photo).then(response=> console.log('res', response)).catch(err => console.log("err", err))
}

export { getAllProfiles, addPhoto, getProfile }