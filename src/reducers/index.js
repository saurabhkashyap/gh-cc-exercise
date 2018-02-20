import {combineReducers} from 'redux'

import pullRequestDataReducer from './pullRequestDataReducer'
import pullRequestDataLoadingStatusReducer from './pullRequestDataLoadingStatusReducer'
import pullRequestDataLoadingErrorStatusReducer from './pullRequestDataLoadingErrorStatusReducer'

import profileDataReducer from './profileDataReducer'
import profileDataLoadingStatusReducer from './profileDataLoadingStatusReducer'
import profileDataLoadingErrorStatusReducer from './profileDataLoadingErrorStatusReducer'

import repositoryDataReducer from './repositoryDataReducer'
import repositoryDataLoadingStatusReducer from './repositoryDataLoadingStatusReducer'
import repositoryDataLoadingErrorStatusReducer from './repositoryDataLoadingErrorStatusReducer'

import usernameReducer from './usernameReducer'

export default combineReducers({
  pullRequestData: pullRequestDataReducer,
  pullRequestDataLoadingStatus: pullRequestDataLoadingStatusReducer,
  pullRequestDataLoadingErrorStatus: pullRequestDataLoadingErrorStatusReducer,

  profileData: profileDataReducer,
  profileDataLoadingStatus: profileDataLoadingStatusReducer,
  profileDataLoadingErrorStatus: profileDataLoadingErrorStatusReducer,

  repositoryData: repositoryDataReducer,
  repositoryDataLoadingStatus: repositoryDataLoadingStatusReducer,
  repositoryDataLoadingErrorStatus: repositoryDataLoadingErrorStatusReducer,

  username: usernameReducer
})
