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
            You’re what some would call a “regular person.” You don’t have super powers, and you need a hand. Maybe your cat is stuck in a tree. Perhaps you’ve got a clogged toilet… or worse… THANOS HAS APPEARED ON YOUR PLANET AND IS EXECUTING A PLAN TO DESTROY YOUR WORLD. If this is you… then you need CAPES. Capes is an app used to summon the superhero (or superheroes) of your choosing. Login (or register), describe your emergency, and select the superheroes best suited for your needs.
            </p>
          </div>

          {/* COLUMN 2 */}
          <div className="col-lg-4">
            <h4 className="text-white">Contributors</h4>
            <ul>
              <li><a className="grayLink" href="https://github.com/candracodes" target="_blank" rel="noreferrer">Candra Fried</a></li>
              <li><a className="grayLink" href="https://github.com/MrTofuuu/" target="_blank" rel="noreferrer">Chris Stallcup</a></li>
              <li><a className="grayLink" href="https://github.com/bonniereed" target="_blank" rel="noreferrer">Bonnie Reed</a></li>
              <li><a className="grayLink" href="https://github.com/konnerhartman" target="_blank" rel="noreferrer">Konner Hartman</a></li>
              <li><a className="grayLink" href="https://github.com/mistwhit" target="_blank" rel="noreferrer">Misty Whitenton</a></li>
            </ul>
          </div>

          {/* COLUMN 3 */}
          <div className="col-lg-4">
            <h4 className="text-white">Plans for future development</h4>
            <p className="mb-0">
              <ul className="my-3 mb-3">
                <li>Implement stripe "donation" logic</li>
              </ul>
              <button className="btn green-btn capes-btn btn-lg" type="button">
                Donate To Restoration Fund
              </button>
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
