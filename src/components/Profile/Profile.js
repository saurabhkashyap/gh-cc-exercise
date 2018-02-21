import React from 'react'
import PropTypes from 'prop-types'
import {Card, Dimmer, Icon, Image, Loader, Message} from 'semantic-ui-react'
import {mapUsernameToGitHubUrls} from 'lib/helpers'

import './profile.scss'

const Profile = (props) => {
  const {
    profileData,
    profileDataLoadingStatus,
    profileDataLoadingErrorStatus
  } = props

  const username = profileData.login

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
              <a href={profileData.html_url} title='View profile on GitHub' styleName='nameLink'>
                {profileData.name}
              </a>
            </Card.Header>
            <Card.Meta>
              {username}
            </Card.Meta>
            <Card.Description>
              {profileData.bio}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Icon name='marker' />
            {profileData.location}
          </Card.Content>
          <Card.Content extra as='a' href={mapUsernameToGitHubUrls(username).followers} title='View followers on GitHub' styleName='extraContentLink'>
            <Icon name='user' />
            {profileData.followers} Followers
          </Card.Content>
          <Card.Content extra as='a' href={mapUsernameToGitHubUrls(username).repositories} title='View public repositories on GitHub' styleName='extraContentLink'>
            <Icon name='fork' />
            {profileData.public_repos} Public Repositories
          </Card.Content>
          <Card.Content extra as='a' href={mapUsernameToGitHubUrls(username).gists} title='View public Gists on GitHub' styleName='extraContentLink'>
            <Icon name='github' />
            {profileData.public_gists} Public Gists
          </Card.Content>
        </Card>
      }

    </Dimmer.Dimmable>
  )
}

Profile.propTypes = {
  profileData: PropTypes.object.isRequired,
  profileDataLoadingStatus: PropTypes.bool.isRequired,
  profileDataLoadingErrorStatus: PropTypes.bool.isRequired
}

export default Profile
