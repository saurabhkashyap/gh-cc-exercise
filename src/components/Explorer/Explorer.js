import React from 'react'
import PropTypes from 'prop-types'
import {Tab} from 'semantic-ui-react'
import './explorer.scss'

const Explorer = (props) => (
  <Tab menu={{secondary: true, pointing: true}} panes={[
    {menuItem: 'Overview', render: () => <Tab.Pane loading attached={false}>Tab 1 Content</Tab.Pane>},
    {menuItem: 'Repositories', render: () => <Tab.Pane loading attached={false}>Tab 2 Content</Tab.Pane>}
  ]} />
)

export default Explorer
