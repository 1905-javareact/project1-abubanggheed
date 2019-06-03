import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { getSelf } from '../../actions/login.actions'
import { connect } from 'react-redux';

interface InitializerProps {
  match: any
  location: any
  history: any
  getSelf: () => void
}

class Initializer extends Component<InitializerProps> {

  componentDidMount() {
    console.log('mounted', this.props)
    this.props.getSelf()
  }

  render() {
    return <></>
  }
}

const mapDispatchToProps = {
  getSelf
}
const mapStateToProps = state => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Initializer))
