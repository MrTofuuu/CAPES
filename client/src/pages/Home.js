import React, { useState } from "react";

import { HashLink as HLink } from "react-router-hash-link";

// TODO: Delete eventually

// Here we import service images to reduce potential path issues
import service1 from "../assets/img/Features-Fire.jpg";
import service2 from "../assets/img/Features-Crime.jpg";
import service3 from "../assets/img/Features-WorldEnder.jpg";
import service4 from "../assets/img/Features-MuchMore.jpg";

// Here we import hero images to reduce potential path issues
// import hero1 from "../assets/img/heroes/Antman.jpg";
// import hero2 from "../assets/img/heroes/BlackPanther.jpg";
// import hero3 from "../assets/img/heroes/BlackWidow.jpg";
// import hero4 from "../assets/img/heroes/CaptainAmerica.jpg";

// Here we import a helper function that will check if the email is validation

const Home = () => {

  let featuredHeroes = [
    {
      heroImage: "../assets/heroes/BlackPanther.jpg",
      altTag: "INFO",
      heroName: "Black Panther",
      heroDescription: "Enhanced senses, superhuman condition, speed, martial artist, magical resistance, Vibranium-assisted outfit.",
    },
    {
      heroImage: "../assets/heroes/drManhattan.jpg",
      altTag: "INFO",
      heroName: "Dr. Manhattan",
      heroDescription: "Time travel, disintegration, replication, colossal growth, teleportation, space travel.",
    },
    {
      heroImage: "../assets/heroes/BlackWidow.jpg",
      altTag: "INFO",
      heroName: "Black Widow",
      heroDescription: "Master spy & assassin, martial artist, armed combatant; skills in espionage, infiltration, disguise and deception, manipulation & hacking.",
    },
    {
      heroImage: "../assets/heroes/CandrasDad.png",
      altTag: "INFO",
      heroName: "Candra's Dad",
      heroDescription: "Always knows a guy who knows a guy, and is a never-ending supply of sarcasm and famous Desoto, TX BBQ.",
    }
  ];

  return (
    <>
      {/* JUMBOTRON IMAGE */}
      <div className="p-5 mb-4 bg-light rounded-3 bg-dark text-white capesJumbotron">
        <div className="container-fluid py-5 mt-100">
          <h1 className="display-5 fw-bold mt-50">
            Tell us about your emergency.
          </h1>
          <HLink to="/emergency">
            <button
              className="btn capes-btn capes-btn-danger btn-lg"
              type="button"
            >
              Get Started
            </button>
          </HLink>
        </div>
      </div>
      <>
        {/* OUR SERVICES HERO */}
        <div className="px-4 text-center">
          <h1 className="display-5 fw-bold redText">Our Services</h1>
          {/* start: row */}
          <div className="row">
            {/* FEATURE 1: FIRE AND NATURAL DISASTER */}
            <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={service1} className="card-img-top" alt="..." />
                <div className="card-body service-card-body">
                  <h4>Fire &amp; Natural Disaster</h4>
                  <p className="card-text">
                    Emergency preparedness for natural disasters can be difficult to plan for. Our heroes come prepared to put out fires, and even restore damage from events such as hurricanes and tornadoes.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 2: FIGHTING CRIME */}
            <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={service2} className="card-img-top" alt="..." />
                <div className="card-body service-card-body">
                  <h4>Fighting Crime</h4>
                  <p className="card-text">
                    C.A.P.E.S. works closely with local police in conjunction with our roster of heroes to respond to crimes of all level.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 3: WORLD-ENDERS */}
            <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={service3} className="card-img-top" alt="..." />
                <div className="card-body service-card-body">
                  <h4>World-Enders</h4>
                  <p className="card-text">
                    The world witnessed as Thanos attempted to destroy half of all living beings. C.A.P.E.S. is commited to responding to all tips in an effort to prevent future atrocities.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 4: MUCH MORE */}
            <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={service4} className="card-img-top" alt="..." />
                <div className="card-body service-card-body">
                  <h4>Much More</h4>
                  <p className="card-text">
                    Have a pesky leak but you're not a plumber? Has your cat crawled into a tree and you've got no ladder? C.A.P.E.S. is here to address your concerns, no matter how big or small.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end: row */}
        </div>
        {/* end: our services */}
      </>

      <>
        {/* OUR FEATURED HEROES */}
        <div className="px-4 text-center">
          <h1 className="display-5 fw-bold redText">Our Featured Heroes</h1>
          {/* start: row */}
          <div className="row">

          {featuredHeroes.map((card) => (
            <>
              <div className="col-lg-3 mx-auto">
                <div className="card capesCard">
                  <img
                    src={card.heroImage}
                    className="card-img-top"
                    alt={card.altTag} />
                  <div className="card-body">
                    <h4>{card.heroName}</h4>
                    <p className="card-text">{card.heroDescription}</p>
                  </div>
                </div>
              </div>
              </>
          ))}

            {/* FEATURE 1 */}
            {/* <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={hero1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Hero</h4>
                  <p className="card-text">
                    This is dummy text intended to fill out the card's content.
                  </p>
                </div>
              </div>
            </div> */}

            {/* FEATURE 2 */}
            {/* <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={hero2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Hero</h4>
                  <p className="card-text">
                    This is dummy text intended to fill out the card's content.
                  </p>
                </div>
              </div>
            </div> */}

            {/* FEATURE 3 */}
            {/* <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={hero3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Hero</h4>
                  <p className="card-text">
                    This is dummy text intended to fill out the card's content.
                  </p>
                </div>
              </div>
            </div> */}

            {/* FEATURE 4 */}
            {/* <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={hero4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Hero</h4>
                  <p className="card-text">
                    This is dummy text intended to fill out the card's content.
                  </p>
                </div>
              </div>
            </div> */}

          </div>
          {/* end: row */}
        </div>
        {/* end: our services */}
      </>
      <br />
    </>
  );
};

export default Home;