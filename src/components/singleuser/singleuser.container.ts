import { withRouter } from "react-router";
import { SingleUser } from './singleuser.component'
import { IState } from "../../reducers";
import { getUserById } from '../../actions/user.actions'
import { connect } from "react-redux";
import { getUserReimbursements } from '../../actions/reimbursement.actions'

const mapStateToProps = (state:IState) => ({
  user: state.users.single,
  reimbursements: state.reimbursements.user
})

const mapDispatchToProps = {
  getUserById,
  getUserReimbursements
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SingleUser))
