import React from "react";
import HeroCard from '../HeroCard/HeroCard';

function HeroList({heroes}) {

    return (
        <div className="px-4 text-center">
        <h1 className="display-5 fw-bold redText">Our Featured Heroes</h1>
        {/* start: row */}
        <div className="row">
          {/* FIXME: this needs to use the data from the query, but loading seems to blow it up */}
          {/* {featuredHeroes.map((card, index) => (
            <HeroCard
              key={index}
              name={card.heroName}
              altTag={card.altTag}
              image={card.heroImage}
              description={card.heroDescription}

            />


          ))} */}


          {heroes.map((hero, index) => (
            <HeroCard 
              key={hero._id}
              id={hero._id}
              name={hero.name}

              image={hero.image}
              description={hero.description}

            />
          

          ))}
         

        </div>
        {/* end: row */}
      </div>
        );
}


export default HeroList;
