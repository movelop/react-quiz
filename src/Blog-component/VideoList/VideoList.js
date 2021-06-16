import React from 'react';

import {Link} from 'react-router-dom';

 function VideoList  ({video}) {

   const renderDate = (dateString) => {
        const nameMonths = ['January',"February", "March","April",
        "May","June","July", "August", "September", 
        "October", "November", "December"];

        const date = new Date(dateString);

        return `${date.getDate()}, ${nameMonths[date.getMonth()]}, ${date.getFullYear()}`
    };

    
        
        return (
            <div className= "content">
                            <div className= "content-header" >
                            <h3 className= "title is-4"><b><Link to= {`/videos/${video.filename}`}>{video.filename}</Link></b></h3>
                            
                            <h6 className = "subtitle is-6">{renderDate(video.uploadDate)}</h6>
                            <hr/>
                            </div>
                             
                        </div>
        )
 
    
    
 }    

 export default VideoList;