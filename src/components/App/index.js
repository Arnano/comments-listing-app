import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

import { isSignedIn } from "actions";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

class App extends Component {
  constructor(props) {
    super(props);

    this.renderHeader = this.renderHeader.bind(this);
    this.renderButton = this.renderButton.bind(this);
  }

  renderButton() {
    const signedInText = this.props.auth ? "Sign out" : "Sign in";

    return (
      <button
        className="btn btn-success"
        style={{ margin: "10px" }}
        onClick={() => this.props.isSignedIn(!this.props.auth)}
      >
        <span className="glyphicon glyphicon-log-in" /> {signedInText}
      </button>
    );
  }

  renderHeader() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/"> Home </Link>
            </li>
            <li>
              <Link to="/post"> Post a comment </Link>
            </li>
          </ul>
          <ul className="nav navbar-nav navbar-right">
            <li>{this.renderButton()}</li>
          </ul>
        </div>
      </nav>
    );
  }

  render() {
    return (
      <div>
        {this.renderHeader()}
        <div className="well" style={{ width: "90%", margin: "0 auto" }}>
          <Route path="/post" component={CommentBox} />
          <Route path="/" exact component={CommentList} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({ auth });

export default connect(mapStateToProps, { isSignedIn })(App);
