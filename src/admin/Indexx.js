import React from "react";
import { NavLink } from 'react-router-dom'

export default function Indexx() {
  return (
    <>
      <div className="container-xxl position-relative bg-white d-flex p-0">
        
        {/* Sidebar Start */}
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-light navbar-light">
            <NavLink to={'/indexx'} className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary">
                <i className="fa fa-hashtag me-2" />
                DASHMIN
              </h3>
            </NavLink>
            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img
                  className="rounded-circle"
                  src="aimg/user.jpg"
                  alt=""
                  style={{ width: 40, height: 40 }}
                />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1" />
              </div>
              <div className="ms-3">
                <NavLink className="mb-0">Abdullah</NavLink>
                <span>Admin</span>
              </div>
            </div>
            <div className="navbar-nav w-100">
              <a href="" className="nav-item nav-link active">
                <i className="fa fa-tachometer-alt me-2" />
                Dashboard
              </a>
              <NavLink to={'/'} className="nav-item nav-link">
                <i className="fa fa-th me-2" />
                Home
              </NavLink>
              <NavLink to={'/'} className="nav-item nav-link">
                <i className="fa fa-th me-2" />
                About
              </NavLink>
              <NavLink to={'/admin/storylist'} className="nav-item nav-link">
                <i className="fa fa-th me-2" />
                Story
              </NavLink>
              <NavLink to={'/admin/timelinelist'} className="nav-item nav-link">
                <i className="fa fa-keyboard me-2" />
                Timeline
              </NavLink>
              <NavLink to={'/admin/gallerylist'} className="nav-item nav-link">
                <i className="fa fa-table me-2" />
                Gallery
              </NavLink>
              <NavLink to={'/admin/guestlist'} className="nav-item nav-link">
                <i className="fa fa-table me-2" />
                Brides Maids
              </NavLink>
              <NavLink to={'/'} className="nav-item nav-link">
                <i className="fa fa-chart-bar me-2" />
                RSVP
              </NavLink>
              <NavLink to={'/'} className="nav-item nav-link">
                <i className="fa fa-chart-bar me-2" />
                Footer
              </NavLink>
              
            </div>
          </nav>
        </div>
        {/* Sidebar End */}
        {/* Content Start */}
        <div className="content">
          {/* Navbar Start */}
          <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <a href="index.html" className="navbar-brand d-flex d-lg-none me-4">
              <h2 className="text-primary mb-0">
                <i className="fa fa-hashtag" />
              </h2>
            </a>
            <a href="#" className="sidebar-toggler flex-shrink-0">
              <i className="fa fa-bars" />
            </a>
            <form className="d-none d-md-flex ms-4">
              <input
                className="form-control border-0"
                type="search"
                placeholder="Search"
              />
            </form>
            <div className="navbar-nav align-items-center ms-auto">
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-envelope me-lg-2" />
                  <span className="d-none d-lg-inline-flex">Message</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="aimg/user.jpg"
                        alt=""
                        style={{ width: 40, height: 40 }}
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">
                          Jhon send you a message
                        </h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="aimg/user.jpg"
                        alt=""
                        style={{ width: 40, height: 40 }}
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">
                          Jhon send you a message
                        </h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <div className="d-flex align-items-center">
                      <img
                        className="rounded-circle"
                        src="aimg/user.jpg"
                        alt=""
                        style={{ width: 40, height: 40 }}
                      />
                      <div className="ms-2">
                        <h6 className="fw-normal mb-0">
                          Jhon send you a message
                        </h6>
                        <small>15 minutes ago</small>
                      </div>
                    </div>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">
                    See all message
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <i className="fa fa-bell me-lg-2" />
                  <span className="d-none d-lg-inline-flex">Notificatin</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">Profile updated</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">New user added</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item">
                    <h6 className="fw-normal mb-0">Password changed</h6>
                    <small>15 minutes ago</small>
                  </a>
                  <hr className="dropdown-divider" />
                  <a href="#" className="dropdown-item text-center">
                    See all notifications
                  </a>
                </div>
              </div>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  <img
                    className="rounded-circle me-lg-2"
                    src="aimg/user.jpg"
                    alt=""
                    style={{ width: 40, height: 40 }}
                  />
                  <span className="d-none d-lg-inline-flex">Abdullah</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <a href="#" className="dropdown-item">
                    My Profile
                  </a>
                  <a href="#" className="dropdown-item">
                    Settings
                  </a>
                  <a href="#" className="dropdown-item">
                    Log Out
                  </a>
                </div>
              </div>
            </div>
          </nav>
          {/* Navbar End */}
          {/* Sale & Revenue Start */}
          <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa fa-chart-line fa-3x text-primary" />
                  <div className="ms-3">
                    <p className="mb-2">Today Sale</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa fa-chart-bar fa-3x text-primary" />
                  <div className="ms-3">
                    <p className="mb-2">Total Sale</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa fa-chart-area fa-3x text-primary" />
                  <div className="ms-3">
                    <p className="mb-2">Today Revenue</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-xl-3">
                <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i className="fa fa-chart-pie fa-3x text-primary" />
                  <div className="ms-3">
                    <p className="mb-2">Total Revenue</p>
                    <h6 className="mb-0">$1234</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
        <a
          href="#"
          className="btn btn-lg btn-primary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up" />
        </a>
      </div>
    </>
  );
}
