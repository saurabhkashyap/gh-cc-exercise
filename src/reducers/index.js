import {combineReducers} from 'redux'
import profileDataReducer from './profileDataReducer'
import profileDataLoadingStatusReducer from './profileDataLoadingStatusReducer'
import profileDataLoadingErrorStatusReducer from './profileDataLoadingErrorStatusReducer'

export default combineReducers({
  profileData: profileDataReducer,
  profileDataLoadingStatus: profileDataLoadingStatusReducer,
  profileDataLoadingErrorStatus: profileDataLoadingErrorStatusReducer
})
