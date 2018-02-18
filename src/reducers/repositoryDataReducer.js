import _ from 'lodash'
import {SET_REPOSITORY_DATA} from 'constants/actionTypes'

const initialRepositoryData = []

const repositoryDataReducer = (repositoryData = initialRepositoryData, action) => {
  switch (action.type) {
    case SET_REPOSITORY_DATA:
      return _.cloneDeep(action.payload.repositoryData)
    default:
      return repositoryData
  }
}

export default repositoryDataReducer
