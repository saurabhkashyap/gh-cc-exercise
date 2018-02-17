import {SET_PROFILE_DATA} from 'constants/actionTypes'

const initialProfileData = {
  avatar_url: 'https://via.placeholder.com/290x290?text=+'
}

const profileDataReducer = (profileData = initialProfileData, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA:
      return {...action.payload.profileData}
    default:
      return profileData
  }
}

export default profileDataReducer
