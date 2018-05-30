import React, { Component } from "react";
import { connect } from "react-redux";

class CommentList extends Component {
  render() {
    const { comments } = this.props;

    return (
      <div>
        <h3> Comment list </h3>
        <ul>
          {comments.map(comment => {
            return <li key={comment}>{comment}</li>;
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ comments }) => ({ comments });

export default connect(mapStateToProps)(CommentList);
