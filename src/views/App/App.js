import React, {Component} from 'react'
import {Grid} from 'semantic-ui-react'
import Header from 'components/Header'
import {ProfileContainer} from 'components/Profile'
import {ExplorerContainer} from 'components/Explorer'
import Footer from 'components/Footer'

import 'semantic-ui-css/semantic.min.css'

import styles from './app.scss'

class App extends Component {
  render () {
    return (
      <div className={styles.App}>
        <Header />
        <Grid stackable container className={styles.appGrid}>
          <Grid.Row centered columns={2}>
            <Grid.Column mobile={16} tablet={6} computer={4} widescreen={4}>
              <ProfileContainer />
            </Grid.Column>
            <Grid.Column mobile={16} tablet={10} computer={10} widescreen={8}>
              <ExplorerContainer />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </div>
    )
  }
}

export default App
