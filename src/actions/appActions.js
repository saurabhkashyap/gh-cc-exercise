import {
  SET_PROFILE_DATA,
  SET_PROFILE_DATA_LOADING_STATUS,
  SET_PROFILE_DATA_LOADING_ERROR_STATUS
} from 'constants/actionTypes'

const storeProfileData = (profileData) => {
  return {
    type: SET_PROFILE_DATA,
    payload: {profileData}
  }
}

const setProfileDataLoadingStatus = (status) => {
  return {
    type: SET_PROFILE_DATA_LOADING_STATUS,
    payload: {status}
  }
}

const setProfileDataLoadingErrorStatus = (status) => {
  return {
    type: SET_PROFILE_DATA_LOADING_ERROR_STATUS,
    payload: {status}
  }
}

const fetchProfileData = (username) => {
  return (dispatch) => {
    dispatch(setProfileDataLoadingErrorStatus(false))
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch. HTTP status: [${response.status}] ${response.statusText}`)
        }
        return response.json()
      })
      .then((profileData) => {
        dispatch(storeProfileData(profileData))
        dispatch(setProfileDataLoadingStatus(false))
      })
      .catch((err) => {
        console.log('Failed to either fetch or parse profile data. Error:', err.message)
        dispatch(setProfileDataLoadingErrorStatus(true))
        dispatch(setProfileDataLoadingStatus(false))
      })
  }
}

export const loadProfileData = (username) => {
  return (dispatch) => {
    dispatch(setProfileDataLoadingStatus(true))
    dispatch(fetchProfileData(username))
  }
}
