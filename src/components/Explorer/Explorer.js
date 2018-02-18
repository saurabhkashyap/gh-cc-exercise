import React from 'react'
import {Menu, Tab} from 'semantic-ui-react'
import {ActivityLogContainer} from 'components/ActivityLog'

import './explorer.scss'

const panes = [
  {
    menuItem: (
      <Menu.Item key='0'>
        Overview
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='0' styleName='Pane'>
        <p>Content of the tab pane.</p>
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key='1'>
        Recent Activity
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane key='1' styleName='Pane'>
        <ActivityLogContainer />
      </Tab.Pane>
    )
  }
]

const Explorer = (props) => (
  <Tab
    defaultActiveIndex={1}
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
