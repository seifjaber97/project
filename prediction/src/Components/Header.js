import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                    <div className="main-header">
      {/* Logo Header */}
      <div className="logo-header"  >
        <a href="index.html" className="logo">
        <img src="./assets/img/icon.ico" alt="navbar brand" className="navbar-brand"/>
        </a>
        <button className="navbar-toggler sidenav-toggler ml-auto" type="button" data-toggle="collapse" data-target="collapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon">
            <i className="icon-menu" />
          </span>
        </button>
        <button className="topbar-toggler more"><i className="icon-options-vertical" /></button>
        <div className="nav-toggle">
          <button className="btn btn-toggle toggle-sidebar">
            <i className="icon-menu" />
          </button>
        </div>
      </div>
      {/* End Logo Header */}
      {/* Navbar Header */}
      <nav className="navbar navbar-header navbar-expand-lg" >
        <div className="container-fluid">
          <div className="collapse" id="search-nav">
            <form className="navbar-left navbar-form nav-search mr-md-3">
              <div className="input-group">
                <div className="input-group-prepend">
                  <button type="submit" className="btn btn-search pr-1">
                    <i className="fa fa-search search-icon" />
                  </button>
                </div>
                <input type="text" placeholder="Search ..." className="form-control" />
              </div>
            </form>
          </div>
          <ul className="navbar-nav topbar-nav ml-md-auto align-items-center">
            <li className="nav-item toggle-nav-search hidden-caret">
              <a className="nav-link" data-toggle="collapse" href="#search-nav" role="button" aria-expanded="false" aria-controls="search-nav">
                <i className="fa fa-search" />
              </a>
            </li>
            <li className="nav-item dropdown hidden-caret">
              <a className="nav-link dropdown-toggle" href="#" id="notifDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <i className="fa fa-bell" />
                <span className="notification">1</span>
              </a>
            </li>
            <li className="nav-item dropdown hidden-caret">
              <a className="dropdown-toggle profile-pic" data-toggle="dropdown" href="#" aria-expanded="false">
                <div className="avatar-sm">
                  <img src="./assets/img/profile.jpg" alt="..." className="avatar-img rounded-circle" />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-user animated fadeIn">
                <div className="dropdown-user-scroll scrollbar-outer">
                  <li>
                    <div className="user-box">
                      <div className="avatar-lg"><img src="./assets/img/profile.jpg" alt="image profile" className="avatar-img rounded" /></div>
                      <div className="u-text">
                        <h4>Zakaria</h4>
                        <p className="text-muted">predict@example.com</p><a href="profile.html" className="btn btn-xs btn-secondary btn-sm">View Profile</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">My Profile</a>
                    <div className="dropdown-divider" />
                    <div className="dropdown-divider" />
                    <a className="dropdown-item" href="#">Logout</a>
                  </li>
                </div>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </div>
            </div>
        )
    }
}
