import React, { Component } from 'react'

class PostDetail extends Component {
    render() {
        const post = this.props.location.state;
        console.log(post);
        return (
            <div style={{textAlign : "left"}} >
                <p>ID:{post.id}</p>
                <p>Title:{post.title}</p>
                <p>Body:{post.body}</p>
            </div>
        )
    }
}

export default PostDetail;