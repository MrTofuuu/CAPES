// TODO: Adjust height and proportion of avengers jumbtotron
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Ourheroes = () => {

  // Create object containing all hero details to run in a loop
  let heroObjects = [
    {
      heroImage: "../assets/heroes/Antman.jpg",
      altTag: "INFO",
      heroName: "Ant-Man",
      heroDescription: "Genius-level intellect, size-changing via Pym Particles, telepathic communication with insects, dimension-hopping.",
    },
    {
      heroImage: "../assets/heroes/BlackPanther.jpg",
      altTag: "INFO",
      heroName: "Black Panther",
      heroDescription: "Enhanced senses, superhuman condition, speed, martial artist, magical resistance, Vibranium-assisted outfit.",
    },
    {
      heroImage: "../assets/heroes/BlackWidow.jpg",
      altTag: "INFO",
      heroName: "Black Widow",
      heroDescription: "Master spy & assassin, martial artist, armed combatant; skills in espionage, infiltration, disguise and deception, manipulation & hacking.",
    },
    {
      heroImage: "../assets/heroes/CaptainAmerica.jpg",
      altTag: "INFO",
      heroName: "Captain America",
      heroDescription: "Strength, agility, stamina, healing ability, expert tactician, martial artist, indestructible shield.",
    },
    {
      heroImage: "../assets/heroes/CaptainMarvel.jpg",
      altTag: "INFO",
      heroName: "Captain Marvel",
      heroDescription: "Strength, speed, stamina, resistant to most toxins, energy absorption and manipulation.",
    },
    {
      heroImage: "../assets/heroes/Falcon.jpg",
      altTag: "INFO",
      heroName: "Falcon",
      heroDescription: "Supersonic flight speed, enhanced maneuverability and agility, force generation, extreme vision, pilot, combatant, marksman and tactician. Communication with birds.",
    },
    {
      heroImage: "../assets/heroes/Hawkeye.jpg",
      altTag: "INFO",
      heroName: "Hawkeye",
      heroDescription: "Marksmanship, assassin, marital artist, knife & sword master and expert pilot.",
    },
    {
      heroImage: "../assets/heroes/Hulk.jpg",
      altTag: "INFO",
      heroName: "Hulk",
      heroDescription: "Strength, speed, stamina, durability, regeneration, nigh invulnerability, breathing underwater.",
    },
    {
      heroImage: "../assets/heroes/Ironman.jpg",
      altTag: "INFO",
      heroName: "Iron Man",
      heroDescription: "Genius-level intellect, multiple powered armor suits, ability to fly.",
    },
    {
      heroImage: "../assets/heroes/Joe.jpg",
      altTag: "INFO",
      heroName: "Joe The Plumber",
      heroDescription: "Cleaning sewer lines, welding, soldering, appliance installation and maintenance, flexibility, dexterity",
    },
    {
      heroImage: "../assets/heroes/QuickSilver.jpg",
      altTag: "INFO",
      heroName: "Quicksilver",
      heroDescription: "Superhuman speed, extreme force generation, excellent combatant, ability to alter time and think at superhuman speeds.",
    },
    {
      heroImage: "../assets/heroes/ScarletWitch.jpg",
      altTag: "INFO",
      heroName: "Scarlet Witch",
      heroDescription: "Telekinesis, telepathy, teleportation, flight, reality, time, fire, weather and energy manipulation.",
    },
    {
      heroImage: "../assets/heroes/Thor.jpg",
      altTag: "INFO",
      heroName: "Thor",
      heroDescription: "Strength, speed, stamina, durability, weather manipulation, flight (via Mjolnir), dense skin and bones with a resistance to injury.",
    },
    {
      heroImage: "../assets/heroes/Vision.jpg",
      altTag: "INFO",
      heroName: "Vision",
      heroDescription: "Superhuman strength & durability; density manipulation, flight, energy blasts, synthetic material generation, mental & computer interaction, genius-level intellect & master combatant.",
    },
    {
      heroImage: "../assets/heroes/Wasp.jpg",
      altTag: "INFO",
      heroName: "Wasp",
      heroDescription: "Superhuman strength & durability, speed, size-changing via Pym Particles, flight, bioelectric stinging",
    },
  ];

  // Create state variables for the fields in the hero submission form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alias, setAlias] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  // Handle input for form fields
  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of the following ...
    if (inputType === "firstName") {
      setFirstName(inputValue);
    }
    else if (inputType === "lastName") {
      setLastName(inputValue);
    }
    else if (inputType === "alias") {
      setAlias(inputValue);
    }
    else if (inputType === "phone") {
      setPhone(inputValue);
    }
    else if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "description") {
      setDescription(inputValue);
    } 
  };

  // Handle form onSubmit action
  const handleFormSubmit = (e) => {
    // TODO: Display success message after submission, and close modal
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // Check to see if first or last name is empty
    if (!firstName || !lastName) {
      setErrorMessage("Please Enter Your Name");
      return;
    }
    // Check to see if alias is empty
    if (!alias) {
      setErrorMessage("Please Enter Your Super Hero Alias");
      return;
    }
    if (!email) {
      setErrorMessage("Please Enter Your Email");
      return;
    }
    if (!description) {
      setErrorMessage("Please tell us about your super hero abilities");
      return;
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setFirstName("");
    setLastName("");
    setAlias("");
    setPhone("");
    setEmail("");
    setDescription("");
  };

  return (
    <><>
      {/* JUMBOTRON IMAGE */}
      <div className="p-5 mb-4 bg-light rounded-3 bg-dark text-white heroesJumbotron">
        <div className="container-fluid py-5 mt-100">
          <h1 className="display-5 fw-bold mt-50">
            Meet Our Team of Elite Heroes
          </h1>
          <p>
            Our heroes have a wide range of abilities, from super powers to elite plumbing skills. With C.A.P.E.S on your side, you'll always find someone for the job. 
          </p>
          <Link to="#">
            <button
              className="btn capes-btn capes-btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#exampleModal"
              type="button"
            >
              REGISTER TO BE A HERO
            </button>
          </Link>
        </div>
      </div>

      {/* ALL C.A.P.E.S. HEROES */}
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold redText">All C.A.P.E.S. Heroes</h1>
        {/* start: row */}
        <div className="row">
          {/* ALL HEROES OBJECT LOOP */}
          {heroObjects.map((card) => (
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

        </div>
        {/* end: row */}
      </div>
      {/* end: all capes heroes */}
    </><>
        {/* start: modal */}
        <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* TITLE */}
                <h5 className="modal-title" id="exampleModalLabel">
                  Register to be a hero
                </h5>
                {/* CLOSE MODAL BUTTON */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              {/* MODAL BODY */}
              <div className="modal-body">
                <p className="text-muted">
                Fill out our C.A.P.E.S. Hero Application. Should you meet the qualifications, one of our staff members will call you to follow up. Thank you for volunteering to serve our planetary coalition.
                </p>
                {/* START: FORM */}
                <div>
                  <form className="form">
                    {/* FIRST NAME */}
                    <div className="mb-3">
                      <label className="form-label">First Name</label>
                      <input
                        value={firstName}
                        name="firstName"
                        type="text"
                        className="form-control"
                        placeholder="Enter Your First Name"
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* LAST NAME */}
                    <div className="mb-3">
                      <label className="form-label">Last Name</label>
                      <input
                        value={lastName}
                        name="lastName"
                        type="text"
                        className="form-control"
                        placeholder="Enter Your Last Name"
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* ALIAS */}
                    <div className="mb-3">
                      <label className="form-label">Alias</label>
                      <input
                        value={alias}
                        name="alias"
                        type="text"
                        className="form-control"
                        placeholder="i.e. Spiderman"
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* PHONE */}
                    <div className="mb-3">
                      <label className="form-label">Phone Number</label>
                      <input
                        value={phone}
                        name="phone"
                        type="text"
                        className="form-control"
                        placeholder="000-123-4567"
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* EMAIL */}
                    <div className="mb-3">
                      <label className="form-label">Your Email Address</label>
                      <input
                        value={email}
                        name="email"
                        type="email"
                        className="form-control"
                        placeholder="name@example.com"
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* DESCRIPTION */}
                    <div className="mb-3">
                      <label className="form-label">
                      Describe Your Super Abilities
                      </label>
                      <textarea
                        value={description}
                        name="description"
                        type="text"
                        className="form-control"
                        placeholder="Describe your super abilities in as much detail as possible"
                        onChange={handleInputChange}
                        rows="3"
                      />
                    </div>
                  </form>

                  {/* ERROR MESSAGE */}
                  {errorMessage && (
                    <div>
                      <p className="error-text">{errorMessage}</p>
                    </div>
                  )}
                </div>

                {/* END: FORM */}
              </div>
              {/* MODAL FOOTER */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancel
                </button>
                <button type="button" className="btn btn-primary" onClick={handleFormSubmit}>
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end: modal */}
      </></>
  );
  // end: return
};

export default Ourheroes;
