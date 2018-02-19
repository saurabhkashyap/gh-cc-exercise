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
        Repositories
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='0' styleName='Pane'>
        <Header>
          Repositories
          <Header.Subheader>
            The most recently-updated, public Repositories owned by this user
          </Header.Subheader>
        </Header>
        <RepositoryListContainer
          maxRepos={10}
        />
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
            The most recently-updated, public, <em>merged</em> Pull Requests authored by this user
          </Header.Subheader>
        </Header>
        <MergeListContainer
          maxMerges={13}
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
