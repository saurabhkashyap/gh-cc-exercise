import _ from 'lodash'
import {SET_MERGE_DATA} from 'constants/actionTypes'

const initialMergeData = {}

const mergeDataReducer = (mergeData = initialMergeData, action) => {
  switch (action.type) {
    case SET_MERGE_DATA:
      return _.cloneDeep(action.payload.mergeData)
    default:
      return mergeData
  }
}

export default mergeDataReducer
