import React from 'react'
import {Header, Menu, Tab} from 'semantic-ui-react'
import {ActivityLogContainer} from 'components/ActivityLog'
import {MergeListContainer} from 'components/MergeList'
import {RepositoryListContainer} from 'components/RepositoryList'

import './explorer.scss'

const panes = [
  {
    menuItem: (
      <Menu.Item key='0'>
        Activity
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='0' styleName='Pane'>
        <Header>
          Activity
          <Header.Subheader>
            Public Issues and Pull Requests recently authored by this user
          </Header.Subheader>
        </Header>
        <ActivityLogContainer />
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key='1'>
        Pull Requests
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='1' styleName='Pane'>
        <Header>
          Pull Requests
          <Header.Subheader>
            Recently-updated, public, <em>merged</em> Pull Requests authored by this user
          </Header.Subheader>
        </Header>
        <MergeListContainer />
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key='2'>
        Repositories
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='2' styleName='Pane'>
        <Header>
          Repositories
          <Header.Subheader>
            Recently-updated public Repositories owned by this user
          </Header.Subheader>
        </Header>
        <RepositoryListContainer />
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
