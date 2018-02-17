import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './profile.scss'

class Profile extends Component {
  render () {
    const {profileData, profileDataLoadingStatus, profileDataLoadingErrorStatus} = this.props
    return (
      <div styleName='Profile'>
        <h3>Profile</h3>
        {profileDataLoadingStatus ? 'Loading...' : null}
        {profileDataLoadingErrorStatus ? 'Error!' : null}
        {!profileDataLoadingStatus && !profileDataLoadingErrorStatus && profileData.login ? profileData.login : null}
      </div>
    )
  }
}

Profile.propTypes = {
  profileData: PropTypes.object.isRequired,
  profileDataLoadingStatus: PropTypes.bool.isRequired,
  profileDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default Profile
