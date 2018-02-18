import {SET_REPOSITORY_DATA_LOADING_STATUS} from 'constants/actionTypes'

const initialRepositoryDataLoadingStatus = false

const repositoryDataLoadingStatusReducer = (repositoryDataLoadingStatus = initialRepositoryDataLoadingStatus, action) => {
  switch (action.type) {
    case SET_REPOSITORY_DATA_LOADING_STATUS:
      return action.payload.status
    default:
      return repositoryDataLoadingStatus
  }
}

export default repositoryDataLoadingStatusReducer
