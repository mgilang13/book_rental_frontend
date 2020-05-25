import React from "react";
import "./Sidebar.css";
import personLogo from "../../Assets/Images/person.png";
import { Link, withRouter } from "react-router-dom";

class Sidebar extends React.Component {
  state = {
    fullname: ""
  };
  componentDidMount = () => {
    this.setState({
      fullname: localStorage.getItem("fullname")
    });
  };
  logout = () => {
    localStorage.clear("KEY_TOKEN");
    localStorage.clear("fullname");
    localStorage.clear("id");
    this.props.history.push("/");
  };

  render() {
    const { fullname } = this.state;
    return (
      <div className="bg-light border-right" id="sidebar-wrapper">
        <img
          alt="Gambar Admin"
          className="rounded m-5"
          width="100px"
          src={personLogo}
        />
        <h4 className="ml-3">{fullname}</h4>
        <div className="list-group list-group-flush mt-5">
          <a
            href="/#"
            className="list-group-item list-group-item-action bg-light"
          >
            <b>Explore</b>
          </a>
          <Link
            to="/History"
            className="list-group-item list-group-item-action bg-light"
          >
            <b>History</b>
          </Link>
          <a
            href="/#"
            className="list-group-item list-group-item-action bg-light"
            data-toggle="modal"
            data-target="#addBookModal"
          >
            <b>Add Book*</b>
          </a>
          <a
            href="/"
            className="list-group-item list-group-item-action bg-light"
            onClick={this.logout}
          >
            <b>Logout</b>
          </a>
        </div>
      </div>
    );
  }
}
export default withRouter(Sidebar);
