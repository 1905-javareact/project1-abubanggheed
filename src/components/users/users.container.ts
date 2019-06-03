import { connect } from 'react-redux';
import { UsersPage } from './users.component';
import { IState } from '../../reducers';
import { getUsers } from '../../actions/user.actions'

const mapStateToProps = (state:IState) => ({
  users: state.users.all
})

const mapDispatchToProps = {
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
