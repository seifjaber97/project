import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
            <div>
                 <div className="sidebar sidebar-style-2">			
      <div className="sidebar-wrapper scrollbar scrollbar-inner">
        <div className="sidebar-content">
          <div className="user">
            <div className="avatar-sm float-left mr-2">
              <img src="./assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
            </div>
            <div className="info text-left ">
              <a data-toggle="collapse" href="#collapseExample" aria-expanded="true">
                <span>
                  Zakaria
                  <span className="user-level ">Administrator</span>
                  <span className="caret" />
                </span>
              </a>
              <div className="clearfix" />
              <div className="collapse in" id="collapseExample">
                <ul className="nav">
                  <li>
                    <a href="#profile">
                      <span className="link-collapse">My Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#edit">
                      <span className="link-collapse">Edit Profile</span>
                    </a>
                  </li>
                  <li>
                    <a href="#settings">
                      <span className="link-collapse">Settings</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <ul className="nav nav-primary" >
            <li className="nav-item active" >
              <a data-toggle="collapse" href="#dashboard" className="collapsed" aria-expanded="false">
                <i className="fas fa-home" />
                <p>Dashboard</p>
                <span className="caret" />
              </a>
              <div className="collapse" id="dashboard">
                <ul className="nav nav-collapse">
                  <li>
                    <a href="../demo1/index.html">
                      <span className="sub-item">Dashboard 1</span>
                    </a>
                  </li>
                  <li>
                    <a href="../demo2/index.html">
                      <span className="sub-item">Dashboard 2</span>
                    </a>
                  </li> 
                </ul>
              </div>
            </li>
            <li className="nav-section">
              <span className="sidebar-mini-icon">
                <i className="fa fa-ellipsis-h" />
              </span>
              <h4 className="text-section">Components</h4>
            </li>
          </ul>
        </div>
      </div>
    </div>
            </div>
        )
    }
}
