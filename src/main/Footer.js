import { NavLink } from "react-router-dom";

export default function Footer(){
    return(
        <>
        <div className="container-fluid footer py-5 wow fadeIn" data-wow-delay="0.1s">
    <div className="container py-5">
      <div className="row g-5 justify-content-center">
        <div className="col-lg-4 text-start">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Links</h4>
            <NavLink to={'/about'} className="btn-link">
              About
            </NavLink>
            <NavLink to={'/gallery'} className="btn-link">
              Gallery
            </NavLink>
            <NavLink to={'/story'} className="btn-link">
              Story
            </NavLink>
            <NavLink to={'/timeline'} className="btn-link">
              Timeline
            </NavLink>
            <NavLink to={'/RSVP'} className="btn-link">
              RSVP
            </NavLink>
            <NavLink to={'/'} className="btn-link">
              Contact Us
            </NavLink>
            <NavLink to={'/'} className="btn-link">
              Wsedding-date
            </NavLink>
          </div>
        </div>
        <div className="col-lg-4 text-center">
          <div className="footer-item">
            <h4 className="mb-4 text-white">
              Mr<strong className="text-primary">&amp;</strong>Mrs
            </h4>
            <p className="text-white">
              Dolor amet sit justo amet elitr clita ipsum elitr est.Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Nullam in tempor dui,
              non consectetur enim. Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy
            </p>
            <div className="btn-link d-flex justify-content-center">
              <a
                href="#"
                className="btn btn-md-square btn-light btn-light-outline-0 me-2"
              >
                <i className="fab fa-facebook-f" />
              </a>
              <a
                href="#"
                className="btn btn-md-square btn-light btn-light-outline-0 me-2"
              >
                <i className="fab fa-twitter" />
              </a>
              <a
                href="#"
                className="btn btn-md-square btn-light btn-light-outline-0 me-2"
              >
                <i className="fab fa-instagram" />
              </a>
              <a
                href="#"
                className="btn btn-md-square btn-light btn-light-outline-0 me-0"
              >
                <i className="fab fa-linkedin-in" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 text-end">
          <div className="footer-item d-flex flex-column">
            <h4 className="mb-4 text-white">Follow Us</h4>
            <a href="#" className="btn-link">
              {" "}
              Faceboock
            </a>
            <a href="#" className="btn-link">
              {" "}
              Instagram
            </a>
            <a href="#" className="btn-link">
              {" "}
              Twitter
            </a>
            <h4 className="my-4 text-white">Contact Us</h4>
            <a href="#" className="btn-link">
              <i className="fas fa-envelope text-secondary me-2" />{" "}
              info@example.com
            </a>
            <a href="#" className="btn-link">
              <i className="fas fa-phone text-secondary me-2" /> (+012) 3456
              7890 123
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid copyright py-4">
    <div className="container">
      <div className="row g-4 align-items-center">
        <div className="col-md-6 text-center text-md-start mb-md-0">
          <span className="text-light">
            <a href="#">
              <i className="fas fa-copyright text-light me-2" />
              Your Site Name
            </a>
            , All right reserved.
          </span>
        </div>
        <div className="col-md-6 text-center text-md-end text-white">
          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
          Designed By{" "}
          <a className="border-bottom" href="https://htmlcodex.com">
            HTML Codex
          </a>{" "}
          Distributed By <a href="https://themewagon.com">ThemeWagon</a>
        </div>
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a href="#" className="btn btn-primary btn-primary-outline-0 btn-md-square back-to-top">
    <i className="fa fa-arrow-up" />
  </a>
        </>
    )
}