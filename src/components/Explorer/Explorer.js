import React from 'react'
import PropTypes from 'prop-types'
import {Menu, Tab} from 'semantic-ui-react'
import './explorer.scss'

const panes = [
  {
    menuItem: (
      <Menu.Item key='1'>
        Overview
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane>
        <p>Content of the tab pane.</p>
      </Tab.Pane>
    )
  },
  {
    menuItem: (
      <Menu.Item key='2'>
        Recent Activity
      </Menu.Item>
    ),
    pane: (
      <Tab.Pane>
        <p>Content of the tab pane.</p>
      </Tab.Pane>
    )
  }
]

const Explorer = (props) => (
  <Tab
    menu={{
      secondary: true,
      pointing: true
    }}
    panes={panes}
  />
)

export default Explorer
