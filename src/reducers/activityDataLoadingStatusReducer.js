import {SET_ACTIVITY_DATA_LOADING_STATUS} from 'constants/actionTypes'

const initialActivityDataLoadingStatus = false

const activityDataLoadingStatusReducer = (activityDataLoadingStatus = initialActivityDataLoadingStatus, action) => {
  switch (action.type) {
    case SET_ACTIVITY_DATA_LOADING_STATUS:
      return action.payload.status
    default:
      return activityDataLoadingStatus
  }
}

export default activityDataLoadingStatusReducer
