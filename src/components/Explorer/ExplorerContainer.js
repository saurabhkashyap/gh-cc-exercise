import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Explorer from './Explorer'

class ExplorerContainer extends Component {
  render () {
    return (
      <Explorer />
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = {}

ExplorerContainer.propTypes = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExplorerContainer)
