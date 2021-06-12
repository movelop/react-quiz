import axios from 'axios';
import React, { useState, useEffect} from 'react';
import PostList from '../PostList/postList';

 function AllPosts () {
     const [pageNumber, setPageNumber] = useState(0);
     const [posts, setPosts] = useState([]);
     const [numberOfPages, setNumberOfPage] = useState(0)


    useEffect(()=>{
        axios.get(`http://159.65.237.77/posts?page=${pageNumber}`)
        .then(res =>res.data)
        .then(({totalPages, posts}) => {
            setPosts(posts);
            setNumberOfPage(totalPages);
        })
    }, [pageNumber])
    const prevHandler = () => {
        setPageNumber(Math.max(0, pageNumber-1))
      }
    const nextHandler = () => {
        setPageNumber(Math.min(numberOfPages-1, pageNumber + 1));
      }
    const renderList = () => {
        return posts.map(post =>{
            return (
                <PostList  post = {post} key= {post._id} />
            )
        })
    }

   
        return (
            <div>
                <div className="header-title">
                    <section className="hero is-medium has-text-centered">
	                    <div className="hero-body">
		                    <div className="container">
                                <h2 className="title is-2">Articles</h2>
		                        
		                    </div>
	                    </div>
	                </section>
	            </div>
                <div className="main-content">
                    <div className="container">
                        <div className="columns is-centered is-multiline has-text-centered">
	                        <div className="column is-6">
                                <div className = "post">
                                    {renderList()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                <nav className="has-text-right">
	                <button onClick={prevHandler} className="pagination-next" >Previous Posts</button>
	                <button onClick= {nextHandler} className="pagination-previous">Next Posts</button>
	            </nav>
                </div>
            </div>

            
        )
    
}

export default AllPosts
