import { useState,useEffect } from "react";
export default function Bridesmaids() {

  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost/React/project/src/admin/database/guest/guestshow.php")
      .then((response) => response.json())
      .then((d) => setData(d));


  }, []);
  return (
    <>
      <div className="container-fluid team position-relative py-5">
        <div className="position-absolute" style={{ bottom: "-80px", right: 0 }}>
          <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{ bottom: "-90px", left: 0, transform: "rotate(150deg)" }}
        >
          <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div className="position-absolute" style={{ top: "-100px", right: 0 }}>
          <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{ top: "-80px", left: 0, transform: "rotate(150deg)" }}
        >
          <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div className="container py-5">
          <div
            className="mb-5 text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 800 }}
          >
            <h1 className="display-2 text-dark">Bridesmaids &amp; Groomsmen</h1>
            <p className="fs-5 text-dark">
              Lorem Ipsum is simply dummy text of the printing and typesetting Ipsum
              is simply dummy text of the printing and typesetting Ipsum is simply
              dummy text of the printing and typesetting
            </p>
          </div>
          <div className="row g-4">

            {data.map((d, i) => {
              return (
                <div
                  className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  <div className="team-item">
                    <div className="team-img">
                      <div className="team-img-main">
                        <img
                          src={`http://localhost/React/project/src/admin/img/${d.photo}`}
                          className="img-fluid w-100"
                          alt=""
                        />
                      </div>
                      <div
                        className="team-img-bg position-absolute"
                        style={{
                          bottom: "-30px",
                          left: "-100px",
                          transform: "rotate(50deg)",
                          zIndex: 1
                        }}
                      >
                        <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                      </div>
                      <div
                        className="team-img-bg position-absolute"
                        style={{
                          bottom: "-40px",
                          right: "-120px",
                          transform: "rotate(-30deg)",
                          zIndex: 1
                        }}
                      >
                        <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                      </div>
                    </div>
                    <div className="team-content">
                      <div className="d-flex flex-column p-4">
                        <h5 className="text-white display-6 mb-1">{d.name}</h5>
                        <h5 className="text-white fs-5 mb-0">{d.identity}</h5>
                      </div>
                    </div>
                    <div className="team-social d-flex flex-column">
                      <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                        <i className="fab fa-twitter" />
                      </a>
                      <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                        <i className="fab fa-facebook-f" />
                      </a>
                      <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                        <i className="fab fa-linkedin-in" />
                      </a>
                      <a className="btn btn-light btn-light-outline-0" href="#">
                        <i className="fab fa-instagram" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}

            {/* <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="team-item">
                <div className="team-img">
                  <div className="team-img-main">
                    <img
                      src="img/bridesmaid-team-2.png"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-30px",
                      left: "-100px",
                      transform: "rotate(50deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-40px",
                      right: "-120px",
                      transform: "rotate(-30deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="team-content">
                  <div className="d-flex flex-column p-4">
                    <h5 className="text-white display-6 mb-1">Amelia Alex</h5>
                    <h5 className="text-white fs-5 mb-0">Bridesmaid</h5>
                  </div>
                </div>
                <div className="team-social d-flex flex-column">
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="team-item">
                <div className="team-img">
                  <div className="team-img-main">
                    <img
                      src="img/bridesmaid-3.png"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-30px",
                      left: "-100px",
                      transform: "rotate(50deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-40px",
                      right: "-120px",
                      transform: "rotate(-30deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="team-content">
                  <div className="d-flex flex-column p-4">
                    <h5 className="text-white display-6 mb-1">Amelia Alex</h5>
                    <h5 className="text-white fs-5 mb-0">Bridesmaid</h5>
                  </div>
                </div>
                <div className="team-social d-flex flex-column">
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="team-item">
                <div className="team-img">
                  <div className="team-img-main">
                    <img
                      src="img/bridesmaid-4.png"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-30px",
                      left: "-100px",
                      transform: "rotate(50deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-40px",
                      right: "-120px",
                      transform: "rotate(-30deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="team-content">
                  <div className="d-flex flex-column p-4">
                    <h5 className="text-white display-6 mb-1">Amelia Alex</h5>
                    <h5 className="text-white fs-5 mb-0">Bridesmaid</h5>
                  </div>
                </div>
                <div className="team-social d-flex flex-column">
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <div className="team-item">
                <div className="team-img">
                  <div className="team-img-main">
                    <img
                      src="img/Groomsmen-1.png"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-30px",
                      left: "-100px",
                      transform: "rotate(50deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-40px",
                      right: "-120px",
                      transform: "rotate(-30deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="team-content">
                  <div className="d-flex flex-column p-4">
                    <h5 className="text-white display-6 mb-1">David John</h5>
                    <h5 className="text-white fs-5 mb-0">Groomsmen</h5>
                  </div>
                </div>
                <div className="team-social d-flex flex-column">
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.4s"
            >
              <div className="team-item">
                <div className="team-img">
                  <div className="team-img-main">
                    <img
                      src="img/Groomsmen-2.png"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-30px",
                      left: "-100px",
                      transform: "rotate(50deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-40px",
                      right: "-120px",
                      transform: "rotate(-30deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="team-content">
                  <div className="d-flex flex-column p-4">
                    <h5 className="text-white display-6 mb-1">David John</h5>
                    <h5 className="text-white fs-5 mb-0">Groomsmen</h5>
                  </div>
                </div>
                <div className="team-social d-flex flex-column">
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.6s"
            >
              <div className="team-item">
                <div className="team-img">
                  <div className="team-img-main">
                    <img
                      src="img/Groomsmen-3.png"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-30px",
                      left: "-100px",
                      transform: "rotate(50deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-40px",
                      right: "-120px",
                      transform: "rotate(-30deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="team-content">
                  <div className="d-flex flex-column p-4">
                    <h5 className="text-white display-6 mb-1">David John</h5>
                    <h5 className="text-white fs-5 mb-0">Groomsmen</h5>
                  </div>
                </div>
                <div className="team-social d-flex flex-column">
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp"
              data-wow-delay="0.8s"
            >
              <div className="team-item">
                <div className="team-img">
                  <div className="team-img-main">
                    <img
                      src="img/Groomsmen-4.png"
                      className="img-fluid w-100"
                      alt=""
                    />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-30px",
                      left: "-100px",
                      transform: "rotate(50deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                  <div
                    className="team-img-bg position-absolute"
                    style={{
                      bottom: "-40px",
                      right: "-120px",
                      transform: "rotate(-30deg)",
                      zIndex: 1
                    }}
                  >
                    <img src="img/team-1-bg.png" className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="team-content">
                  <div className="d-flex flex-column p-4">
                    <h5 className="text-white display-6 mb-1">David John</h5>
                    <h5 className="text-white fs-5 mb-0">Groomsmen</h5>
                  </div>
                </div>
                <div className="team-social d-flex flex-column">
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-facebook-f" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0 mb-2" href="#">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a className="btn btn-light btn-light-outline-0" href="#">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div> */}


          </div>
        </div>
      </div>
    </>
  )
}