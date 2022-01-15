// TODO: Replace dummy text with Hero names and descriptions
// TODO: Adjust height and proportion of avengers jumbtotron
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";

// Here we import hero images to reduce potential path issues
// import hero1 from "../assets/img/heroes/Antman.jpg";
import hero2 from "../assets/img/heroes/BlackPanther.jpg";
import hero3 from "../assets/img/heroes/BlackWidow.jpg";
import hero4 from "../assets/img/heroes/CaptainAmerica.jpg";

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
      heroImage: "../assets/heroes/BlackPanther.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/BlackWidow.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/CaptainAmerica.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/CaptainMarvel.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/Falcon.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/Hawkeye.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/Hulk.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/Ironman.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/Joe.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/QuickSilver.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/ScarletWitch.jpg",
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
    {
      heroImage: "../assets/heroes/Vision.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
    },
    {
      heroImage: "../assets/heroes/Wasp.jpg",
      altTag: "INFO",
      heroName: "Hero",
      heroDescription: "Description",
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
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
