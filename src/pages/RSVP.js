export default function RSVP(){
    return(
        <>
        <div className="container-fluid RSVP-form py-5" id="weddingRsvp">
    <div className="container py-5">
      <div
        className="mb-5 text-center mx-auto wow fadeIn"
        data-wow-delay="0.1s"
        style={{ maxWidth: 800 }}
      >
        <h1 className="display-2 text-primary">RSVP Form</h1>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div
            className="p-5 border-secondary position-relative"
            style={{ borderStyle: "double" }}
          >
            <div
              className="fw-bold text-primary bg-white d-flex align-items-center justify-content-center position-absolute border-secondary p-2 wow fadeIn"
              data-wow-delay="0.1s"
              style={{
                width: "75%",
                borderStyle: "double",
                top: 0,
                left: "50%",
                transform: "translate(-50%, -50%)"
              }}
            >
              Kindly respond by June 25, 2024 we look forward to celebrating
              with you!
            </div>
            <form>
              <div className="row gx-4 gy-3">
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="form-group">
                    <label
                      htmlFor="Examplename"
                      className="form-label text-dark"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-control py-3 border-0"
                      id="Examplename"
                      placeholder="First Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="form-group">
                    <label
                      htmlFor="Examplename"
                      className="form-label text-dark"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control py-3 border-0"
                      id="Examplename"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="form-group">
                    <label
                      htmlFor="Examplename"
                      className="form-label text-dark"
                    >
                      Enter Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control py-3 border-0"
                      id="Examplename"
                      placeholder="Enter Your Email"
                    />
                  </div>
                </div>
                <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                  <div className="form-group">
                    <label
                      htmlFor="Examplename"
                      className="form-label text-dark"
                    >
                      Enter Your Phone
                    </label>
                    <input
                      type="text"
                      className="form-control py-3 border-0"
                      id="Examplename"
                      placeholder="Enter Your Phone"
                    />
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="form-group">
                    <label
                      htmlFor="exampleselect"
                      className="form-label text-dark"
                    >
                      Number Of Guests
                    </label>
                    <select
                      className="form-control bg-white text-dark py-3 border-0"
                      id="exampleselect"
                      placeholder="Number Of Guests"
                    >
                      <option>Only Me</option>
                      <option>02 Guests</option>
                      <option>03 Guests</option>
                      <option>04 Guests</option>
                    </select>
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="form-group">
                    <label
                      htmlFor="exampletextarea"
                      className="form-label text-dark"
                    >
                      Message
                    </label>
                    <textarea
                      name="text"
                      className="form-control border-0"
                      id="exampletextarea"
                      cols={30}
                      rows={5}
                      placeholder="Message"
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                  <div className="text-center border border-secondary p-4 my-4 position-relative">
                    <div
                      className="fw-bold text-primary bg-white d-flex align-items-center justify-content-center position-absolute border-secondary p-2"
                      style={{
                        width: "50%",
                        borderStyle: "double",
                        top: 0,
                        left: "50%",
                        transform: "translate(-50%, -50%)"
                      }}
                    >
                      Will you be attending?
                    </div>
                    <div className="mt-4">
                      <div className="row g-4">
                        <div className="col-lg-6">
                          <div className="d-flex justify-content-center">
                            <div className="form-check d-flex">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label text-dark"
                                htmlFor="flexRadioDefault1"
                              >
                                Accepts With Pleasure!
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="d-flex justify-content-center">
                            <div className="form-check d-flex">
                              <input
                                className="form-check-input me-2"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                              />
                              <label
                                className="form-check-label text-dark"
                                htmlFor="flexRadioDefault1"
                              >
                                Declines With Regret
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="col-12 text-center wow fadeIn"
                  data-wow-delay="0.1s"
                >
                  <button className="btn btn-primary btn-primary-outline-0 py-3 px-5">
                    Submit Now
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <div className="row g-5 justify-content-center text-center">
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.1s">
            <div
              className="p-4 border-secondary"
              style={{ borderStyle: "double" }}
            >
              <h4>Call Us Now</h4>
              <a href="#" className="text-dark">
                +123 456 7890
              </a>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.3s">
            <div
              className="p-4 border-secondary"
              style={{ borderStyle: "double" }}
            >
              <h4>When</h4>
              <p className="mb-0 text-dark">
                28. June 2024. at 7 o’clock in the evening
              </p>
            </div>
          </div>
          <div className="col-md-4 wow fadeIn" data-wow-delay="0.5s">
            <div
              className="p-4 border-secondary"
              style={{ borderStyle: "double" }}
            >
              <h4>Where</h4>
              <p className="mb-0 text-dark">
                Niloy Hotel, 123 ranking Street, New York.
              </p>
            </div>
          </div>
          <div className="col-12 wow fadeIn" data-wow-delay="0.2s">
            <div className="border-secondary" style={{ borderStyle: "double" }}>
              <iframe
                className="w-100"
                style={{ height: 450, marginBottom: "-6px" }}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.2138153455544!2d90.36825187459118!3d23.739753578677703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf359b74ba23%3A0x256215d92c0c66d9!2sBhuiyan%20IT%20Ltd!5e0!3m2!1sen!2sbd!4v1707631317293!5m2!1sen!2sbd"
                loading="lazy"
                
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
        </>
    )
}