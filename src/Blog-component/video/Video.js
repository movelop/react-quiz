import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom';

 class Video extends Component {
     state = {
         videoFilename:this.props.match.params.filename,
         video: {}
     }

     componentDidMount () {
         this.getVideo();
     }

    async getVideo () {
        const res = await axios.get(`
        http://159.65.237.77/video/videos/${this.state.videoFilename}`);
        this.setState({video: res.data});
        
    } 

    render() {
        return (
            <div>
                <div className="header-title">
                    <section className="hero is-medium has-text-centered">
                        <div className="hero-body">
                            <div className="container">
                                <h2 className="title is-2">videos</h2>
                                
                            </div>
                        </div>
                    </section>
                </div>
                <div className="main-content">
                <div className="container">
                    <div className="columns is-centered is-multiline has-text-centered">
                        <div className="column is-6">
                            <div className = "post">
                                <div className= "content">
                                    <video controls>
                                        <source src= {`http://159.65.237.77/video/show/${this.state.videoFilename}`}
                                        type = {this.state.video.contentType} >
                                        </source>
                                    
                                    </video>
                                        
                                    
                                    <h5 className = "title">{this.state.video.filename}</h5>
                                    
                                </div>
                            </div>
                            <nav className="has-text-right">
                                    <Link className="button" to="/videos">Back to Videos</Link>
	                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
               
           
        )
    }
}




export default Video;