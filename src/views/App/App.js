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
      <div>
        <Header />
        <Grid stackable container className={styles.Grid}>
          <Grid.Row>
            <Grid.Column width={5}>
              <ProfileContainer />
            </Grid.Column>
            <Grid.Column width={11}>
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
