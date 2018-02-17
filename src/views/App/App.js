import React, { Component } from 'react'
import Header from 'components/Header'
import {ProfileContainer} from 'components/Profile'
import Footer from 'components/Footer'

import 'semantic-ui-css/semantic.min.css'

import appStyles from './app.scss'

class App extends Component {
  render () {
    return (
      <div styleName='appStyles.App'>
        <Header />
        <ProfileContainer />
        <Footer />
      </div>
    )
  }
}

export default App
