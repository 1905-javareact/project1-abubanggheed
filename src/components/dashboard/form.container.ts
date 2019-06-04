import { newReimbursement } from "../../actions/reimbursement.actions"
import { connect } from "react-redux";
import { ReimbursementForm } from "./reimbursementform.component";

const mapDispatchToProps = {
  newReimbursement
}

export default connect(null, mapDispatchToProps)(ReimbursementForm)
