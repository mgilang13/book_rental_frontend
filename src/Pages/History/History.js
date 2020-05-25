import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import BookHistory from "../../Components/Card/BokkHistory";
import { Helmet } from "react-helmet";
class History extends React.Component {
  render() {
    const title = "History Page";

    return (
      <div>
        <Helmet>
          <title>{title}</title>
        </Helmet>
        <BookHistory />
      </div>
    );
  }
}
// export default Home;
const mapStateToProps = book => {
  return {
    book
  };
};

export default withRouter(connect(mapStateToProps)(History));
