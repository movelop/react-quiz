import React from 'react';
import {Link} from 'react-router-dom';

  function PostList  ({post}) {

   const renderDate = (dateString) =>{
        const nameMonths = ['January',"February", "March","April",
        "May","June","July", "August", "September", 
        "October", "November", "December"];

        const date = new Date(dateString);

        return `${date.getDate()}, ${nameMonths[date.getMonth()]}, ${date.getFullYear()}`
    };

    
        return (
            <div className= "content">
                <div className= "content-header" >
                    <p className= "title is-4 "><b><Link className="has-text-black-bis" to= {`/posts/${post._id}`}>{post.title}</Link></b></p>
                    <p className = "title is-6 is-spaced">{post.description}</p>
                    <p className = "subtitle is-6">{renderDate(post.createdAt)}</p>
                    <hr/>
                </div>
                             
            </div>
            
        )
    
}

export default PostList
