import { IState } from "../../reducers";
import { connect } from "react-redux";
import { ReimbursementEdit } from "./reimbursement.edit.component";
import { cancleEditReimbursement, updateEditReimbursement, sendEditReimbursement } from '../../actions/reimbursement.actions';
import { getUsers } from '../../actions/user.actions';

const mapStateToProps = (state:IState) => ({
  users: state.users.all,
  data: state.reimbursements.single,
  open: state.reimbursements.editOpen,
  self: state.self.userId
})

const mapDispatchToProps = {
  cancleEditReimbursement,
  updateEditReimbursement,
  sendEditReimbursement,
  getUsers
}

export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementEdit)
