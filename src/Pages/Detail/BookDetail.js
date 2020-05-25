import { connect } from "react-redux";
import { getBookById, rentBookProcess } from "../../Redux/actions/book";
import { FaArrowLeft } from "react-icons/fa";
import Axios from "axios";

import { Link } from "react-router-dom";

import React, { Component } from "react";
import "./BookDetail.css";
import { Helmet } from "react-helmet";
import EditBookModal from "../../Components/Modal/EditBook";
import DeleteBookModal from "../../Components/Modal/DeleteBook";

Axios.defaults.baseURL = "http://localhost:3001/";

class BookDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookById: [],
      dataGenre: [],
      dataAvail: [],
      idgenre: "",
      avail: "mt-5 text-success",
      id: props.match.params.id,
    };
  }
  componentDidMount = () => {
    if (this.state.id === undefined) {
      this.props.history.push("/home");
    } else {
      this.getBookById();
      this.viewGenre(); // for dropdown menu in edit book modal
      this.viewAvail(); // for dropdown menu in edit book modal

      // }
    }
  };

  viewGenre = () => {
    Axios.get("api/v1/genre/").then((dataGenre) => {
      this.setState({
        dataGenre: dataGenre.data.result,
      });
    });
  };

  viewAvail = () => {
    Axios.get("api/v1/avail/availCheck").then((dataAvail) => {
      this.setState({
        dataAvail: dataAvail.data.result,
      });
    });
  };

  rentBook = async () => {
    await this.props.dispatch(rentBookProcess(this.state.id));
  };

  async getBookById() {
    await this.props.dispatch(getBookById(this.state.id));
    console.log("props in bookDetail: ", this.props.book.book.bookData);
    this.setState({
      bookById: this.props.book.book.bookData.data,
    });
    // }
  }

  render() {
    const { bookById } = this.state;
    return (
      <div>
        <Helmet>
          <title>Book Detail</title>
        </Helmet>
        <EditBookModal idbook={this.state.id} />
        <DeleteBookModal idbook={this.state.id} />
        {bookById.map((item) => (
          <div key={item.id}>
            <div className="bannerImage">
              <div className="col-sm-5 menu row">
                <div className="col-sm-2">
                  <Link
                    to="/home"
                    className="btn rounded-circle btn-light backButton mt-3 ml-3"
                  >
                    <FaArrowLeft />
                  </Link>
                </div>
                <div className="col-sm-3 d-flex align-items-end editDelete">
                  <Link
                    className="btn btn-light"
                    data-toggle="modal"
                    data-target="#editModal"
                  >
                    Edit
                  </Link>
                  <Link
                    className="btn btn-light"
                    data-toggle="modal"
                    data-target="#deleteModal"
                  >
                    Delete
                  </Link>
                </div>
              </div>
              <img
                className="bigCover"
                alt="Big Book Cover"
                src={item.image_url}
              />
              <img
                className="shadow-lg float-right smallBanner mr-5"
                alt="Small Banner"
                src={item.image_url}
              />
            </div>
            <div className="row col mainContent">
              <div className="col-md-9 content row">
                <div className="col-sm-7">
                  <div className="d-flex">
                    <h4 className="flag flex-wrap pl-2 pr-2 pt-1 pb-1 rounded">
                      {item.name}
                    </h4>
                  </div>
                  <h2>
                    <strong>{item.title}</strong>
                  </h2>
                  <p>
                    <strong>{item.df}</strong>
                  </p>
                </div>
                <div className="col-sm-5 pr-5">
                  <h2
                    id="available"
                    align="right"
                    className={
                      item.status === "Available"
                        ? "text-success"
                        : "text-danger"
                    }
                  >
                    {item.status}
                  </h2>
                </div>
                <div className="d-flex pr-5">
                  <p className="flex-wrap contentText">{item.description}</p>
                </div>
              </div>
              <div className="col d-flex">
                {/* eslint-disable-next-line */}
                <Link
                  className={
                    item.status === "Available"
                      ? "btn btn-warning btnBorrow mr-3 pt-2"
                      : "btn btn-warning btnBorrow mr-3 pt-2 disabled"
                  }
                  onClick={this.rentBook}
                  to="/home"
                >
                  <strong>Borrow</strong>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (book) => {
  return {
    book,
  };
};
export default connect(mapStateToProps)(BookDetail);
