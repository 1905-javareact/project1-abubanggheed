import { IState } from "../../reducers";
import { connect } from "react-redux";
import { NavBar } from "./navbar";
import { logOut } from "../../actions/login.actions"

const mapStateToProps = (state:IState) => ({
  role: state.self && state.self.role
})

const mapDispatchToProps = {
  logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar)
