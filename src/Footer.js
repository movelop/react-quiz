import React from 'react'

 const Footer = () => {
     const currentYear = new Date().getFullYear();
         return (
        <div>
            <footer className="footer">
    <div className="container">
      <div className="content has-text-centered">
        <p>
          Copyright © <span>{currentYear}</span> The Tijani Disciples by <a href="https://github.com/movelop" target= "_blank" rel= "noreferrer"><strong>Muhammad Babalola</strong></a>
        </p>
      </div>
    </div>
  </footer>
        </div>
    )
}



export default Footer;