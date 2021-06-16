import React, { Component } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


 class Post extends Component {
    state = {
        post: {},
    }

    componentDidMount () {
        this.getPost();
    }

    async getPost () {
        const res = await axios.get(`
        http://159.65.237.77/posts/${this.props.match.params.id}`);
        this.setState({post: res.data});
        
    }

    renderDate (dateString) {
        const nameMonths = ['January',"February", "March","April",
        "May","June","July", "August", "September", 
        "October", "November", "December"];

        const date = new Date(dateString);

        return `${date.getDate()}, ${nameMonths[date.getMonth()]}, ${date.getFullYear()}`
    };

    renderHTML () {
        return { __html: this.state.post.sanitizedHtml}
    }

    renderPost () {
        return (
            <div dangerouslySetInnerHTML = {this.renderHTML()}>

            </div>
        )
    }

    render() {
        
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
	                    <div className="columns is-centered is-multiline">
	                        <div className="column is-6">
	                            <div className="post ">
                                    {/* post content */}
                                    <div className="content">
                                        <div className = "content-header has-text-centered">
                                            <h3 className="title is-4"><strong>{this.state.post.title}</strong></h3>    
                                            
                                            <h6 className="subtitle is-6">{this.renderDate(this.state.post.createdAt)}</h6>
		                                    <hr/>
                                        </div>
                                        {this.renderPost()}
                                    </div>
                                    {/* end post content */}
                                </div>
                                <nav className="has-text-right">
                                    <Link className="button" to="/posts">Back to Articles</Link>
	                            </nav>
                            </div>
                        </div>
                    </div>
                </div>                        
            </div>
        )
    }

    
}

export default Post;