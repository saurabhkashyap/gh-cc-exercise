import {SET_ACTIVITY_DATA_LOADING_ERROR_STATUS} from 'constants/actionTypes'

const initialActivityDataLoadingErrorStatus = false

const activityDataLoadingErrorStatusReducer = (activityDataLoadingErrorStatus = initialActivityDataLoadingErrorStatus, action) => {
  switch (action.type) {
    case SET_ACTIVITY_DATA_LOADING_ERROR_STATUS:
      return action.payload.status
    default:
      return activityDataLoadingErrorStatus
  }
}

export default activityDataLoadingErrorStatusReducer
