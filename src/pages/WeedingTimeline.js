import React, { useEffect, useState } from "react";
// var time = new Date();
// console.log(
//   time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
// ); 

// function start(sttime,entime) {
//   const stime=sttime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
//   const etime=entime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
//   return {
//     stime,
//     etime
//   };
// }
function WeddingTimeline() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost/React/project/src/admin/database/timeline/timelineshow.php")
      .then((response) => response.json())
      .then((d) => setData(d));


  }, []);
  return (
    <>

      <div
        className="container-fluid wedding-timeline bg-secondary position-relative overflow-hidden py-5"
        id="weddingTimeline"
      >
        <div
          className="position-absolute"
          style={{
            top: "50%",
            left: "-100px",
            transform: "translateY(-50%)",
            opacity: "0.5"
          }}
        >
          <img src="img/wedding-bg.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{
            top: "50%",
            right: "-160px",
            transform: "translateY(-50%)",
            opacity: "0.5",
            rotate: "335deg"
          }}
        >
          <img src="img/wedding-bg.png" className="img-fluid" alt="" />
        </div>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h1 className="display-4 text-white">Wedding Planing Timeline</h1>
          </div>
          <div className="position-relative wedding-content">
            <div className="row g-4">
              {data.map((d, i) => {
                // const startt = start(d.start_time,d.end_time);
                
                return (
                  <div className="col-6 col-md-6 col-xl-3 border border-bottom-0" key={i}>
                    <div className="text-center p-3 wow fadeIn" data-wow-delay="0.1s">
                      <div className="mb-4 p-3 d-inline-flex">
                        <i className="fas fa-menorah text-primary fa-3x" />
                      </div>
                      <p className="text-primary">
                        {/* {startt.stime} */}
                        {d.start_time}
                        {/* {d[0]} */}
                        
                      -
                      {d.end_time}
                      {/* {d[1]} */}
                      </p>
                      <h3 className="text-dark">{d.title}</h3>
                      {/* <h3 className="text-dark">{d[2]}</h3> */}
                      {/* <p className="text-dark">{d[3]}</p> */}
                      <p className="text-dark">{d.details}</p>
                    </div>
                  </div>
                );
              })}
              {/* <div className="col-6 col-md-6 col-xl-3 border border-top-0 border-start-0">
            <div className="text-center p-3 wow fadeIn" data-wow-delay="0.3s">
              <div className="mb-4 p-3 d-inline-flex">
                <i className="fas fa-photo-video text-primary fa-3x" />
              </div>
              <p className="text-primary">10:00AM - 11:00AM</p>
              <h3 className="text-dark">Photoshoot</h3>
              <p className="text-dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 border border-bottom-0 border-end-0">
            <div className="text-center p-3 wow fadeIn" data-wow-delay="0.5s">
              <div className="mb-4 p-3 d-inline-flex">
                <i className="fas fa-dungeon text-primary fa-3x" />
              </div>
              <p className="text-primary">10:00AM - 11:00AM</p>
              <h3 className="text-dark">Reception</h3>
              <p className="text-dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div>
          <div className="col-6 col-md-6 col-xl-3 border border-top-0">
            <div className="text-center p-3 wow fadeIn" data-wow-delay="0.7s">
              <div className="mb-4 p-3 d-inline-flex">
                <i className="fas fa-ring text-primary fa-3x" />
              </div>
              <p className="text-primary">10:00AM - 11:00AM</p>
              <h3 className="text-dark">Ceremony</h3>
              <p className="text-dark">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
              </p>
            </div>
          </div> */}
            </div>
            <div
              className="position-absolute heart-circle "
              style={{ bottom: 0, left: "-18px" }}
            >
              <div className="border border-2 border-primary rounded-circle p-1 bg-secondary" />
            </div>
            <div
              className="position-absolute heart-circle"
              style={{ top: 18, right: "-17px" }}
            >
              <div className="border border-2 border-primary rounded-circle p-1 bg-secondary" />
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
export default WeddingTimeline;