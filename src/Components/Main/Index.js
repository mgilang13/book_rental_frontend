import React from "react";
import { withRouter } from "react-router-dom";
class Main extends React.Component {
  componentDidMount() {
    const token = localStorage.getItem("KEY_TOKEN");
    if (token) {
      this.props.history.push("/home");
    } else {
      this.props.history.push("/login");
    }
  }

  render() {
    return null;
  }
}

export default withRouter(Main);
