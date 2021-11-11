import React, { Component } from 'react'
import Header from '../StudentComponents/Header'
import Sidebar from '../StudentComponents/Sidebar'

export default class Student extends Component {
    render() {
        return (
            <div>
                <div className="wrapper">
                    <Header />
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content">
                            <div className="panel-header bg-primary-gradient">
                                <div className="page-inner py-5">
                                    <div className="d-flex align-items-left  flex-column flex-md-row">
                                        <div>
                                            <h2 className="text-white pb-2 fw-bold">Student</h2>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col-md-12">
                                            <div className="card">
                                                <div className="card-header">
                                                    <div className="card-title fw-bold">Prediction based on subjects</div>
                                                </div>
                                                <div className="card-body ">
                                                <div className="input-group  ">
                                                    <div className="inputsize">
                                                         <div className="form-group ">
                                                                <input type="text" className="form-control " id="" placeholder="subject 1" />
                                                            </div>
                                                            <div className="form-group ">
                                                                <input type="text" className="form-control" id="" placeholder="subject 2" />
                                                            </div>
                                                            <div className="form-group ">
                                                                <input type="text" className="form-control" id="" placeholder="subject 3" />
                                                            </div>
                                                            <div className="form-group ">
                                                                <input type="text" className="form-control" id="" placeholder="subject 4" />
                                                            </div>
                                                            <div className="form-group ">
                                                                <input type="text" className="form-control" id="" placeholder="subject 5" />
                                                            </div>
                                                            <div className="form-group ">
                                                            <button type="button" class="btn btn-primary btn-lg btn-block fw-bold">Predicit</button>
                                                            </div>
                                                    </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
