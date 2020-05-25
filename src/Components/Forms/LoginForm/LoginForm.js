import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import Logo from "../../../Assets/Images/main-logo.png";
import { login } from "../../../Redux/actions/admin";
import "./LoginForm.css";

class LoginForm extends React.Component {
  state = {
    email: "",
    password: "",
    token: "",
    id: "",
  };

  login = () => {
    const { email, password } = this.state;
    const adminData = { email, password };
    this.props.dispatch(login(adminData, this.props.history));
    this.props.history.push("/home");
  };
  render() {
    return (
      <div className="col-lg-4">
        <div className="col row mt-2">
          <img
            className="ml-auto icon-library"
            width="52px"
            alt="Icon Library"
            src={Logo}
          />
        </div>
        <div className="container formLogin">
          <div className="formTitle">
            <h1>
              <b>Login</b>
            </h1>
            <p>
              Welcome Back, Please Login
              <br />
              to your account
            </p>
          </div>
          <div className="formBody card p-2 shadow">
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({ email: e.target.value });
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  this.setState({ password: e.target.value });
                }}
              />
            </div>
            <form>
              <button
                type="submit"
                className="btn btn-dark"
                onClick={this.login}
              >
                Login
              </button>
            </form>
          </div>
          <div className="d-flex mt-4 login-option">
            <div className="mr-2">
              <input type="checkbox" />
            </div>
            <div>
              <p>Remember Me</p>
            </div>
            <div class="ml-auto">
              <a href="/#" className="text-dark ml-auto">
                <b>Forgot Password</b>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (admin) => {
  return {
    admin,
  };
};

export default withRouter(connect(mapStateToProps)(LoginForm));
