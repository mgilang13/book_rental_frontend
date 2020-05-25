import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Main from "./Components/Main/Index";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import History from "./Pages/History/History";
import BookDetail from "./Pages/Detail/BookDetail";

import { Provider } from "react-redux";
import store from "./Redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact render={(props) => <Main {...props} />} />
            <Route path="/login" render={(props) => <Login {...props} />} />
            <Route path="/History" render={(props) => <History {...props} />} />
            <Route
              path="/register"
              render={(props) => <Register {...props} />}
            />
            <Route path="/home" render={(props) => <Home {...props} />} />
            <Route path={"/book/:id"} component={BookDetail} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
