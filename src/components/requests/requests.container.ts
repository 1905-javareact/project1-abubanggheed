import { IState } from "../../reducers";
import { connect } from "react-redux";
import { RequestsPage } from "./requests.component";
import { getStatusReimbursements } from '../../actions/reimbursement.actions'

const mapStateToProps = (state:IState) => ({
  reimbursements: state.reimbursements.all,
  self: state.self.userId
})

const mapDispatchToProps = {
  getStatusReimbursements
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsPage)
