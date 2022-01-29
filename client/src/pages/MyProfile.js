// TODO: Replace dummy text with Hero names and descriptions from seed data
import Auth from '../utils/auth';
// IMPORT RATING SYSTEM COMPONENT
import Rating from '../components/Rating';

// Require the Rating Component
// let StarRating = require('react-rating'); 


const Ourheroes = () => {

  // Create object containing all hero details to run in a loop
  let heroObjects = [
    {
      heroImage: "../assets/heroes/Antman.jpg",
      altTag: "Ant Man",
      heroName: "Ant Man",
      heroDescription: "Genius-level intellect, size-changing via Pym Particles, telepathic communication with insects, dimension-hopping.",
    },
    {
      heroImage: "../assets/heroes/Thor.jpg",
      altTag: "Thor",
      heroName: "Thor",
      heroDescription: "Strength, speed, stamina, durability, weather manipulation, flight (via Mjolnir), dense skin and bones with a resistance to injury.",
    },
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
