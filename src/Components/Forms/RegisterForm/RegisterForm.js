import React from "react";
import { connect } from "react-redux";

import Logo from "../../../Assets/Images/main-logo.png";
import { register } from "../../../Redux/actions/admin";
import { withRouter } from "react-router-dom";

import "./RegisterForm.css";

class RegisterForm extends React.Component {
  state = {
    username: "",
    fullname: "",
    email: "",
    password: "",
  };

  registerNewAdmin = () => {
    // e.preventDefault();
    const { username, fullname, email, password } = this.state;

    const data = {
      username,
      fullname,
      email,
      password,
    };
    this.props.dispatch(register(data));
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="col-lg-4">
        <div className="col row mt-2">
          <img className="ml-auto" width="52px" alt="Icon Library" src={Logo} />
        </div>
        <div className="container formRegister">
          <div className="formTitle">
            <h1>
              <b>Register</b>
            </h1>
            <p>
              Welcome Back, Please Register
              <br />
              to your account
            </p>
          </div>
          <div className="formBody card p-2 shadow">
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    username: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label>Full Name</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    fullname: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => {
                  this.setState({
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <form class="row ml-1 mt-5">
              <button
                type="submit"
                className="btn btn-dark"
                onClick={this.registerNewAdmin}
              >
                Sign Up
              </button>
            </form>
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

export default withRouter(connect(mapStateToProps)(RegisterForm));
