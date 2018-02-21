import React from 'react'
import {Icon} from 'semantic-ui-react'
import './footer.scss'

const repoUrl = 'https://github.com/gitname/gh-cc-exercise'

const Footer = (props) => (
  <footer styleName='footer'>
    <p>
      <a href={repoUrl} title='Fork this project on GitHub'>Fork this project on GitHub. <Icon name='github' /></a>
    </p>
  </footer>
)

export default Footer
