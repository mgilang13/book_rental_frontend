import { connect } from "react-redux";
import { getBookById } from "../../Redux/actions/book";
import { updateBook } from "../../Redux/actions/book";

import React, { Component } from "react";
import Axios from "axios";

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      author: "",
      description: "",
      image_url: "",
      date_released: "",
      id_genre: "",
      available: "",
      bookById: [],
      dataGenre: [],
      dataAvail: [],
    };
  }

  componentDidMount = () => {
    this.getBookById();
    this.viewGenre();
    this.viewAvail();
  };

  async getBookById() {
    await this.props.dispatch(getBookById(this.props.idbook));
    console.log("hahah", this.props.book.book.bookData.data.length);
    if (this.props.book.book.bookData.data.length === 0) {
      this.props.history.push("/home");
    } else {
      console.log("props book", this.props.book);
      this.setState({
        id: this.props.book.book.bookData.data[0].id,
        image_url: this.props.book.book.bookData.data[0].image_url,
        title: this.props.book.book.bookData.data[0].title,
        author: this.props.book.book.bookData.data[0].author,
        description: this.props.book.book.bookData.data[0].description,
        date_released: this.props.book.book.bookData.data[0].date_released,
        id_genre: this.props.book.book.bookData.data[0].id_genre,
        available: this.props.book.book.bookData.data[0].available,
      });
    }
  }

  viewGenre = () => {
    Axios.get("api/v1/genre/").then((dataGenre) => {
      this.setState({
        dataGenre: dataGenre.data.data,
      });
      console.log("genre", this.state.dataGenre);
    });
  };

  viewAvail = () => {
    Axios.get("api/v1/avail/availCheck").then((dataAvail) => {
      this.setState({
        dataAvail: dataAvail.data.data,
      });
      console.log("available", this.state.dataAvail);
    });
  };

  updateBookData = (e) => {
    let idbook = this.props.idbook;

    e.preventDefault();
    const {
      id,
      title,
      author,
      description,
      image_url,
      date_released,
      id_genre,
      available,
    } = this.state;
    const book = {
      id,
      title,
      author,
      description,
      image_url,
      date_released,
      id_genre,
      available,
    };

    this.props.dispatch(updateBook(idbook, book));
  };
  render() {
    const { dataGenre } = this.state;
    const { dataAvail } = this.state;
    console.log("state id genre", this.state.id_genre);
    return (
      <div
        key={this.state.id}
        className="modal fade"
        id="editModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Edit Data
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">URL Image</label>
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.image_url}
                      className="form-control"
                      placeholder="Url Image"
                      onChange={(e) => {
                        this.setState({
                          image_url: e.target.value,
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Title</label>
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.title}
                      className="form-control"
                      placeholder="Title"
                      onChange={(e) => {
                        this.setState({
                          title: e.target.value,
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Author</label>
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.author}
                      className="form-control"
                      placeholder="Author"
                      onChange={(e) => {
                        this.setState({
                          author: e.target.value,
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Description</label>
                  <div className="col">
                    <input
                      type="text"
                      value={this.state.description}
                      className="form-control"
                      placeholder="Description"
                      onChange={(e) => {
                        this.setState({
                          description: e.target.value,
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Date Released
                  </label>
                  <div className="col">
                    <input
                      type="date"
                      className="form-control"
                      value={this.state.date_released.slice(0, 10)}
                      onChange={(e) => {
                        console.log("state date: ", this.state.date_released);
                        console.log("tanggal berubah: ", e.target.value);
                        this.setState({
                          date_released: e.target.value,
                        });
                      }}
                    ></input>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">Genre</label>
                  <div className="col">
                    <select
                      value={this.state.id_genre}
                      className="custom-select"
                      onChange={(e) => {
                        this.setState({
                          id_genre: e.target.value,
                        });
                      }}
                    >
                      <option>Choose....</option>
                      {dataGenre.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="form-group row">
                  <label className="col-sm-3 col-form-label">
                    Availability
                  </label>
                  <div className="col">
                    <select
                      value={this.state.available}
                      className="custom-select"
                      onChange={(e) => {
                        this.setState({
                          available: e.target.value,
                        });
                      }}
                    >
                      <option>Choose....</option>
                      {dataAvail.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.status}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                data-dismiss="modal"
                type="button"
                onClick={this.updateBookData}
                className="btn btn-warning text-white"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (book) => {
  return {
    book,
  };
};
export default connect(mapStateToProps)(EditBook);
// export default EditBook;
