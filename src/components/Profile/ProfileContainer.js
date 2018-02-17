import {connect} from 'react-redux'
import {loadProfileData} from 'actions/appActions'
import Profile from './Profile'

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

const ProfileContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile)

export default ProfileContainer
