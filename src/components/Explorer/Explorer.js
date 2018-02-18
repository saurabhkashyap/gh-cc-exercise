import React from 'react'
import {Header, Menu, Tab} from 'semantic-ui-react'
import {ActivityLogContainer} from 'components/ActivityLog'
import {RepositoryListContainer} from 'components/RepositoryList'

import './explorer.scss'

const panes = [
  {
    menuItem: (
      <Menu.Item key='0'>
        Repositories
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='0' styleName='Pane'>
        <Header>
          Repositories
          <Header.Subheader>Recently updated public repositories owned by this user</Header.Subheader>
        </Header>
        <RepositoryListContainer />
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key='1'>
        Activity
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='1' styleName='Pane'>
        <Header>
          Activity
          <Header.Subheader>Public issues and pull requests recently opened by this user</Header.Subheader>
        </Header>
        <ActivityLogContainer />
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
