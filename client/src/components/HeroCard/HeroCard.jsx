import React from "react";

function HeroCard({id, name, altTag, image, description}) {
console.log(id)
    return (
        <>
            <div className="col-lg-3 mx-auto" key={id}  id={id} data-hero={name}>
                <div className="card capesCard">
                    <img
                        src={image}
                        className="card-img-top"
                        alt={altTag} />
                    <div className="card-body">
                        <h4>{name}</h4>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </>);
}


export default HeroCard;
