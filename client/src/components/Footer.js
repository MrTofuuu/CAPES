import React from "react";
import { Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";
// import logoWhite from "../assets/img/logo-white.png";

function Footer() {
  return (
    <footer className="text-muted py-5 bg-dark">
      <div className="container">
        <div className="row">
          {/* COLUMN 1 */}
          <div className="col-lg-4">
            <h4 className="text-white">About this project</h4>
            <p className="mb-1">
              TODO: Replace this dummy text with a real description...
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="col-lg-4">
            <h4 className="text-white">Contributors</h4>
            <ul>
              <li><a href="https://github.com/candracodes" target="_blank" rel="noreferrer">Candra Fried</a></li>
              <li><a href="https://github.com/MrTofuuu/" target="_blank" rel="noreferrer">Chris Stallcup</a></li>
              <li><a href="https://github.com/bonniereed" target="_blank" rel="noreferrer">Bonnie Reed</a></li>
              <li><a href="https://github.com/konnerhartman" target="_blank" rel="noreferrer">Konner Hartman</a></li>
              <li><a href="https://github.com/mistwhit" target="_blank" rel="noreferrer">Misty Whitenton</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="col-lg-4">
            <h4 className="text-white">Plans for future development</h4>
            <p className="mb-0">
            <HLink to="/#navbar">
              <button className="btn btn-light capes-btn btn-lg" type="button">
                Back to top
              </button>
            </HLink>
          </p>
          </div>

          
        </div>
        {/* end: row */}
        
      </div>
      {/* end: container */}
    </footer>
  );
}

export default Footer;
