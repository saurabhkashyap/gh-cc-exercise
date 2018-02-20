import {SET_PULL_REQUEST_DATA_LOADING_ERROR_STATUS} from 'constants/actionTypes'

const initialPullRequestDataLoadingErrorStatus = false

const pullRequestDataLoadingErrorStatusReducer = (pullRequestDataLoadingErrorStatus = initialPullRequestDataLoadingErrorStatus, action) => {
  switch (action.type) {
    case SET_PULL_REQUEST_DATA_LOADING_ERROR_STATUS:
      return action.payload.status
    default:
      return pullRequestDataLoadingErrorStatus
  }
}

export default pullRequestDataLoadingErrorStatusReducer
