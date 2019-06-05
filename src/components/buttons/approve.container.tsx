import { IState } from "../../reducers";
import { connect } from "react-redux";
import { ApproveButton } from "./approve.component";

const mapStateToProps = (state:IState) => ({
  self: state.self.userId
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveButton)
