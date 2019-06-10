import React, { PureComponent } from 'react';
import { withRouter } from 'react-router';
import { getSelf } from '../../actions/login.actions'
import { connect } from 'react-redux';

interface InitializerProps {
  match: any
  location: any
  history: any
  getSelf: () => void
}

class Initializer extends PureComponent<InitializerProps> {

  componentDidMount() {
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
