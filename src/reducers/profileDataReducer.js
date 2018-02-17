import {SET_PROFILE_DATA} from 'constants/actionTypes'

const initialProfileData = {}

const profileDataReducer = (profileData = initialProfileData, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {...action.payload.profileData}
    default:
      return profileData
  }
}

export default profileDataReducer
