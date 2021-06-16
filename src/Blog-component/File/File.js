import React, { Component } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';

 class File extends Component {
     state = {
         pageNumber: 0,
         files: [],
         numberOfPages: 0,
         fileDownloading: ''
     }
     componentDidMount () {
         this.getFiles();
         
     }

     getFiles () {
        axios.get(`http://159.65.237.77/file/files?page=${this.state.pageNumber}`)
        .then(res => res.data)
        .then(({totalPages, files}) => {
            this.setState({files : files});
            this.setState({numberOfPages : totalPages});
        })
        
    }
    


    

    renderDate (dateString) {
        const nameMonths = ['January',"February", "March","April",
        "May","June","July", "August", "September", 
        "October", "November", "December"];

        const date = new Date(dateString);

        return `${date.getDate()}, ${nameMonths[date.getMonth()]}, ${date.getFullYear()}`
    };

    renderList () {
        return this.state.files.map(file =>{
            
            const onSubmitDownload =(e) =>{
                e.preventDefault();
                let downloadFilename = file.filename;
        
                axios({
                    method: "GET",
                    url: `http://159.65.237.77/file/download/${downloadFilename}`,
                    responseType: "blob",
                    
                }).then(response => {
                    this.setState({ fileDownloading: true }, () => {
        
                        FileSaver.saveAs(response.data, downloadFilename);
                        
                    });
                }).then(() => {
                    this.setState({ fileDownloading: false });

                });	
            }
            return (
                
                 <div className= "content" key={file.filename}>
                            <div className= "content-header" >
                            <h3 className= "title is-4"><b>{file.filename}</b></h3>
                            <h6 className = "subtitle is-6">{this.renderDate(file.uploadDate)}</h6>
                            <button className="button is-dark is-medium" onClick={((e) => onSubmitDownload(e))}>
							    Download
						    </button>
                            <hr/>
                            </div>
                             
                        </div>       
                
                
                
            )
        })
    }

    render() {
      const   {pageNumber} = this.state
        const prevHandler = () => {
            this.setState({ pageNumber : Math.max(0, pageNumber -1)})
        }
    
        const nextHandler = () => {
            this.setState({pageNumber: Math.min(this.state.numberOfPages-1, pageNumber + 1)})
        }
        return (
            <div>
            <div className="header-title">
                <section className="hero is-medium has-text-centered">
                    <div className="hero-body">
                        <div className="container">
                            <h2 className="title is-2">Documents</h2>
                            
                        </div>
                    </div>
                </section>
            </div>
            <div className="main-content">
                <div className="container">
                    <div className="columns is-centered is-multiline has-text-centered">
                        <div className="column is-6">
                            <div className = "post">
                                {this.renderList()}
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
}

export default File
