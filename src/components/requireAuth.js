import React, { Component } from "react";
import { connect } from "react-redux";

export const requireAuth = ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      if (!this.props.auth) this.props.history.push("/");
    }

    componentDidUpdate() {
      if (!this.props.auth) this.props.history.push("/");
    }

    render() {
      return <ChildComponent {...this.props} />; //Pass props down to the child component
    }
  }

  const mapStateToProps = ({ auth }) => ({ auth });

  return connect(mapStateToProps)(ComposedComponent);
};
