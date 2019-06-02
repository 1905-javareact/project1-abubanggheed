import { IState } from "../../reducers";
import { login, updateField } from '../../actions/login.actions'
import { connect } from "react-redux";
import { LoginForm } from "./form";

const mapStateToProps = (state:IState) => ({
  username: state.loginData.username,
  password: state.loginData.password,
  errorMessage: state.loginData.errorMessage
})

const mapDispatchToProps = {
  login,
  updateField
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
