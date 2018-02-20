import {combineReducers} from 'redux'

import mergeDataReducer from './mergeDataReducer'
import mergeDataLoadingStatusReducer from './mergeDataLoadingStatusReducer'
import mergeDataLoadingErrorStatusReducer from './mergeDataLoadingErrorStatusReducer'

import profileDataReducer from './profileDataReducer'
import profileDataLoadingStatusReducer from './profileDataLoadingStatusReducer'
import profileDataLoadingErrorStatusReducer from './profileDataLoadingErrorStatusReducer'

import repositoryDataReducer from './repositoryDataReducer'
import repositoryDataLoadingStatusReducer from './repositoryDataLoadingStatusReducer'
import repositoryDataLoadingErrorStatusReducer from './repositoryDataLoadingErrorStatusReducer'

import usernameReducer from './usernameReducer'

export default combineReducers({
  mergeData: mergeDataReducer,
  mergeDataLoadingStatus: mergeDataLoadingStatusReducer,
  mergeDataLoadingErrorStatus: mergeDataLoadingErrorStatusReducer,

  profileData: profileDataReducer,
  profileDataLoadingStatus: profileDataLoadingStatusReducer,
  profileDataLoadingErrorStatus: profileDataLoadingErrorStatusReducer,

  repositoryData: repositoryDataReducer,
  repositoryDataLoadingStatus: repositoryDataLoadingStatusReducer,
  repositoryDataLoadingErrorStatus: repositoryDataLoadingErrorStatusReducer,

  username: usernameReducer
})
