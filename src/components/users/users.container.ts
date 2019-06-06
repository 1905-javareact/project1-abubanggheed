import { connect } from 'react-redux';
import { UsersPage } from './users.component';
import { IState } from '../../reducers';
import { getUsers } from '../../actions/user.actions'

const mapStateToProps = (state:IState) => ({
  users: state.users.all,
  selfRole: state.self.role
})

const mapDispatchToProps = {
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersPage)
