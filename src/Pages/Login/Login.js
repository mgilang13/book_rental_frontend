import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section/Section";
import LoginForm from "../../Components/Forms/LoginForm/LoginForm";
import { withRouter } from "react-router-dom";
import "./login.css";

class Login extends Component {
  componentDidMount = () => {
    const token = localStorage.getItem("KEY_TOKEN");
    if (token) {
      this.props.history.push("/home");
    } else {
      this.props.history.push("/login");
    }
  };
  render() {
    const Title = "Login Page";
    return (
      <div className="bodyLogin">
        <Helmet>
          <title>{Title}</title>
        </Helmet>
        <div className="row login-wrapper">
          <Section />
          <LoginForm />
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
