import React, { Component } from 'react';
import {Link} from 'react-router-dom';

 class postList extends Component {

    renderDate (dateString) {
        const nameMonths = ['January',"February", "March","April",
        "May","June","July", "August", "September", 
        "October", "November", "December"];

        const date = new Date(dateString);

        return `${date.getDate()}, ${nameMonths[date.getMonth()]}, ${date.getFullYear()}`
    };

    render() {
        const {post} = this.props
        return (
            <div className= "content">
                <div className= "content-header" >
                    <h3 className= "title is-3"><b><Link to= {`/posts/${post._id}`}>{post.title}</Link></b></h3>
                    <h4 className = "title is-4 is-spaced">{post.description}</h4>
                    <h6 className = "subtitle is-6">{this.renderDate(post.createdAt)}</h6>
                    <hr/>
                </div>
                             
            </div>
            
        )
    }
}

export default postList
