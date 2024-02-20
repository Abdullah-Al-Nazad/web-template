import react from 'react';
import { Outlet, Link, NavLink } from "react-router-dom"

function Header(){
    return(
        <>
        <div className="container-fluid sticky-top px-0">
    <div className="container-fluid">
      <div className="container px-0">
        <nav className="navbar navbar-light navbar-expand-xl" id="navBar">
          <a href="/" className="navbar-brand">
            <h4 className="text-primary display-6 fw-bold mb-0">
              Mr<strong className="text-secondary">&amp;</strong>Mrs
            </h4>
          </a>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary" />
          </button>
          <div className="collapse navbar-collapse py-3" id="navbarCollapse">
            <div className="navbar-nav mx-auto border-top">
              <NavLink to={'/'}  className="nav-item nav-link active">
                Home
              </NavLink>
              <NavLink to={'/about'} className="nav-item nav-link">
                About
              </NavLink>
              <NavLink to={'/story'} className="nav-item nav-link">
                Story
              </NavLink>
              <NavLink to={'/timeline'} className="nav-item nav-link">
                Timeline
              </NavLink>
              <NavLink to={'/gallery'} className="nav-item nav-link">
                Gallery
              </NavLink>
              <NavLink to={'/RSVP'} className="nav-item nav-link">
                RSVP
              </NavLink>
              <NavLink to={'/admin'} className="nav-item nav-link"style={{background:"rgb(251 27 27 / 73%)",color:"white",borderRadius:"10px",fontWeight:"bold"}} >
                Admin / Login
              </NavLink>
            </div>
            <div className="d-flex align-items-center flex-nowrap pt-xl-0">
              <NavLink to={'/Book Attendance'}
                className="btn btn-primary btn-primary-outline-0 py-2 px-4 ms-4"
              >
                Book Attendance
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>
        </>
    )
}
export default Header