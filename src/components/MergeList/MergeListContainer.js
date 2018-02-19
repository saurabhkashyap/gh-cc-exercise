import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadMergeData} from 'actions/appActions'
import MergeList from './MergeList'

class MergeListContainer extends Component {
  componentDidMount () {
    this.props.loadMergeData()
  }

  render () {
    const {mergeData, mergeDataLoadingStatus, mergeDataLoadingErrorStatus} = this.props

    return (
      <MergeList
        mergeData={mergeData}
        mergeDataLoadingStatus={mergeDataLoadingStatus}
        mergeDataLoadingErrorStatus={mergeDataLoadingErrorStatus}
      />
    )
  }
}

const mapStateToProps = ({mergeData, mergeDataLoadingStatus, mergeDataLoadingErrorStatus}) => {
  return {
    mergeData,
    mergeDataLoadingStatus,
    mergeDataLoadingErrorStatus
  }
}

const mapDispatchToProps = {
  loadMergeData
}

MergeListContainer.propTypes = {
  loadMergeData: PropTypes.func.isRequired,
  mergeData: PropTypes.object.isRequired,
  mergeDataLoadingStatus: PropTypes.bool.isRequired,
  mergeDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MergeListContainer)
