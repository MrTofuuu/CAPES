import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink as HLink } from "react-router-hash-link";
import { useQuery } from "@apollo/client";
// TODO: Delete eventually


// Here we import service images to reduce potential path issues
import service1 from "../assets/img/Features-Fire.jpg";
import service2 from "../assets/img/Features-Crime.jpg";
import service3 from "../assets/img/Features-WorldEnder.jpg";
import service4 from "../assets/img/Features-MuchMore.jpg";

// Here we import hero images to reduce potential path issues
import hero1 from "../assets/img/heroes/Antman.jpg";
import hero2 from "../assets/img/heroes/BlackPanther.jpg";
import hero3 from "../assets/img/heroes/BlackWidow.jpg";
import hero4 from "../assets/img/heroes/CaptainAmerica.jpg";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";
import { DropdownButton } from "react-bootstrap";
// This area pertains to graphql


const Home = () => {
  // START: FORM VALIDATIONS
  // Create state variables for the fields in the form
  const [severity, setSeverity] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [name, setName] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const sevList = [
    { sev: '1 (i.e. Cat in tree, Home Maintenance)' },
    { sev: '2 (i.e. Bullying, Robbery)' },
    { sev: '3 (i.e. Natural Disaster)' },
    { sev: '4 (i.e. Attack of Super Villans)' },
    { sev: '5 (i.e. World-Ender, Thanos is back)' }
  ];

  let toggleState = true;
  let toggleStateDisplay;
  let toggleStateDisplay2;

  if (toggleState) {
    toggleStateDisplay = "block";
    toggleStateDisplay2 = "none";
  } else {
    toggleStateDisplay = "none";
    toggleStateDisplay2 = "block";
  };


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputValue) {
      setSeverity(inputValue)
    } else if (inputType === "description") {
      setDescription(inputValue);
    } else if (inputType === "name") {
      setName(inputValue);
    }
    else if (inputType === "zipcode") {
      setZipcode(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error description to be displayed on the page.
    if (!validateEmail(email) || !description || !name) {
      setErrorMessage("Email invalid or description/name is empty");
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setSeverity("");
    setDescription("");
    setName("");
    setEmail("");
    setZipcode("");
    toggleState = !toggleState;
  };
  // END: FORM VALIDATIONS

  // Create object containing all hero details to run in a loop
  let resultObjects = [
    {
      resultImage: "../assets/heroes/Antman.jpg",
      resultAltTag: "INFO",
      resultValue: "heroID",
      resultName: "Hero Name"
    },
    {
      resultImage: "../assets/heroes/ScarletWitch.jpg",
      resultAltTag: "INFO",
      resultValue: "heroID",
      resultName: "Hero Name"
    },
    {
      resultImage: "../assets/heroes/Thor.jpg",
      resultAltTag: "INFO",
      resultValue: "heroID",
      resultName: "Hero Name"
    },
    {
      resultImage: "../assets/heroes/Vision.jpg",
      resultAltTag: "INFO",
      resultValue: "heroID",
      resultName: "Hero Name"
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
          <HLink to="/#report-emergency">
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
        {/* REPORT YOUR EMERGENCY FORM*/}
        <div
          style={{ display: toggleStateDisplay }}
          id="report-emergency"
          className="px-4 py-5 my-5 redBackground text-white"
        >
          <h1 className="display-5 fw-bold">Report Your Emergency</h1>
          {/* start: row */}
          <div className="row">
            {/* FORM*/}
            <div>
              <form className="form">
                {/* EMERGENCY LEVEL */}
                <label className="form-label">Emergency Level</label>
                <div className="dropdown mb-3">
                  <button
                    className="btn btn-light dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                    value={severity}
                  >
                    Select Emergency Level
                  </button>


                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    {sevList.map(item => (
                      <li key={item.sev}>{item.sev}</li>
                    ))}
                  </ul>
                </div>

                {/* NAME */}
                <div className="mb-3">
                  <label className="form-label">Your Full Name</label>
                  <input
                    value={name}
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Your First and Last Name"
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
                {/* ZIPCODE */}
                <div className="mb-3">
                  <label className="form-label">Zipcode</label>
                  <input
                    value={zipcode}
                    name="zipcode"
                    type="text"
                    className="form-control"
                    placeholder="Zipcode of your emergency"
                    onChange={handleInputChange}
                  />
                </div>
                {/* MESSAGE */}
                <div className="mb-3">
                  <label className="form-label">
                    Describe What's Happening
                  </label>
                  <textarea
                    value={description}
                    name="description"
                    type="text"
                    className="form-control"
                    placeholder="Leave me a message"
                    onChange={handleInputChange}
                    rows="3"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleFormSubmit}
                  className="btn capes-btn btn-light mb-3"
                >
                  Submit
                </button>
              </form>
              {errorMessage && (
                <div>
                  <p className="error-text text-white">{errorMessage}</p>
                </div>
              )}
            </div>
          </div>
          {/* end: row */}
        </div>
        {/* end: report your emergency form */}
      </>

      <>
        {/* RESULTS FORM*/}
        <div
          style={{ display: toggleStateDisplay2 }}
          id="results-component"
          className="px-4 py-5 my-5 blueBackground text-white"
        >
          <h1 className="display-5 fw-bold">Results</h1>
          <p>Based on your description, we recommend the following C.A.P.E.S. hero to suit your emergency. Make your selection, and summon your preferred hero.</p>
          {/* start: row */}
          <div className="row">
            {/* FORM*/}
            <div>
              <form>
                {/* IMAGES AND HERO DETAILS */}
                <div className="row">
                  {resultObjects.map((card) => (
                    <div className="col-lg-3">
                      <img src={card.resultImage} className="card-img-top mb-3" alt={card.resultAltTag} />
                      <div className="form-check mb-3">
                        <input className="form-check-input" type="checkbox" value={card.resultValue} id={card.resultValue} />
                        <label htmlFor={card.resultValue}>
                          {card.resultName}
                        </label>
                      </div>
                    </div>
                  ))}
                </div>
                {/* CALL-TO-ACTION BUTTONS */}
                <div className="row">
                  <div className="col-lg-3">
                    <button type="button" className="btn capes-btn green-btn mb-3 me-3">
                      Summon Your Hero!
                    </button>
                    <HLink to="/#report-emergency">
                      <button type="button" className="btn capes-btn btn-light mb-3">
                        Report A New Incident
                      </button>
                    </HLink>

                  </div>
                </div>

              </form>
            </div>
          </div>
          {/* end: row */}
        </div>
        {/* end: results form */}
      </>

      <>
        {/* OUR FEATURED HEROES */}
        <div className="px-4 text-center">
          <h1 className="display-5 fw-bold redText">Our Featured Heroes</h1>
          {/* start: row */}
          <div className="row">
            {/* FEATURE 1 */}
            <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={hero1} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Hero</h4>
                  <p className="card-text">
                    This is dummy text intended to fill out the card's content.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 2 */}
            <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={hero2} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Hero</h4>
                  <p className="card-text">
                    This is dummy text intended to fill out the card's content.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 3 */}
            <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={hero3} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Hero</h4>
                  <p className="card-text">
                    This is dummy text intended to fill out the card's content.
                  </p>
                </div>
              </div>
            </div>

            {/* FEATURE 4 */}
            <div className="col-lg-3 mx-auto">
              <div className="card">
                <img src={hero4} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h4>Hero</h4>
                  <p className="card-text">
                    This is dummy text intended to fill out the card's content.
                  </p>
                </div>
              </div>
            </div>
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