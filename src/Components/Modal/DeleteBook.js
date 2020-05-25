import { connect } from "react-redux";
import { deleteBook } from "../../Redux/actions/book";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import checkedLogo from "../../Assets/Images/checked.png";

class DeleteBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.idbook,
    };
  }
  deleteBook = () => {
    this.props.dispatch(deleteBook(this.state.id));
  };
  render() {
    return (
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete Data
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
            <div className="modal-body d-flex justify-content-center">
              <img src={checkedLogo} alt="" srcSet="" />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <Link
                to="/book/:idbook"
                className="btn btn-warning"
                onClick={this.deleteBook}
                data-dismiss="modal"
              >
                Delete Data
              </Link>
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

export default connect(mapStateToProps)(DeleteBook);

// export default DeleteBook;
