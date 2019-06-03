import { IState } from "../../reducers";
import { connect } from "react-redux";
import { NavBar } from "./navbar";

const mapStateToProps = (state:IState) => ({
  role: state.self && state.self.role
})

export default connect(mapStateToProps)(NavBar)
