import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render() {
        return (
<div className="bg">
<header id="header">
  <div className="container">
  <div id="logo" className="pull-left">
    <a href="index.html" className="scrollto"><img src="assets/img/logo.png" alt title /></a>
  </div>
    <nav id="nav-menu-container">
        <ul className="nav-menu">
        <li className="menu-active"><a href="">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
</div>
  </header>
 <section id="intro">
    <div className="intro-container" data-aos="zoom-in" data-aos-delay={100}>
      <h1 className="mb-4 pb-0"><span>Student</span>  Performance Prediction</h1>
      <div className="flex-row">
          
      <Link to="/Student" className="about-btn  scrollto blk">  Student </Link>
      <Link to="/Staff" className="about-btn scrollto blk">Staff member</Link>
      </div>

    </div>
  </section>
</div>


        )
    }
}
