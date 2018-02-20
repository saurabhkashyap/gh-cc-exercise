import _ from 'lodash'
import {SET_PULL_REQUEST_DATA} from 'constants/actionTypes'

const initialPullRequestData = {}

const pullRequestDataReducer = (pullRequestData = initialPullRequestData, action) => {
  switch (action.type) {
    case SET_PULL_REQUEST_DATA:
      return _.cloneDeep(action.payload.pullRequestData)
    default:
      return pullRequestData
  }
}

export default pullRequestDataReducer
