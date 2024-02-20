import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
function Carousel() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,

  };
  return (
    <>
      {/* """""npm install react-slick""""" must install */}
      {/* """""npm install slick-carousel""""" must install */}
      {/* """""<Slider {...settings}><Slider>""""" If you use your own carousel..just keep your code in this Slider */}

      <div className="container-fluid carousel-header px-0" {...settings}>
        <div id="carouselId" className="carousel slide" data-bs-ride="carousel">
          <ol className="carousel-indicators">
            <li
              data-bs-target="#carouselId"
              data-bs-slide-to={0}
              className="active"
            />
            <li data-bs-target="#carouselId" data-bs-slide-to={1} />
            <li data-bs-target="#carouselId" data-bs-slide-to={2} />
          </ol>
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img src="img/carousel-1.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div
                  className="p-3 mx-auto animated zoomIn"
                  style={{ maxWidth: 900 }}
                >
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: 3 }}
                    >
                      WE ARE GETTING MARRIED
                    </h4>
                  </div>
                  <h1 className="display-1 text-capitalize text-white mb-3">
                    Evelyn <i className="fa fa-heart text-primary" /> Anthony
                  </h1>
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: 3 }}
                    >
                      June 28 2024
                    </h4>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                      href="#"
                    >
                      RSVP Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src="img/carousel-2.jpg" className="img-fluid" alt="Image" />
              <div className="carousel-caption">
                <div
                  className="p-3 mx-auto animated zoomIn"
                  style={{ maxWidth: 900 }}
                >
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-5"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: 3 }}
                    >
                      WE ARE GETTING MARRIED
                    </h4>
                  </div>
                  <h1 className="display-1 text-capitalize text-white mb-3">
                    Evelyn <i className="fa fa-heart text-primary" /> Anthony
                  </h1>
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: 3 }}
                    >
                      June 28 2024
                    </h4>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                      href="#"
                    >
                      RSVP Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="img/carousel-3.png"
                className="img-fluid bg-secondary"
                alt="Image"
              />
              <div className="carousel-caption">
                <div
                  className="p-3 mx-auto animated zoomIn"
                  style={{ maxWidth: 900 }}
                >
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: 3 }}
                    >
                      WE ARE GETTING MARRIED
                    </h4>
                  </div>
                  <h1 className="display-1 text-capitalize text-white mb-3">
                    Evelyn <i className="fa fa-heart text-primary" /> Anthony
                  </h1>
                  <div
                    className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
                    style={{ borderStyle: "double" }}
                  >
                    <h4
                      className="text-white text-uppercase fw-bold mb-0"
                      style={{ letterSpacing: 3 }}
                    >
                      June 28 2024
                    </h4>
                  </div>
                  <div className="d-flex align-items-center justify-content-center">
                    <a
                      className="btn btn-primary btn-primary-outline-0 py-3 px-5"
                      href="#"
                    >
                      RSVP Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselId"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default Carousel;
