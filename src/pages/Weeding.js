export default function Weeding(){
    return(
        <>
        <div className="container-fluid wedding-date-bg position-relative py-5">
    <div className="position-absolute" style={{ top: "-100px", right: 0 }}>
      <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
    </div>
    <div
      className="position-absolute"
      style={{ top: "-80px", left: 0, transform: "rotate(150deg)" }}
    >
      <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
    </div>
    <div className="container py-5 wow zoomIn" data-wow-delay="0.1s">
      <div
        className="wedding-date text-center bg-light p-5"
        style={{
          borderStyle: "double !important",
          border: "15px solid rgba(253, 93, 93, 0.5)"
        }}
      >
        <div className="wedding-date-content">
          <div
            className="d-inline-block border-end-0 border-start-0 border-secondary p-2 mb-4"
            style={{ borderStyle: "double" }}
          >
            <h4
              className="text-dark text-uppercase fw-bold mb-0"
              style={{ letterSpacing: 3 }}
            >
              June 28, 2024
            </h4>
          </div>
          <h1 className="display-4">We Are Getting Married</h1>
          <p className="text-dark fs-5">
            Niloy Hotel New York , 123 West 23th Street, NY
          </p>
          <div className="d-flex align-items-center justify-content-center mb-5">
            <div className="text-dark fs-2 me-4">
              <div>00</div>
              <span>Days</span>
            </div>
            <div className="text-dark fs-2 me-4">
              <div>00</div>
              <span>Hours</span>
            </div>
            <div className="text-dark fs-2 me-4">
              <div>00</div>
              <span>Mins</span>
            </div>
            <div className="text-dark fs-2 me-0">
              <div>00</div>
              <span>Secs</span>
            </div>
          </div>
          <a
            className="btn btn-primary btn-primary-outline-0 py-3 px-5"
            href="#"
          >
            Book Your Attendance
          </a>
        </div>
        <div
          className="position-absolute"
          style={{
            top: "15%",
            right: "-30px",
            transform: "rotate(320deg)",
            opacity: "0.5",
            zIndex: 1
          }}
        >
          <img src="img/attendance-bg.png" className="img-fluid" alt="" />
        </div>
        <div
          className="position-absolute"
          style={{
            top: "15%",
            left: "-10px",
            transform: "rotate(-320deg)",
            opacity: "0.5",
            zIndex: 1
          }}
        >
          <img src="img/attendance-bg.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  </div>
        </>
    )
}