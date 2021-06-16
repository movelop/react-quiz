import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import banner from './img/praying.svg';
import blog from './img/blog.png';
import fileImage from './img/file.png';
import quizImage from './img/quiz.png';
import kaaba from './img/kaaba.png';
import quran from './img/quran.png';
import right from './img/right-direction.svg';


 class Home extends Component {
  
    render() {
        return (
            <div>
                
                    <section className = 'hero is-large'>
                    <div className= 'hero-body'>
                        <div className ="container">
                            <div className = "columns is-vcentered">
                            <div className ="column is-6">
                                    <p className ="subtitle is-3 is-family-primary">Salam Alaikum brothers and sisters , welcome to <span className ="title is-title has-margin-top-30 is-size-3 has-text-weight-bold">
                                    The Tijani Desciples	
                                    </span>
                                    </p>
                                    <p className ="subtitle is-4 has-margin-top-20 is-family-primary" >
                                    Would you like to see our sermons? 
                                    click on the link below to check them out
                                    </p>
                                    <a href="/videos" target="_blank"  rel = "noreferrer" className="has-margin-top-20">
                                      <span className="title">Click here</span>
                                      <img src = {right} alt= "" width="20px" height = "20px"/>
                                    </a>
                                    
                                </div>
                                <div className = "column is-5">
                                    <figure className ="image">
                                        <img src = {banner} alt="banner" />
                                    </figure>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    
                    <div>
                    </div>
                
                </section>
                <section id="features" className="hero has-background-white-ter">
            <div className="hero-body">

            <div className="content-wrapper">
            
            
            <div className="columns is-vcentered has-padding-top-50 has-padding-bottom-50 has-margin-bottom-20 ">
                <div className="column is-10 is-offset-1 columns has-background-white features-box is-hidden-mobile">
                        <div className="column is-5 is-offset-1">
                                
                                <figure>
                                    <img src={kaaba} alt="get analytics and optimize your  performance" height = '300px' width="300px" />
                                </figure> 
                            </div>
                    <div className="column is-4 is-offset-1 has-margin-top-auto has-margin-bottom-auto">
                        
                        <div className="title">
                            <h2 className="has-text-black is-family-secondary has-text-weight-bold"> About Us</h2>
                        </div>
                        
                        <span className="is-size-5">We are an Islamic organisation with the vision of being on the forefront in 
                        keeping the core Islamic values and cultures afloat through the implementation of the Qur’an and Sunnah.</span>

                    </div>
                </div>
                <div className="column features-box has-background-white columns is-hidden-tablet is-hidden-desktop ">

                    <div className="column is-4 is-offset-1 has-margin-top-auto has-margin-bottom-auto">
                        
                        <div className="title">
                            <p className="has-text-black is-family-secondary has-text-weight-bold">About Us </p>
                        </div>
                        
                        <span className="is-size-5"> We are an Islamic organisation with the vision of being on the forefront in 
                        keeping the core Islamic values and cultures afloat through the implementation of the Qur’an and Sunnah.</span>

                    </div>
                    <div className="column is-5 is-offset-1">
                        
                        <figure>
                            <img src={kaaba} alt="get analytics and optimize your  performance" height = '300px' width="300px"/>
                        </figure> 
                    </div>
                </div>
            </div>              
                </div>
            </div>                    
            </section>
    
            
            <section className="section">
      <div className="container">
        <div className="has-text-centered" id="services-text-container">
          <h1 className="title is-1">Our Mission</h1>
          <h4 className="subtitle">
            There are many variations of passages of Lorem Ipsum available, but the majority have
          </h4>
        </div>
        <br />
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  <img src={quran} alt = "" width="30px" height = "30px" />
                </div>
                <h3 className="title is-3 has-text-centered" id="card-product-description">Learning about the Deen</h3>
                <p className="has-text-centered">
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words
                  which don't look even slightly believable.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  <img src={quran}alt ="" width="30px" height = "30px" />
                </div>
                <h3 className="title is-3 has-text-centered" id="card-product-description">Daawa</h3>
                <p className="has-text-centered">
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words
                  which don't look even slightly believable.
                </p>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  <img src={quran}alt="" width="30px" height = "30px"/>
                </div>
                <h3 className="title is-3 has-text-centered" id="card-product-description">Prayers</h3>
                <p className="has-text-centered">
                  There are many variations of passages of Lorem Ipsum available, but the majority
                  have suffered alteration in some form, by injected humour, or randomised words
                  which don't look even slightly believable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
          
    <section className="section ">
      <div className="container">
        <div className="has-text-centered" id="services-text-container">
          <h1 className="title is-1">check out</h1>
          <h4 className="subtitle">
            There are many variations of passages of Lorem Ipsum available, but the majority have
          </h4>
        </div>
        <br />
        <div className="columns">
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  <img src={blog} alt = "" width="30px" height = "30px" />
                </div>
                <h3 className="title is-3 has-text-centered" id="card-product-description">Articles</h3>
                <p className="has-text-centered">
                  Articles on the deen and world in gerneral are shared here,
                  the goal is to know more about our religion and make ourselves better muslims
                </p>
                <div  className ="has-text-centered">
                    <Link to = "/posts">
                    <span className="subtitle">check out</span> <span>
                    <img src = {right} alt= "" width="10px" height = "10px"/>
                    </span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  <img src={fileImage}alt ="" width="30px" height = "30px" />
                </div>
                <h3 className="title is-3 has-text-centered" id="card-product-description">Documents</h3>
                <p className="has-text-centered">
                  Here we share documents on teachings of the deen and also share the latest 
                  documents and guide of our community.
                </p>
                <div  className ="has-text-centered">
                    <Link to = "/file" >
                    <span className="subtitle">check out</span> <span>
                    <img src = {right} alt= "" width="10px" height = "10px"/>
                    </span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="card">
              <div className="card-content">
                <div className="has-text-centered">
                  <img src={quizImage} alt="" width="30px" height = "30px"/>
                </div>
                <h3 className="title is-3 has-text-centered" id="card-product-description">Quiz</h3>
                <p className="has-text-centered">
                  Take a quiz today and improve your knowledge of the deen and know more
                  about our great umah
                </p>
                <div  className ="has-text-centered">
                    <Link to = "/quiz" >
                    <span className="subtitle">check out</span> <span>
                    <img src = {right} alt= "" width="10px" height = "10px"/>
                    </span>
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <section className="section" id="contact-section">
      <div className="container">
        <div className="columns">
          <div className="column is-half">
            <h2 className="title is-2">Contact Us</h2>
            
              <div className="field">
              <p>would you like to know more about us, why not send us a mail </p>
              <form className="w-50" action="mailto:thetijanidiscple@gmail.com" method="post" encType="text/plain">
                <button type = "submit" className= "button is-black is-medium">contact us</button>
              </form>
                
              </div>
            
          </div>
          <div className="column is-half"></div>
        </div>
      </div>
    </section>

            </div>

        )
    }
}

export default Home
