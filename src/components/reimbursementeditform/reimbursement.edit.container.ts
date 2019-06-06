import { IState } from "../../reducers";
import { connect } from "react-redux";
import { ReimbursementEdit } from "./reimbursement.edit.component";
import { cancleEditReimbursement } from '../../actions/reimbursement.actions';

const mapStateToProps = (state:IState) => ({
  users: state.users.all,
  data: state.reimbursements.single,
  open: state.reimbursements.editOpen
})

const mapDispatchToProps = {
  cancleEditReimbursement
}

export default connect(mapStateToProps, mapDispatchToProps)(ReimbursementEdit)
