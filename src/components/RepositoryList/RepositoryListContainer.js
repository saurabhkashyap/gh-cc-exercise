import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadRepositoryData} from 'actions/appActions'
import RepositoryList from './RepositoryList'

class RepositoryListContainer extends Component {
  componentDidMount () {
    this.props.loadRepositoryData()
  }

  render () {
    const {repositoryData, repositoryDataLoadingStatus, repositoryDataLoadingErrorStatus} = this.props

    return (
      <RepositoryList
        repositoryData={repositoryData}
        repositoryDataLoadingStatus={repositoryDataLoadingStatus}
        repositoryDataLoadingErrorStatus={repositoryDataLoadingErrorStatus}
      />
    )
  }
}

const mapStateToProps = ({repositoryData, repositoryDataLoadingStatus, repositoryDataLoadingErrorStatus}) => {
  return {
    repositoryData,
    repositoryDataLoadingStatus,
    repositoryDataLoadingErrorStatus
  }
}

const mapDispatchToProps = {
  loadRepositoryData
}

RepositoryListContainer.propTypes = {
  loadRepositoryData: PropTypes.func.isRequired,
  repositoryData: PropTypes.array.isRequired,
  repositoryDataLoadingStatus: PropTypes.bool.isRequired,
  repositoryDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RepositoryListContainer)
