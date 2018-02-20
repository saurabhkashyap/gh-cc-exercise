import React from 'react'
import {Header, Menu, Tab} from 'semantic-ui-react'
import {PullRequestListContainer} from 'components/PullRequestList'
import {RepositoryListContainer} from 'components/RepositoryList'

import './explorer.scss'

const panes = [
  {
    menuItem: (
      <Menu.Item key='0'>
        Recent Projects
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='0' styleName='Pane'>
        <Header>
          Recent Projects
          <Header.Subheader>
            Recent projects at-a-glance
          </Header.Subheader>
        </Header>
        <p>
          Here's a list of public Repositories this user owns and has updated recently.
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
      <Tab.Pane key='1' styleName='Pane'>
        <Header>
          Recent Contributions
          <Header.Subheader>
            Recent contributions at-a-glance
          </Header.Subheader>
        </Header>
        <p>
          Here's a list of Pull Requests submitted by this user, that have been merged into public Repositories recently.
        </p>
        <PullRequestListContainer
          maxPullRequests={13}
        />
      </Tab.Pane>
    )
  }
]

const Explorer = (props) => (
  <Tab
    defaultActiveIndex={0}
    menu={{
      attached: false,
      secondary: true,
      pointing: true
    }}
    panes={panes}
    renderActiveOnly={false}
    styleName='Explorer'
  />
)

export default Explorer
