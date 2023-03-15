// types
import { Progress } from '../types/models'

import * as tokenService from './tokenService'

import {progressFormData} from '../Types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/progress`


async function createProgress(formData: progressFormData): Promise<Progress> {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Progress
  } catch (error) {
    throw error
  }
}
async function updateProgress(formData: progressFormData, progressId: number): Promise<Progress> {
  try {
    const res = await fetch(`${BASE_URL}/${progressId}/update`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: JSON.stringify(formData),
    })
    return await res.json() as Progress
  } catch (error) {
    throw error
  }
}



export { createProgress, updateProgress }