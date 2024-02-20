export default function Hello(){
    return(
        <>
        <div className="container-fluid position-relative py-5" id="weddingAbout">
    <div className="position-absolute" style={{ top: "-35px", right: 0 }}>
      <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
    </div>
    <div
      className="position-absolute"
      style={{ top: "-10px", left: 0, transform: "rotate(150deg)" }}
    >
      <img src="img/tamp-bg-1.png" className="img-fluid" alt="" />
    </div>
    <div className="container position-relative py-5">
      <div
        className="mx-auto text-center mb-5 wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: "800px" }}
      >
        <h1 className="text-primary display-1">Hello!</h1>
        <h4 className="text-dark mb-0">
          We invite you to celebrate our wedding
        </h4>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="row g-4 align-items-center">
            <div className="col-md-5 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex">
                <div className="text-end my-auto pe-4">
                  <h3 className="text-primary mb-3">Evelyn</h3>
                  <p className="text-dark mb-0" style={{ lineHeight: '30px' }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
                <img
                  src="img/bride.jpg"
                  className="img-fluid "
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-2 wow fadeIn" data-wow-delay="0.5s">
              <div className="d-flex align-items-center justify-content-center">
                <i className="fa fa-heart fa-5x text-primary" />
              </div>
            </div>
            <div className="col-md-5 wow fadeInUp" data-wow-delay="0.3s">
              <div className="d-flex">
                <img
                  src="img/Groom.jpg"
                  className="img-fluid "
                  alt=""
                />
                <div className="my-auto ps-4">
                  <h3 className="text-primary mb-3">Anthony</h3>
                  <p className="text-dark mb-0" style={{ lineHeight: "30px" }}>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}