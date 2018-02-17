import {SET_PROFILE_DATA_LOADING_ERROR_STATUS} from 'constants/actionTypes'

const initialProfileDataLoadingErrorStatus = false

const profileDataLoadingErrorStatusReducer = (profileDataLoadingErrorStatus = initialProfileDataLoadingErrorStatus, action) => {
  switch (action.type) {
    case SET_PROFILE_DATA_LOADING_ERROR_STATUS:
      return action.payload.status
    default:
      return profileDataLoadingErrorStatus
  }
}

export default profileDataLoadingErrorStatusReducer
