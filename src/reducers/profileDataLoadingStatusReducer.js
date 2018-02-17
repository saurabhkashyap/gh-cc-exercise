import {SET_PROFILE_DATA_LOADING_STATUS} from 'constants/actionTypes'

const initialProfileDataLoadingStatus = false

const profileDataLoadingStatusReducer = (profileDataLoadingStatus = initialProfileDataLoadingStatus, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA_LOADING_STATUS:
      return action.payload.status
    default:
      return profileDataLoadingStatus
  }
}

export default profileDataLoadingStatusReducer
