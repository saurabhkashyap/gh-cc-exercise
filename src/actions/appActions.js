import {
  SET_MERGE_DATA,
  SET_MERGE_DATA_LOADING_STATUS,
  SET_MERGE_DATA_LOADING_ERROR_STATUS,

  SET_PROFILE_DATA,
  SET_PROFILE_DATA_LOADING_STATUS,
  SET_PROFILE_DATA_LOADING_ERROR_STATUS,

  SET_REPOSITORY_DATA,
  SET_REPOSITORY_DATA_LOADING_STATUS,
  SET_REPOSITORY_DATA_LOADING_ERROR_STATUS
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

const storeRepositoryData = (repositoryData) => {
  return {
    type: SET_REPOSITORY_DATA,
    payload: {repositoryData}
  }
}

const setRepositoryDataLoadingStatus = (status) => {
  return {
    type: SET_REPOSITORY_DATA_LOADING_STATUS,
    payload: {status}
  }
}

const setRepositoryDataLoadingErrorStatus = (status) => {
  return {
    type: SET_REPOSITORY_DATA_LOADING_ERROR_STATUS,
    payload: {status}
  }
}

const storeMergeData = (mergeData) => {
  return {
    type: SET_MERGE_DATA,
    payload: {mergeData}
  }
}

const setMergeDataLoadingStatus = (status) => {
  return {
    type: SET_MERGE_DATA_LOADING_STATUS,
    payload: {status}
  }
}

const setMergeDataLoadingErrorStatus = (status) => {
  return {
    type: SET_MERGE_DATA_LOADING_ERROR_STATUS,
    payload: {status}
  }
}

export const loadProfileData = () => {
  return (dispatch, getState) => {
    const {username} = getState()
    dispatch(setProfileDataLoadingStatus(true))
    dispatch(fetchJsonResource(`https://api.github.com/users/${username}`, {
      dataProcessor: storeProfileData,
      loadingStatusController: setProfileDataLoadingStatus,
      errorStatusController: setProfileDataLoadingErrorStatus
    }))
  }
}

export const loadRepositoryData = () => {
  return (dispatch, getState) => {
    const {username} = getState()
    dispatch(setRepositoryDataLoadingStatus(true))
    dispatch(fetchJsonResource(`https://api.github.com/users/${username}/repos?type=owner&sort=updated&direction=desc`, {
      dataProcessor: storeRepositoryData,
      loadingStatusController: setRepositoryDataLoadingStatus,
      errorStatusController: setRepositoryDataLoadingErrorStatus
    }))
  }
}

export const loadMergeData = () => {
  return (dispatch, getState) => {
    const {username} = getState()
    dispatch(setMergeDataLoadingStatus(true))
    dispatch(fetchJsonResource(`https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged&sort=updated`, {
      dataProcessor: storeMergeData,
      loadingStatusController: setMergeDataLoadingStatus,
      errorStatusController: setMergeDataLoadingErrorStatus
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
