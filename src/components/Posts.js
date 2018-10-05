import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPost } from '../action/postAction'

class Posts extends Component {
    componentWillMount() {
        this.props.fetchPost()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
            this.props.posts.unshift(nextProps.newPost);
        }
    }
    render() {
        const postItem = this.props.posts.map(post => (
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return (
            <div>
                <h1>Post List</h1>
                {postItem}
            </div>
        );
    }
}
Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
};
const mapStateToProps = state => ({
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPost })(Posts);