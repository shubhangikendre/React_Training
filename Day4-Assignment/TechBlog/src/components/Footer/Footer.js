import React from "react";

const Footer = () => {
  return (
    <footer
      className="text-center text-lg-start text-white"
      style={{ backgroundColor: "#1c2331" }}
    >
      <section
        className="d-flex justify-content-between p-4"
        style={{ backgroundColor: "#ff6347" }}
      >
        <div className="me-5">
          <span>View Our Portfolio</span>
        </div>

        <div>
          <a href="" className="text-white me-4">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-google"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="" className="text-white me-4">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      <section className="">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Dubai</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#ff6347",
                  height: "2px",
                }}
              />
              <p>
              Al Maktab Building, Barsha
PO Box 211156, Dubai, UAE
              </p>
            </div>


            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold">Abu Dhabi</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#ff6347",
                  height: "2px",
                }}
              />
              <p>
              Al Mamoura Building, Muroor Road, Abu Dhabi, UAE
              </p>
            </div>


            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold">Get in Touch</h6>
              <hr
                className="mb-4 mt-0 d-inline-block mx-auto"
                style={{
                  width: "60px",
                  backgroundColor: "#ff6347",
                  height: "2px",
                }}
              />
              <p>
                <i className="fas fa-envelope mr-3"></i>  sales@grafdom.com
              </p>
              <p>
                <i className="fas fa-phone mr-3"></i> +9714 3453033
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "#ff6347" }}
      >
        © Grafdom, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
