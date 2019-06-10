import { IState } from "../../reducers";
import { connect } from "react-redux";
import { Home } from "./home";

const mapStateToProps = (state:IState) => ({
  user: state.self
})

export default connect(mapStateToProps)(Home)
