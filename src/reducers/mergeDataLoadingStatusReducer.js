import {SET_MERGE_DATA_LOADING_STATUS} from 'constants/actionTypes'

const initialMergeDataLoadingStatus = false

const mergeDataLoadingStatusReducer = (mergeDataLoadingStatus = initialMergeDataLoadingStatus, action) => {
  switch (action.type) {
    case SET_MERGE_DATA_LOADING_STATUS:
      return action.payload.status
    default:
      return mergeDataLoadingStatus
  }
}

export default mergeDataLoadingStatusReducer
