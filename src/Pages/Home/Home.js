import React, { Component } from "react";
import { connect } from "react-redux";
import { Helmet } from "react-helmet";

import { getAllBook } from "../../Redux/actions/book";

import HomeNavbar from "../../Components/Navbar/HomeNavbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Carousel from "../../Components/Carousel/Carousel";
import HomeListBook from "../../Components/Card/HomeListBook";
import AddBookModal from "../../Components/Modal/AddBook";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      library: [],
      library2: [],
      pageNumber: 1,
      search: "",
      disabledBtn: false,
    };
  }

  componentDidMount = () => {
    const token = localStorage.getItem("KEY_TOKEN");
    if (!token) {
      this.props.history.push("/login");
    } else {
      this.getDataBook();
    }
  };

  getDataBook = async () => {
    await this.props.dispatch(getAllBook(this.state.pageNumber));

    this.setState({
      library: this.props.book.book.bookData.data,
    });
  };

  logout = () => {
    this.props.history.push("/login");
  };

  moreData = async () => {
    await this.setState({
      pageNumber: this.state.pageNumber + 1,
    });
    await this.props.dispatch(
      getAllBook(this.state.pageNumber, this.state.search)
    );
    await this.setState({
      library2: this.props.book.book.bookData.data,
    });
    await this.setState({
      library: this.state.library.concat(this.state.library2),
    });
    if (
      this.state.library.length ===
      this.props.book.book.bookData.pageDetail.total
    ) {
      this.setState({
        disabledBtn: true,
      });
    } else {
      this.setState({
        disabledBtn: false,
      });
    }
  };

  render() {
    const title = "Homepage";
    const { library, pageNumber } = this.state;
    const greeting = "Welcome Gilang";
    const disabledBtn = this.state.disabledBtn;
    const bookSearched = this.props.book.book.bookSearched;

    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <div className="d-flex toggled" id="wrapper">
          <Sidebar />
          <div id="page-content-wrapper">
            <HomeNavbar pageNumber={pageNumber} />
            <Carousel />
            <HomeListBook
              dataBook={library}
              greeting={greeting}
              dataBookSearched={bookSearched}
            />
            <div className="d-flex justify-content-center mt-5 mb-4">
              <button
                className="btn btn-success "
                disabled={disabledBtn}
                onClick={this.moreData}
              >
                Load More
              </button>
            </div>
          </div>
          <AddBookModal />
        </div>
      </div>
    );
  }
}

// export default Home;
const mapStateToProps = (book) => {
  return {
    book,
  };
};

export default connect(mapStateToProps)(Home);
