import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Dimmer, Icon, Image, Loader, Message, Segment} from 'semantic-ui-react'
import './profile.scss'

class Profile extends Component {
  render () {
    const {profileData, profileDataLoadingStatus, profileDataLoadingErrorStatus} = this.props

    return (
      <div styleName='Profile'>

        <Dimmer.Dimmable>
          <Dimmer inverted active={profileDataLoadingStatus || profileDataLoadingErrorStatus}>
            <Segment basic>
              <Message icon error={profileDataLoadingErrorStatus} hidden={!profileDataLoadingErrorStatus}>
                <Message.Content>
                  <Message.Header>
                    Error
                  </Message.Header>
                  <p>
                    We failed to load the profile data from GitHub.
                  </p>
                </Message.Content>
              </Message>
            </Segment>
          </Dimmer>
        </Dimmer.Dimmable>

        {!profileDataLoadingErrorStatus &&
          <Card>
            <Loader indeterminate active={profileDataLoadingStatus}>Loading</Loader>
            <Image src={profileData.avatar_url} />
            <Card.Content>
              <Card.Header>
                {profileData.name}
              </Card.Header>
              <Card.Meta>
                {profileData.login}
              </Card.Meta>
              <Card.Description>
                {profileData.bio}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Icon name='marker' />
              {profileData.location}
            </Card.Content>
            <Card.Content extra>
              <Icon name='user' />
              {profileData.followers} Followers
            </Card.Content>
            <Card.Content extra>
              <Icon name='fork' />
              {profileData.public_repos} Public Repos
            </Card.Content>
            <Card.Content extra>
              <Icon name='github' />
              {profileData.public_gists} Public Gists
            </Card.Content>
          </Card>
        }

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
