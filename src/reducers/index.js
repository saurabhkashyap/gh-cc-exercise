import {combineReducers} from 'redux'

import activityDataReducer from './activityDataReducer'
import activityDataLoadingStatusReducer from './activityDataLoadingStatusReducer'
import activityDataLoadingErrorStatusReducer from './activityDataLoadingErrorStatusReducer'

import profileDataReducer from './profileDataReducer'
import profileDataLoadingStatusReducer from './profileDataLoadingStatusReducer'
import profileDataLoadingErrorStatusReducer from './profileDataLoadingErrorStatusReducer'

import usernameReducer from './usernameReducer'

export default combineReducers({
  activityData: activityDataReducer,
  activityDataLoadingStatus: activityDataLoadingStatusReducer,
  activityDataLoadingErrorStatus: activityDataLoadingErrorStatusReducer,

  profileData: profileDataReducer,
  profileDataLoadingStatus: profileDataLoadingStatusReducer,
  profileDataLoadingErrorStatus: profileDataLoadingErrorStatusReducer,

  username: usernameReducer
})
