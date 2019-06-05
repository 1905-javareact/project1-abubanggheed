import { IState } from "../../reducers";
import { connect } from "react-redux";
import { DenyButton } from "./deny.component";
import { approveDenyReimbursement } from '../../actions/reimbursement.actions'

const mapStateToProps = (state:IState) => ({
  self: state.self.userId
})

const mapDispatchToProps = {
  approveDenyReimbursement
}

export default connect(mapStateToProps, mapDispatchToProps)(DenyButton)
