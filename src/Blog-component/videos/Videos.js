import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoList from '../VideoList/VideoList';

    function Videos ()  {
        const [pageNumber, setPageNumber] = useState(0);
        const [videos, setVideos] = useState([]);
        const [numberOfPages, setNumberOfPage] = useState(0);

        useEffect(() => {
            axios.get(`http://159.65.237.77/video/videos?page=${pageNumber}`)
        .then(res =>res.data)
        .then(({totalPages, files}) => {
            setVideos(files);
            setNumberOfPage(totalPages);
        })
        },[pageNumber])

    

    

    const prevHandler = () => {
        setPageNumber(Math.max(0, pageNumber-1))
      }
    const nextHandler = () => {
        setPageNumber(Math.min(numberOfPages-1, pageNumber + 1));
      }
      const renderList = () => {
        return videos.map(video =>{
            return (
                <VideoList  video = {video} key= {video._id} />
            )
        })
    }
        return (
            <div>
                <div className="header-title">
                    <section className="hero is-medium has-text-centered">
	                    <div className="hero-body">
		                    <div className="container">
                                <h2 className="title is-2">Videos</h2>
		                        
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
                        <button onClick={prevHandler} className="pagination-next" >Previous </button>
                        <button onClick= {nextHandler} className="pagination-previous">Next </button>
                    </nav>  
                </div>
            </div>
        )
    }

    export default Videos