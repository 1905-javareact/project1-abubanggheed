import { IState } from "../../reducers";
import { connect } from "react-redux";
import { DashboardLink } from "./dashboardlink.component";
import { withRouter } from "react-router";

const mapStateToProps = (state:IState) => ({
  self: state.self.userId
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DashboardLink))
