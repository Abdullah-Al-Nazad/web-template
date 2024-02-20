import React, { useEffect, useState } from "react";
export default function Story() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost/React/project/src/admin/database/story/storyshow.php")
      .then((response) => response.json())
      .then((d) => setData(d));


  }, []);
  return (
    <>
      <div
        className="container-fluid story position-relative py-5"
        id="weddingStory"
      >
        <div className="position-absolute" style={{ top: "-35px", right: 0 }}>
          <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{ top: "-15px", left: 0, transform: "rotate(150deg)" }}
        >
          <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
        </div>
        <div className="container position-relative py-5">
          <div className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="text-uppercase text-primary fw-bold mb-4">Story</h5>
            <h1 className="display-4">Our Love Story</h1>
          </div>
          <div className="story-timeline">
            {data.map((d, i) => {
              return (
                <div className="row wow fadeInUp" data-wow-delay="0.2s"key={i}>
                  <div className="col-md-6 text-end border-0 border-top border-end border-secondary p-4">
                    <div className="d-inline-flex align-items-center h-100">
                      <img
                      height="150"
                        src={`http://localhost/React/project/src/admin/img/${d.photo}`}
                        // className="img-fluid w-100 img-border"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6 border-start border-top border-secondary p-4 pe-0">
                    <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
                      <h4 className="mb-2 text-dark">{d.title}</h4>
                      <p
                        className="text-uppercase text-primary mb-2"
                        style={{ letterSpacing: 3 }}
                      >
                        {d.date}
                      </p>
                      <p className="m-0 fs-5">
                        {d.details}
                      </p>
                    </div>
                  </div>
                </div>

              );
            })}
            {/* <div className="row flex-column-reverse flex-md-row wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
              <h4 className="text-dark mb-2">First Date</h4>
              <p
                className="text-uppercase text-primary mb-2"
                style={{ letterSpacing: 3 }}
              >
                01 Jan 2050
              </p>
              <p className="m-0 fs-5">
                Lorem elitr magna stet rebum dolores sed. Est stet labore est
                lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea
                lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est
                dolor elitr.
              </p>
            </div>
          </div>
          <div className="col-md-6 border-start border-top border-secondary p-4">
            <div className="d-inline-flex align-items-center h-100">
              <img
                src="img/story-2.jpg"
                className="img-fluid w-100 img-border"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="row wow fadeInUp" data-wow-delay="0.4s">
          <div className="col-md-6 text-end border-end border-top border-secondary p-4 ps-0">
            <div className="d-inline-flex align-items-center h-100">
              <img
                src="img/story-3.jpg"
                className="img-fluid w-100 img-border"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 border-start border-top border-secondary p-4 pe-0">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
              <h4 className="text-dark mb-2">Proposal</h4>
              <p
                className="text-uppercase text-primary mb-2"
                style={{ letterSpacing: 3 }}
              >
                01 Jan 2050
              </p>
              <p className="m-0 fs-5">
                Lorem elitr magna stet rebum dolores sed. Est stet labore est
                lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea
                lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est
                dolor elitr.
              </p>
            </div>
          </div>
        </div>
        <div className="row flex-column-reverse flex-md-row wow fadeInUp"
          data-wow-delay="0.5s"
        >
          <div className="col-md-6 text-end border border-start-0 border-secondary p-4 ps-0">
            <div className="h-100 d-flex flex-column justify-content-center bg-secondary p-4">
              <h4 className="text-dark mb-2">Enagagement</h4>
              <p
                className="text-uppercase text-primary mb-2"
                style={{ letterSpacing: 3 }}
              >
                01 Jan 2050
              </p>
              <p className="m-0 fs-5">
                Lorem elitr magna stet rebum dolores sed. Est stet labore est
                lorem lorem at amet sea, eos tempor rebum, labore amet ipsum sea
                lorem, stet rebum eirmod amet. Kasd clita kasd stet amet est
                dolor elitr.
              </p>
            </div>
          </div>
          <div className="col-md-6 border border-end-0 border-secondary p-4">
            <div className="d-inline-flex align-items-center h-100">
              <img
                src="img/story-4.jpg"
                className="img-fluid w-100 img-border"
                alt=""
              />
            </div>
          </div>
        </div> */}
          </div>
        </div>
      </div>
    </>
  )
}