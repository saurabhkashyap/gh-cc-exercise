import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadPullRequestData} from 'actions/appActions'
import PullRequestList from './PullRequestList'

class PullRequestListContainer extends Component {
  componentDidMount () {
    this.props.loadPullRequestData()
  }

  render () {
    const {
      maxPullRequests,
      pullRequestData,
      pullRequestDataLoadingStatus,
      pullRequestDataLoadingErrorStatus
    } = this.props

    return (
      <PullRequestList
        maxPullRequests={maxPullRequests}
        pullRequestData={pullRequestData}
        pullRequestDataLoadingStatus={pullRequestDataLoadingStatus}
        pullRequestDataLoadingErrorStatus={pullRequestDataLoadingErrorStatus}
      />
    )
  }
}

const mapStateToProps = (state) => {
  const {
    pullRequestData,
    pullRequestDataLoadingStatus,
    pullRequestDataLoadingErrorStatus
  } = state

  return {
    pullRequestData,
    pullRequestDataLoadingStatus,
    pullRequestDataLoadingErrorStatus
  }
}

const mapDispatchToProps = {
  loadPullRequestData
}

PullRequestListContainer.propTypes = {
  loadPullRequestData: PropTypes.func.isRequired,
  maxPullRequests: PropTypes.number.isRequired,
  pullRequestData: PropTypes.object.isRequired,
  pullRequestDataLoadingStatus: PropTypes.bool.isRequired,
  pullRequestDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PullRequestListContainer)
