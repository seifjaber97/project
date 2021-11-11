import React, { Component } from 'react'

export default class Sidebar extends Component {
    render() {
        return (
         <div>
                    <div className="sidebar sidebar-style-2">			
                        <div className="sidebar-wrapper scrollbar scrollbar-inner">
                        <div className="sidebar-content">
                            <ul className="nav nav-primary">
                            <li className="nav-section">
                                <span className="sidebar-mini-icon">
                                <i className="fa fa-ellipsis-h" />
                                </span>
                                <h4 className="text-section">Components</h4>
                            </li>
                            <li className="nav-item active">
                                <a data-toggle="collapse" href="#base">
                                <i className="fas fa-layer-group" />
                                <p>Test</p>
                                <span className="" />
                                </a>
                            </li>
                            <li className="nav-item  ">
                                <a data-toggle="collapse" href="#sidebarLayouts">
                                <i className="fas fa-th-list" />
                                <p>Test</p>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a data-toggle="collapse" href="#forms">
                                <i className="fas fa-pen-square" />
                                <p>Test</p>
                                <span className="caret" />
                                </a>
                                <div className="collapse" id="forms">
                                <ul className="nav nav-collapse">
                                    <li>
                                    <a href="#">
                                        <span className="sub-item">Basic Form</span>
                                    </a>
                                    </li>
                                </ul>
                                </div>
                            </li>
                            </ul>
                        </div>
                        </div>
                    </div>
        </div>

		
        )
    }
}
