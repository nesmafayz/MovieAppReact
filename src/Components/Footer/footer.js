import React, { Fragment } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <Fragment>
      <div className="container-fluid">
        <footer className="text-center text-lg-start text-white" style={{ backgroundColor: "#72b043" }}>
          <div className="container p-4 pb-0">
            <section>
              <div className="row">
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Company name</h6>
                  <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
                  <p>
                    <a  className="text-white">MDBootstrap</a>
                  </p>
                  <p>
                    <a className="text-white">MDWordPress</a>
                  </p>
                  <p>
                    <a className="text-white">BrandFlow</a>
                  </p>
                  <p>
                    <a className="text-white">Bootstrap Angular</a>
                  </p>
                </div>
                <hr className="w-100 clearfix d-md-none" />
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                  <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                  <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                  <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                </div>
                <div className="col-md-4 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold">Follow us</h6>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#dd4b39" }} href="#!"><i className="fab fa-google"></i></a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#0082ca" }} href="#!"><i className="fab fa-linkedin-in"></i></a>
                  <a className="btn btn-primary btn-floating m-1" style={{ backgroundColor: "#333333" }} href="#!"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </section>
          </div>
          <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
            © 2020 Copyright: <a className="text-white" >Portfolio.com</a>
          </div>
        </footer>
      </div>
    </Fragment>
  );
}

export default Footer;
