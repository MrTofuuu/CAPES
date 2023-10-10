import React from "react";

function HeroCard(props) {

    return (
        <>
            <div className="col-lg-3 mx-auto" key={card.heroName}>
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
        </>);
}


export default HeroCard;
