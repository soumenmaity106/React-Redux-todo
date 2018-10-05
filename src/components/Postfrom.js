import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createPost } from '../action/postAction';

class PostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: ''
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
      title: this.state.title,
      body: this.state.body
    };

    this.props.createPost(post);
  }

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form onSubmit={this.onSubmit}>
          <div>
            <label className="inputtitle">Title </label>
            <br />
            <input
              type="text"
              name="title"
              className="inputtext"
              onChange={this.onChange}
              value={this.state.title}
            />
          </div>
          <br />
          <div>
            <label className="inputtitle">Body</label>
            <br />
            <textarea
              name="body"
              className="bodytextarea"
              onChange={this.onChange}
              value={this.state.body}
            />
          </div>
          <br />
          <button type="submit" className="btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

PostForm.propTypes = {
  createPost: PropTypes.func.isRequired
};

export default connect(null, { createPost })(PostForm);