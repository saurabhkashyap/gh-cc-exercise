import {SET_REPOSITORY_DATA_LOADING_ERROR_STATUS} from 'constants/actionTypes'

const initialRepositoryDataLoadingErrorStatus = false

const repositoryDataLoadingErrorStatusReducer = (repositoryDataLoadingErrorStatus = initialRepositoryDataLoadingErrorStatus, action) => {
  switch (action.type) {
    case SET_REPOSITORY_DATA_LOADING_ERROR_STATUS:
      return action.payload.status
    default:
      return repositoryDataLoadingErrorStatus
  }
}

export default repositoryDataLoadingErrorStatusReducer
