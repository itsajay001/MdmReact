import React from 'react';

function Logomdm() {
  return (
    <div>
      <div className="container-fluid bg-light py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center">
            <img
              src="./1mdm-168x58.png"
              alt="1MDM Logo"
              className="img-fluid"
              style={{ height: "40px" }}
            />
          </div>
          <div className="nav-links">
            <a href="#" className="me-4 text-muted">
              About Us
            </a>
            <a href="#" className="me-3 text-muted">
              Our Story
            </a>
            <a href="#" className="me-3 text-muted">
              Sell on 1MDM
            </a>
            <a href="#" className="me-3 text-muted">
              Pricing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logomdm;
