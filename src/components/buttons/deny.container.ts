import { IState } from "../../reducers";
import { connect } from "react-redux";
import { DenyButton } from "./deny.component";

const mapStateToProps = (state:IState) => ({
  self: state.self.userId
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(DenyButton)
