import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import Header from 'components/Header'
import {ProfileContainer} from 'components/Profile'
import Explorer from 'components/Explorer'
import Footer from 'components/Footer'

import 'semantic-ui-css/semantic.min.css'

import styles from './app.scss'

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Header />
        <Grid stackable container className={styles.Grid}>
          <Grid.Row>
            <Grid.Column width={4}>
              <ProfileContainer />
            </Grid.Column>
            <Grid.Column width={12}>
              <Explorer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App
