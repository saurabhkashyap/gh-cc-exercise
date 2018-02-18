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

export const loadProfileData = (username) => {
  return (dispatch) => {
    dispatch(setProfileDataLoadingStatus(true))
    dispatch(fetchJsonResource(`https://api.github.com/users/${username}`, {
      dataProcessor: storeProfileData,
      loadingStatusController: setProfileDataLoadingStatus,
      errorStatusController: setProfileDataLoadingErrorStatus
    }))
  }
}

export const loadActivityData = (username) => {
  return (dispatch) => {
    dispatch(setActivityDataLoadingStatus(true))
    dispatch(fetchJsonResource(`https://api.github.com/users/${username}/events/public`, {
      dataProcessor: storeActivityData,
      loadingStatusController: setActivityDataLoadingStatus,
      errorStatusController: setActivityDataLoadingErrorStatus
    }))
  }
}

const fetchJsonResource = (url, {dataProcessor, loadingStatusController, errorStatusController}) => {
  return (dispatch) => {
    dispatch(errorStatusController(false))
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch resource. HTTP status: [${response.status}] ${response.statusText}`)
        }
        return response.json()
      })
      .then((data) => {
        dispatch(dataProcessor(data))
        dispatch(loadingStatusController(false))
      })
      .catch((err) => {
        console.log('Failed to either fetch or parse resource. Error:', err.message)
        dispatch(errorStatusController(true))
        dispatch(loadingStatusController(false))
      })
  }
}
