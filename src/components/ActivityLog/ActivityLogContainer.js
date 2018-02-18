import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadActivityData} from 'actions/appActions'
import ActivityLog from './ActivityLog'

class ActivityLogContainer extends Component {
  componentDidMount () {
    this.props.loadActivityData(this.props.username)
  }

  render () {
    const {activityData, activityDataLoadingStatus, activityDataLoadingErrorStatus} = this.props

    return (
      <ActivityLog
        activityData={activityData}
        activityDataLoadingStatus={activityDataLoadingStatus}
        activityDataLoadingErrorStatus={activityDataLoadingErrorStatus}
      />
    )
  }
}

const mapStateToProps = ({activityData, activityDataLoadingStatus, activityDataLoadingErrorStatus, username}) => {
  return {
    activityData,
    activityDataLoadingStatus,
    activityDataLoadingErrorStatus,
    username
  }
}

const mapDispatchToProps = {
  loadActivityData
}

ActivityLogContainer.propTypes = {
  loadActivityData: PropTypes.func.isRequired,
  activityData: PropTypes.array.isRequired,
  activityDataLoadingStatus: PropTypes.bool.isRequired,
  activityDataLoadingErrorStatus: PropTypes.bool.isRequired,
  username: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ActivityLogContainer)
