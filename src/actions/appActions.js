import {
  SET_PULL_REQUEST_DATA,
  SET_PULL_REQUEST_DATA_LOADING_STATUS,
  SET_PULL_REQUEST_DATA_LOADING_ERROR_STATUS,

  SET_PROFILE_DATA,
  SET_PROFILE_DATA_LOADING_STATUS,
  SET_PROFILE_DATA_LOADING_ERROR_STATUS,

  SET_REPOSITORY_DATA,
  SET_REPOSITORY_DATA_LOADING_STATUS,
  SET_REPOSITORY_DATA_LOADING_ERROR_STATUS
} from 'constants/actionTypes'

const setProfileData = (profileData) => {
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

const setRepositoryData = (repositoryData) => {
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

const setPullRequestData = (pullRequestData) => {
  return {
    type: SET_PULL_REQUEST_DATA,
    payload: {pullRequestData}
  }
}

const setPullRequestDataLoadingStatus = (status) => {
  return {
    type: SET_PULL_REQUEST_DATA_LOADING_STATUS,
    payload: {status}
  }
}

const setPullRequestDataLoadingErrorStatus = (status) => {
  return {
    type: SET_PULL_REQUEST_DATA_LOADING_ERROR_STATUS,
    payload: {status}
  }
}

export const loadProfileData = () => {
  return (dispatch, getState) => {
    const {username} = getState()
    dispatch(setProfileDataLoadingStatus(true))
    dispatch(fetchJsonResource(`https://api.github.com/users/${username}`, {
      dataProcessor: setProfileData,
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
      dataProcessor: setRepositoryData,
      loadingStatusController: setRepositoryDataLoadingStatus,
      errorStatusController: setRepositoryDataLoadingErrorStatus
    }))
  }
}

export const loadPullRequestData = () => {
  return (dispatch, getState) => {
    const {username} = getState()
    dispatch(setPullRequestDataLoadingStatus(true))
    dispatch(fetchJsonResource(`https://api.github.com/search/issues?q=author:${username}+type:pr+is:merged&sort=updated`, {
      dataProcessor: setPullRequestData,
      loadingStatusController: setPullRequestDataLoadingStatus,
      errorStatusController: setPullRequestDataLoadingErrorStatus
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
