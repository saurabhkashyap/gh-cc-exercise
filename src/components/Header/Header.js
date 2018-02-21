import React from 'react'
import {Image, Menu} from 'semantic-ui-react'
import logo from './assets/logo.png'
import './header.scss'

const Header = (props) => {
  return (
    <Menu size='massive' widths={1} inverted styleName='Menu'>
      <Menu.Item header>
        <Image src={logo} styleName='menuImage' />
        GH CC Exercise
      </Menu.Item>
    </Menu>
  )
}

export default Header
