import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import LineChart from './LineChart';
import PieChart from './PieChart';
import Dchart from './Dchart';
import Header from './Header';
import Footer from './Footer';
import BarChart from './BarChart';
import Sidebar from './Sidebar';




  
class Dashb extends Component {
    render() {
        return (

<div>
  <div className="wrapper">
          <Header/>
          <Sidebar/>
    <div className="main-panel">
      <div className="content">
        <div className="panel-header bg-primary-gradient">
          <div className="page-inner py-5">
            <div className="d-flex align-items-left  flex-column flex-md-row">
              <div>
                <h2 className="text-white pb-2 fw-bold">Dashboard</h2>
                <h5 className="text-white op-7 mb-2">Statistics</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="page-inner mt--5">
          <div className="row mt--2">
            <div className="col-md-6">
              <div className="card full-height">
                <div className="card-body">
                  <div className="card-title">Overall statistics</div>
                  <div className="card-category"> information about statistics</div>
                  <div className="d-flex flex-wrap justify-content-around pb-2 pt-4">
                    <div className="px-2 pb-2 pb-md-0 text-center">
                    <Dchart />
                    </div>
                
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card full-height">
                <div className="card-body">
                  <div className="card-title">Other statistics</div>
                  <div className="card-category"> information about statistics</div>

                    <div id="chart-container">
                    <BarChart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-head-row">
                    <div className="card-title">User Statistics</div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-container" style={{minHeight: 375}}>
                      <LineChart/>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">
                  <div className="card-head-row">
                    <div className="card-title">User Statistics</div>
                    
                  </div>
                </div>
                <div className="card-body">
                  <div className="chart-container" style={{minHeight: 375}}>
                    <PieChart/>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <div className="card-header">
                  <div className="card-title text-left"> Complex courses</div>
                </div>
                <div className="card-body pb-0 text-left">
                  <div className="d-flex">
                    <div className="avatar">
                      <img src alt="..." className="avatar-img rounded-circle" />
                    </div>
                    <div className="flex-1 pt-1 ml-2">
                      <h6 className="fw-bold mb-1">Software Tech</h6>
                      <small className="text-muted">% of students</small>
                    </div> 
                    <div className="d-flex ml-auto align-items-center">
                      <h3 className="text-info fw-bold">75 %</h3>
                    </div>
                  </div>
                  <div className="separator-dashed" />
                  <div className="d-flex">
                    <div className="avatar">
                      <img src alt="..." className="avatar-img rounded-circle" />
                    </div>
                    <div className="flex-1 pt-1 ml-2">
                      <h6 className="fw-bold mb-1">Foundation of DS</h6>
                      <small className="text-muted">% of students</small>
                    </div>
                    <div className="d-flex ml-auto align-items-center">
                      <h3 className="text-info fw-bold">80%</h3>
                    </div>
                  </div>
                  <div className="separator-dashed" />
                  <div className="d-flex">
                    <div className="avatar">
                      <img src alt="..." className="avatar-img rounded-circle" />
                    </div>
                    <div className="flex-1 pt-1 ml-2">
                      <h6 className="fw-bold mb-1">Foundation of DS</h6>
                      <small className="text-muted">% of students</small>
                    </div>
                    <div className="d-flex ml-auto align-items-center">
                      <h3 className="text-info fw-bold">90%</h3>
                    </div>
                  </div>
                  <div className="separator-dashed" />
                  <div className="pull-in">
                    <canvas id="topProductsChart" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <div className="card-body text-left">
                  <div className="card-title fw-mediumbold">Students who have weakness</div>
                  <div className="card-list">
                    <div className="item-list">
                      <div className="avatar">
                        <img src="./assets/img/jm_denis.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ml-3 ">
                        <div className="username" >Jimmy Denis</div>
                        <div className="status">Soft</div>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <img src="./assets/img/chadengle.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ml-3">
                        <div className="username">Chad</div>
                        <div className="status">DS</div>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <img src="./assets/img/talha.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ml-3">
                        <div className="username">Talha</div>
                        <div className="status">DS</div>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <img src="./assets/img/mlane.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ml-3">
                        <div className="username">John Doe</div>
                        <div className="status">AI</div>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <img src="./assets/img/talha.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ml-3">
                        <div className="username">Talha</div>
                        <div className="status">Front End Designer</div>
                      </div>
                    </div>
                    <div className="item-list">
                      <div className="avatar">
                        <img src="./assets/img/jm_denis.jpg" alt="..." className="avatar-img rounded-circle" />
                      </div>
                      <div className="info-user ml-3">
                        <div className="username">Jimmy Denis</div>
                        <div className="status">Graphic Designer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card card-primary bg-primary-gradient">
                <div className="card-body">
                  <h4 className="mt-3 b-b1 pb-2 mb-4 fw-bold">Other statistics</h4>
                  <h1 className="mb-4 fw-bold">17</h1>
                  <h4 className="mt-3 b-b1 pb-2 mb-5 fw-bold">Other statistics</h4>
                  <div id="activeUsersChart" />
                  <h4 className="mt-5 pb-3 mb-0 fw-bold">Other statistics</h4>
                  <ul className="list-unstyled">
                    <li className="d-flex justify-content-between pb-1 pt-1"><small>Test</small> <span>7</span></li>
                    <li className="d-flex justify-content-between pb-1 pt-1"><small>Test</small> <span>10</span></li>
                    <li className="d-flex justify-content-between pb-1 pt-1"><small>Test</small> <span>10</span></li>
                    <li className="d-flex justify-content-between pb-1 pt-1"><small>Test</small> <span>10</span></li>
                    <li className="d-flex justify-content-between pb-1 pt-1"><small>Test</small> <span>10</span></li>
                    <li className="d-flex justify-content-between pb-1 pt-1"><small>Test</small> <span>10</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
          <Footer/>
    </div>
    {/* End Custom template */}
  </div>

</div>
        )
    }
}

export default Dashb;