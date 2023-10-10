// TODO: Replace dummy text with Hero names and descriptions from seed data
import Auth from '../utils/auth';
import React, { useState } from "react";
// IMPORT RATING SYSTEM COMPONENT
import Rating from '../components/Rating/Rating';

// Require the Rating Component
// let StarRating = require('react-rating'); 


const Ourheroes = () => {

  // Create object containing all hero details to run in a loop
  let heroObjects = [
    {
      heroImage: "../assets/heroes/BonniesDad.png",
      altTag: "Bonnie's Dad",
      heroName: "Bonnie's Dad",
      heroDescription: "Super-human ability to predict the weather before it strikes.",
    },
    {
      heroImage: "../assets/heroes/ChrisDad.png",
      altTag: "Chris's Dad",
      heroName: " Chris's Dad",
      heroDescription: "Can out-drink everyone around him, and if you get him drunk enough, he'll jump a fence just to prove he can do it."
    },
    {
      heroImage: "../assets/heroes/CandrasDad.png",
      altTag: "Candra's Dad",
      heroName: "Candra's Dad",
      heroDescription: "Always knows a guy who knows a guy, and is a never-ending supply of sarcasm and famous Desoto, TX BBQ."
    },
    {
      heroImage: "../assets/heroes/MistysDad.png",
      altTag: "Misty's Dad",
      heroName: "Misty's Dad",
      heroDescription: "Ultimate gardener; can fix up your fickle fiddle-leaf fig or get your begonias back to blooming in no time."
    },
    {
      heroImage: "../assets/heroes/KonnersDad.jpg",
      altTag: "Konner's Dad",
      heroName: "Konner's Dad",
      heroDescription: "The neighborhood's favorite handy-man, can hold his alcohol like he can hold his screws...and he NEVER drops a screw."
    },
    {
      heroImage: "../assets/heroes/CaptainMarvel.jpg",
      altTag: "Captian Marvel",
      heroName: "Captian Marvel",
      heroDescription: "Strength, speed, stamina, resistant to most toxins, energy absorption and manipulation."
    },
    {
      heroImage: "../assets/heroes/Thor_2.png",
      altTag: "Thor",
      heroName: "Thor",
      heroDescription: "Strength, speed, stamina, durability, weather manipulation, flight (via Mjolnir), dense skin and bones with a resistance to injury."
    }
  ];

  return (
    <><>
      {/* PREVIOUSLY SUMMONED HEROES */}
      <div className="px-4">
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
                <Rating />
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
