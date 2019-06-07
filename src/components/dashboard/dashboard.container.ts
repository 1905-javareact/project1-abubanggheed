import { IState } from "../../reducers";
import { connect } from "react-redux";
import { Dashboard } from "./dashboard.component";
import { getUserReimbursements } from '../../actions/reimbursement.actions'

const mapStateToProps = (state:IState) => ({
  selfId: state.self.userId,
  reimbursements: state.reimbursements.user
})

const mapDispatchToProps = {
  getUserReimbursements
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
