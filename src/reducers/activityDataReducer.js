import _ from 'lodash'
import {SET_ACTIVITY_DATA} from 'constants/actionTypes'

const initialActivityData = []

const activityDataReducer = (activityData = initialActivityData, action) => {
  switch (action.type) {
    case SET_ACTIVITY_DATA:
      return _.cloneDeep(action.payload.activityData)
    default:
      return activityData
  }
}

export default activityDataReducer
