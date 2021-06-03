import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import banner from './img/favicon.png';


 class NavBar extends Component {
    state = {
        isActive : false,
    }
    toggleNav = () => {
       this.setState(prevState => ({
         isActive: !prevState.isActive
       }))
       
     }
    render() {
        return (
            <nav className="navbar"
            aria-label="main navigation"
            style={{
              borderBottom: 'solid 1px #dddddd',
            }}>
          <div className="navbar-brand">
            <Link className="navbar-item" to= '/'>
              <img src={banner} alt= "logo" />
              <span className= "title">The Tijani Disciple</span>
            </Link>
            <button className="button navbar-burger" onClick={this.toggleNav}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
          <div className={ this.state.isActive ? 'navbar-menu is-active' : 'navbar-menu'}>
            <div className="navbar-start">
              
            </div>
            <div className="navbar-end">
              <Link className="navbar-item" to="/posts">
                
                  Articles
                
              </Link>
              <Link className="navbar-item" to="/file">
                  Documents
              </Link>
              <Link className="navbar-item" to="/videos">
                  Videos
              </Link>
              <Link className="navbar-item" to="/quiz">
                Quiz
                
              </Link>
            </div>
          </div>
        </nav>
        )
    }
}

export default NavBar
