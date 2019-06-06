import { connect } from "react-redux";
import { EditButton } from "./edit.component";
import { IState } from "../../reducers";
import { openEditReimbursement } from '../../actions/reimbursement.actions';

const mapStateToProps = (state:IState) => ({
})

const mapDispatchToProps = {
  openEditReimbursement
}

export default connect(mapStateToProps, mapDispatchToProps)(EditButton)
