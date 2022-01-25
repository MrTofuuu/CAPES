import React from "react";
import logoWhite from "../assets/img/logo-white.png";

function Header() {
  return (
    <nav id="navbar" className="navbar navbar-expand-md navbar-dark fixed-top bg-dark capes-nav">
      <div className="container-fluid">
        <a className="navbar-brand ms-3" href="/"><img className="logoWhite" src={logoWhite} alt="CAPES logo feature a white and gold shield and red cape" />
          &nbsp; Civilians And Planetary Emergency Services</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"
          aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
          <form className="me-4">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              {/* <!-- MY PROFILE --> */}
              <li className="nav-item capesNavLink">
                <a className="nav-link" href="/myprofile"><i className="fas fa-user-circle"></i> My Profile</a>
              </li>
              {/* <!-- OUR HEROS --> */}
              <li className="nav-item capesNavLink">
                <a className="nav-link" href="/ourheroes"><i className="fas fa-user-circle"></i> Our Heroes</a>
              </li>
              {/* <!-- LOGIN --> */}
              <li className="nav-item capesNavLink">
                <a className="nav-link" href="/login" id="login">Login</a>
              </li>
              <li className="nav-item capesNavLink">
                <a className="nav-link" href="/signup" id="login">Sign Up</a>
              </li>
              {/* <!-- CALL 9111 --> */}
              <li className="nav-item call911">
                <a className="nav-link" href="https://www.911.gov/" target="_blank" rel="noreferrer"><i className="fas fa-user-circle"></i> Call 911</a>
              </li>

            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Header;
