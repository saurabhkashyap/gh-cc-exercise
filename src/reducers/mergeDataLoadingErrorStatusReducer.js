import {SET_MERGE_DATA_LOADING_ERROR_STATUS} from 'constants/actionTypes'

const initialMergeDataLoadingErrorStatus = false

const mergeDataLoadingErrorStatusReducer = (mergeDataLoadingErrorStatus = initialMergeDataLoadingErrorStatus, action) => {
  switch (action.type) {
    case SET_MERGE_DATA_LOADING_ERROR_STATUS:
      return action.payload.status
    default:
      return mergeDataLoadingErrorStatus
  }
}

export default mergeDataLoadingErrorStatusReducer
