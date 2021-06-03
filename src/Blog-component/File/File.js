import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FileSaver from 'file-saver';

  function File ()   {
    const [pageNumber, setPageNumber] = useState(0);
     const [files, setFiles] = useState([]);
     const [numberOfPages, setNumberOfPage] = useState(0)

     useEffect(()=>{
        axios.get(`http://localhost:4000/file/files?page=${pageNumber}`)
        .then(res =>res.data)
        .then(({totalPages, files}) => {
            setFiles(files);
            setNumberOfPage(totalPages);
        })
    }, [pageNumber])

    const prevHandler = () => {
        setPageNumber(Math.max(0, pageNumber-1))
      }
    const nextHandler = () => {
        setPageNumber(Math.min(numberOfPages-1, pageNumber + 1));
      }

    const renderDate = (dateString) => {
        const nameMonths = ['January',"February", "March","April",
        "May","June","July", "August", "September", 
        "October", "November", "December"];

        const date = new Date(dateString);

        return `${date.getDate()}, ${nameMonths[date.getMonth()]}, ${date.getFullYear()}`
    };

   const  renderList = () => {
        return files.map(file =>{
            
            const onSubmitDownload =(e) =>{
                e.preventDefault();
                let downloadFilename = file.filename;
        
                axios({
                    method: "GET",
                    url: `http://localhost:4000/file/download/${downloadFilename}`,
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
                            <h3 className= "title is-3"><b>{file.filename}</b></h3>
                            <h6 className = "subtitle is-6">{renderDate(file.uploadDate)}</h6>
                            <button className="button is-dark is-medium" onClick={((e) => onSubmitDownload(e))}>
							    Download
						    </button>
                            <hr/>
                            </div>
                             
                        </div>       
                
                
                
            )
        })
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

export default File
