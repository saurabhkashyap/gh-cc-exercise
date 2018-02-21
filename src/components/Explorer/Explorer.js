import React from 'react'
import PropTypes from 'prop-types'
import {Header, Menu, Tab} from 'semantic-ui-react'
import {PullRequestListContainer} from 'components/PullRequestList'
import {RepositoryListContainer} from 'components/RepositoryList'
import {mapUsernameToGitHubUrls} from 'lib/helpers'

import './explorer.scss'

const getPanes = (username) => {
  const profileUrl = mapUsernameToGitHubUrls(username).profile

  return [
    {
      menuItem: (
        <Menu.Item key='0'>
          Recent Projects
        </Menu.Item>
      ),
      pane: (
        <Tab.Pane key='0' styleName='tabPane'>
          <Header>
            Recent Projects
            <Header.Subheader>
              Recent projects at-a-glance
            </Header.Subheader>
          </Header>
          <p>
            Here's a list of public Repositories
            {' '}<a href={profileUrl} title={`View profile on GitHub`} styleName='profileLink'>{username}</a>{' '}
            owns and has updated recently.
          </p>
          <RepositoryListContainer
            maxRepos={10}
          />
        </Tab.Pane>
      )
    },
    {
      menuItem: (
        <Menu.Item key='1'>
          Recent Contributions
        </Menu.Item>
      ),
      pane: (
        <Tab.Pane key='1' styleName='tabPane'>
          <Header>
            Recent Contributions
            <Header.Subheader>
              Recent contributions at-a-glance
            </Header.Subheader>
          </Header>
          <p>
            Here's a list of Pull Requests submitted by
            {' '}<a href={profileUrl} title={`View profile on GitHub`} styleName='profileLink'>{username}</a>,{' '}
            that have been merged into public Repositories recently.
          </p>
          <PullRequestListContainer
            maxPullRequests={13}
          />
        </Tab.Pane>
      )
    }
  ]
}

const Explorer = (props) => (
  <Tab
    defaultActiveIndex={0}
    menu={{
      attached: false,
      secondary: true,
      pointing: true
    }}
    panes={getPanes(props.username)}
    renderActiveOnly={false}
    styleName='Explorer'
  />
)

Explorer.propTypes = {
  username: PropTypes.string.isRequired
}

export default Explorer
