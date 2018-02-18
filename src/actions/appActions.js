import {
  SET_PROFILE_DATA,
  SET_PROFILE_DATA_LOADING_STATUS,
  SET_PROFILE_DATA_LOADING_ERROR_STATUS,
  SET_ACTIVITY_DATA,
  SET_ACTIVITY_DATA_LOADING_STATUS,
  SET_ACTIVITY_DATA_LOADING_ERROR_STATUS
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

const storeActivityData = (activityData) => {
  return {
    type: SET_ACTIVITY_DATA,
    payload: {activityData}
  }
}

const setActivityDataLoadingStatus = (status) => {
  return {
    type: SET_ACTIVITY_DATA_LOADING_STATUS,
    payload: {status}
  }
}

const setActivityDataLoadingErrorStatus = (status) => {
  return {
    type: SET_ACTIVITY_DATA_LOADING_ERROR_STATUS,
    payload: {status}
  }
}

const fetchActivityData = (username) => {
  return (dispatch) => {
    dispatch(setActivityDataLoadingErrorStatus(false))
    fetch(`https://api.github.com/users/${username}/events/public`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch. HTTP status: [${response.status}] ${response.statusText}`)
        }
        return response.json()
      })
      .then((activityData) => {
        dispatch(storeActivityData(activityData))
        dispatch(setActivityDataLoadingStatus(false))
      })
      .catch((err) => {
        console.log('Failed to either fetch or parse activity data. Error:', err.message)
        dispatch(setActivityDataLoadingErrorStatus(true))
        dispatch(setActivityDataLoadingStatus(false))
      })
  }
}

export const loadActivityData = (username) => {
  return (dispatch) => {
    dispatch(setActivityDataLoadingStatus(true))
    dispatch(fetchActivityData(username))
  }
}
