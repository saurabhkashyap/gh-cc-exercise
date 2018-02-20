import {SET_PULL_REQUEST_DATA_LOADING_STATUS} from 'constants/actionTypes'

const initialPullRequestDataLoadingStatus = false

const pullRequestDataLoadingStatusReducer = (pullRequestDataLoadingStatus = initialPullRequestDataLoadingStatus, action) => {
  switch (action.type) {
    case SET_PULL_REQUEST_DATA_LOADING_STATUS:
      return action.payload.status
    default:
      return pullRequestDataLoadingStatus
  }
}

export default pullRequestDataLoadingStatusReducer
