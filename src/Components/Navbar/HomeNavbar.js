import React from "react";

import { connect } from "react-redux";
import {
  sortBookByTitle,
  sortBookByDate,
  sortBookByGenre,
  sortBookByAvail,
  // getAllBook,
  searchBookTitle,
} from "../../Redux/actions/book";

import { FaBars } from "react-icons/fa";

import "./HomeNavbar.css";

class HomeNavbar extends React.Component {
  state = {
    keyword: "",
    loading: false,
    message: "",
    pageNumber: 0,
  };

  componentDidMount = () => {
    this.getDataBook();
  };

  getDataBook = () => {
    this.setState({
      pageNumber: this.props.pageNumber,
    });
  };

  // componentDidUpdate = () => {
  //   let prevState = this.state.query;
  //   if (prevState !== this.state.query) {
  //     console.log("query navbar", this.state.query);
  //     this.getSearchResults();
  //   }
  // };

  sortTitle = async () => {
    await this.props.dispatch(sortBookByTitle());
  };

  sortDate = async () => {
    await this.props.dispatch(sortBookByDate());
  };

  sortGenre = async () => {
    await this.props.dispatch(sortBookByGenre());
  };
  sortAvail = async () => {
    await this.props.dispatch(sortBookByAvail());
  };

  getSearchResults = async () => {
    // await this.props.dispatch(
    //   getAllBook(this.state.pageNumber, this.state.query)
    // );
    await this.props.dispatch(searchBookTitle(this.state.keyword));
  };

  handleOnInputChange = (event) => {
    this.setState(
      { keyword: event.target.value, loading: true, message: "" },
      () => {
        this.getSearchResults();
      }
    );
  };

  render() {
    console.log("my pagenumber in hom navbar: ", this.state.pageNumber);
    const toggleClass = () => {
      const oldNameClass = document.getElementById("wrapper").className;
      const newNameClass =
        oldNameClass === "d-flex" ? "d-flex toggled" : "d-flex";
      document.getElementById("wrapper").className = newNameClass;
    };
    return (
      <nav className="nav topbar shadow pt-3 pb-3 navbar-expand-lg">
        <div className="col-md-2">
          <button className="btn" id="menu-toggle" onClick={toggleClass}>
            <FaBars />
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <form className="mx-auto col-md-5" id="navbarSupportedContent">
          <div className="form-row align-items-center">
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-dark"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Sort By
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.sortTitle}
                >
                  Title
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.sortDate}
                >
                  Date Released
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.sortGenre}
                >
                  Genre
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.sortAvail}
                >
                  Availability
                </button>
              </div>
            </div>
            <div className="dropdown">
              <button
                className="btn dropdown-toggle text-dark"
                type="button"
                id="dropdownMenu2"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                ORDERING
              </button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.state.sort}
                >
                  Ascending
                </button>
                <button
                  className="dropdown-item"
                  type="button"
                  onClick={this.state.sort}
                >
                  Descending
                </button>
              </div>
            </div>
            <div className="col ml-5">
              <input
                // onKeyPress={this.enterPressed.bind(this)}
                type="text"
                className="form-control rounded-pill"
                id="inlineFormInput"
                placeholder="Search"
                onChange={this.handleOnInputChange}
              />
            </div>
          </div>
        </form>
      </nav>
    );
  }
}

// export default HomeNavbar;

const mapStateToProps = (book) => {
  return { book };
};

export default connect(mapStateToProps)(HomeNavbar);
