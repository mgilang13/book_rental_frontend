import React from "react";
import { connect } from "react-redux";
import Truncate from "react-truncate";

import "./HomeListBook.css";
import { Link } from "react-router-dom";

class HomeListBook extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  // bookDetail = async (id) => {
  //   await localStorage.setItem("idbook", id);
  //   console.log("this.props: ", this.props.history);
  // };

  render() {
    let cardListData;

    let bookSearched = this.props.dataBookSearched.data;
    let bookSearchedLength = bookSearched ? bookSearched.length : "";
    console.log("xxxx: ", bookSearchedLength);
    // let books = this.props.book.bookData.data;
    let books = this.props.dataBook;

    if ((books && bookSearched === undefined) || bookSearched === null) {
      cardListData = (
        <div className="d-flex flex-wrap justify-content-center list-book">
          {this.props.book.isRejected ? (
            <div>
              <strong>Book's empty!</strong>
            </div>
          ) : (
            books.map((item, index) => (
              <Link
                key={index}
                to={{ pathname: `/book/${item.id}`, book: item }}
              >
                <div className="shadow mycard card ml-1 mb-4 mr-2 ">
                  {/* eslint-disable-next-line */}

                  <img
                    className="bookImage"
                    src={item.image_url}
                    alt="This is book"
                  />
                  <h5 className="card-title">
                    <Truncate lines={1}>{item.title}</Truncate>
                  </h5>
                  <div className="card-body">
                    <p className="card-text">
                      <Truncate
                        lines={4}
                        ellipsis={
                          <span>
                            ...{" "}
                            <span style={{ color: "gray", fontSize: "16px" }}>
                              Read more
                            </span>
                          </span>
                        }
                      >
                        {item.description}
                      </Truncate>
                    </p>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      );
    }
    // When the book has searched is there
    else if (bookSearched !== null && bookSearchedLength !== 0) {
      cardListData = (
        <div className="d-flex flex-wrap justify-content-center list-book">
          {bookSearched.map((item, index) => (
            <Link key={index} to="/bookDetail">
              <div className="shadow mycard card ml-1 mb-4 mr-2 ">
                {/* eslint-disable-next-line */}

                <img
                  className="bookImage"
                  src={item.image_url}
                  alt="This is book"
                />
                <h5 className="card-title">
                  <Truncate lines={1}>{item.title}</Truncate>
                </h5>
                <div className="card-body">
                  <p className="card-text">
                    <Truncate
                      lines={4}
                      ellipsis={
                        <span>
                          ...{" "}
                          <span style={{ color: "gray", fontSize: "16px" }}>
                            Read more
                          </span>
                        </span>
                      }
                    >
                      {item.description}
                    </Truncate>
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      );
    } else if (bookSearchedLength === 0) {
      console.log("running");
      cardListData = <h1>Data Not Found</h1>;
    } else {
      cardListData = <h1>Library is Empty</h1>;
    }

    return (
      <div className="container mt-5">
        <h3>List Book</h3>

        {cardListData}
      </div>
    );
  }
}
// export default HomeListBook;
function mapStateToProps({ book }) {
  return {
    book,
  };
}

export default connect(mapStateToProps)(HomeListBook);
