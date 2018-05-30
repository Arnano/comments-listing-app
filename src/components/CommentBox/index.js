import React, { Component } from "react";
import { connect } from "react-redux";
import { saveComments, fetchComments } from "actions";

class CommentBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
    this.onFetchComments = this.onFetchComments.bind(this);
  }

  onTextChange(e) {
    this.setState({ comment: e.target.value });
  }

  onSubmitForm(e) {
    e.preventDefault();
    this.props.saveComments(this.state.comment);
    this.setState({ comment: "" });
  }

  onFetchComments() {
    this.props.fetchComments();
  }

  render() {
    const { comment } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmitForm}>
          <h4> Please enter a comment </h4>
          <textarea value={comment} onChange={this.onTextChange} />
          <div>
            <button>Submit your comment</button>
          </div>
        </form>
        <button onClick={this.onFetchComments}>Fetch your comment</button>
      </div>
    );
  }
}

export default connect(null, { saveComments, fetchComments })(CommentBox);
