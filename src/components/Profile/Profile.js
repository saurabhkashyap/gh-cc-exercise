import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Card, Dimmer, Icon, Image, Loader, Message} from 'semantic-ui-react'

import './profile.scss'

class Profile extends Component {
  render () {
    const {profileData, profileDataLoadingStatus, profileDataLoadingErrorStatus} = this.props

    return (
      <Dimmer.Dimmable>
        <Dimmer inverted active={profileDataLoadingStatus} />

        <Message icon error={profileDataLoadingErrorStatus} hidden={!profileDataLoadingErrorStatus}>
          <Message.Content>
            <Message.Header>
              Error
            </Message.Header>
            <p>
              We failed to load the Profile data.
            </p>
          </Message.Content>
        </Message>

        {!profileDataLoadingErrorStatus &&
        <Card>
          <Loader indeterminate active={profileDataLoadingStatus}>Loading</Loader>
          <Image src={profileData.avatar_url} />
          <Card.Content>
            <Card.Header>
              <a href={profileData.html_url} title='View profile on GitHub' styleName='Name'>
                {profileData.name}
              </a>
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

      </Dimmer.Dimmable>
    )
  }
}

Profile.propTypes = {
  profileData: PropTypes.object.isRequired,
  profileDataLoadingStatus: PropTypes.bool.isRequired,
  profileDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default Profile
