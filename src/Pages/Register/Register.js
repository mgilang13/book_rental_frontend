import React, { Component } from "react";
import { Helmet } from "react-helmet";
import Section from "../../Components/Section/Section";
import RegisterForm from "../../Components/Forms/RegisterForm/RegisterForm";
import { withRouter } from "react-router-dom";

class Register extends Component {
  render() {
    const Title = "Register Page";
    return (
      <div>
        <Helmet>
          <title>{Title}</title>
        </Helmet>
        <div className="row">
          <Section />
          <RegisterForm />
        </div>
      </div>
    );
  }
}

export default withRouter(Register);
