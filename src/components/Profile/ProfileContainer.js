import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {loadProfileData} from 'actions/appActions'
import Profile from './Profile'

class ProfileContainer extends Component {
  componentDidMount () {
    this.props.loadProfileData('gitname')
  }

  render () {
    const {profileData, profileDataLoadingStatus, profileDataLoadingErrorStatus} = this.props

    return (
      <Profile
        profileData={profileData}
        profileDataLoadingStatus={profileDataLoadingStatus}
        profileDataLoadingErrorStatus={profileDataLoadingErrorStatus}
      />
    )
  }
}

const mapStateToProps = ({profileData, profileDataLoadingStatus, profileDataLoadingErrorStatus}) => {
  return {
    profileData,
    profileDataLoadingStatus,
    profileDataLoadingErrorStatus
  }
}

const mapDispatchToProps = {
  loadProfileData
}

ProfileContainer.propTypes = {
  loadProfileData: PropTypes.func.isRequired,
  profileData: PropTypes.object.isRequired,
  profileDataLoadingStatus: PropTypes.bool.isRequired,
  profileDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileContainer)
