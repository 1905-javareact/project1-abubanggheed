import { IState } from "../../reducers";
import { connect } from "react-redux";
import { Dashboard } from "./dashboard.component";

const mapStateToProps = (state:IState) => ({
  selfId: state.self.userId
})

export default connect(mapStateToProps)(Dashboard)
