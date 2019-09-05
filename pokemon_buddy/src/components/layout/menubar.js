import React, { Component } from "react";

import { Link } from "react-router-dom";
import Axios from 'axios';

export default class Menubar extends Component {

    logOut = async () => {
      await Axios.get('/login')// this is an endpoint not a url, you know that 
      
    }
  render() {
    return (
      <div className="menu">
        <nav className="navbar navbar-expand-md  navbar-dark  fixed-top">
          <a className="navbar-brand col-sm-3 col-md-2 mr-0 align-item-center">
            Pokemon
          </a>
          {this.props.user ? (
            <div>
              
              <Link to ='/login' onClick={this.logOut}>
                Log Out 
              </Link>
              <Link to="/Home" >Home</Link>
              <Link to="/WalkList">Walk List</Link>
            </div>
          ) : null}
        </nav>
      </div>
    );
  }
}
// I made log in needlessly confussing.
//log in and ceate acount are switched sooo dont be confussed
