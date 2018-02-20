import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Explorer from './Explorer'

class ExplorerContainer extends Component {
  render () {
    const {username} = this.props

    return (
      <Explorer
        username={username}
      />
    )
  }
}

const mapStateToProps = ({username}) => {
  return {
    username
  }
}

ExplorerContainer.propTypes = {
  username: PropTypes.string.isRequired
}

export default connect(
  mapStateToProps,
  null
)(ExplorerContainer)
