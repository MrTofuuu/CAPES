// TODO: Replace dummy text with Hero names and descriptions
// TODO: Adjust height and proportion of avengers jumbtotron
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";

const Ourheroes = () => {

  // Create object containing all hero details to run in a loop
  let heroObjects = [
    {
      heroImage: "../assets/heroes/Antman.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/Thor.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
  ];


  return (
    <><>
      {/* JUMBOTRON IMAGE */}
      <div className="mb-4 bg-light rounded-3">
        <div className="container-fluid py-5 mt-100">
          <h1 className="display-5 fw-bold">
            Welcome Back, <span className="userName"> FirstName</span>
          </h1>
        </div>
      </div>

      {/* PREVIOUSLY SUMMONED HEROES */}
      <div className="px-4 py-5 my-5">
        <h2 className="redText mb-4">Previously Summoned Heroes</h2>
          {heroObjects.map((card) => (
              <>
              <div className="row summonsRow">
                <div className="col-lg-4">
                <img src={card.heroImage} className="card-img-top" alt={card.altTag} />
                </div>
                <div className="col-lg-8">
                  <h4>{card.heroName}</h4>
                  <p>{card.heroDescription}</p>
                  <p className="blueText"><bold>Rate Your Experience</bold></p>
                </div>
              </div>
              </>
          ))}
        
      </div>
      {/* end: previously summoned heroes */}
    </></>
  );
  // end: return
};

export default Ourheroes;
