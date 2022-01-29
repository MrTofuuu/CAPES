import { validateEmail } from "../utils/helpers";
import { ADD_EMERGENCY } from '../utils/mutations'
import { useMutation } from '@apollo/client';
import { HashLink as HLink } from "react-router-hash-link";
import React, { useState } from "react";
import Auth from '../utils/auth';
import { parse } from "graphql";




const EmergencyForm = () => {

    const [addEmergency, { error }] = useMutation(ADD_EMERGENCY);
    const [severity, setSeverity] = useState(1);
    const [email, setEmail] = useState("");
    const [description, setDescription] = useState("");
    const [name, setName] = useState("");
    const [zipcode, setZipcode] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const [toggleOn, setToggleOn] = useState(false);
    const [results, setResults] = useState([]);
    // const sevList = [
    //   { sev: '1 (i.e. Cat in tree, Home Maintenance)' },
    //   { sev: '2 (i.e. Bullying, Robbery)' },
    //   { sev: '3 (i.e. Natural Disaster)' },
    //   { sev: '4 (i.e. Attack of Super Villans)' },
    //   { sev: '5 (i.e. World-Ender, Thanos is back)' }
    // ];

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "severity") {
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

    const handleFormSubmit = async (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();
        console.log(severity);
        console.log(zipcode);
        try {
            const { data } = await addEmergency({
                variables: {
                    severity: parseInt(severity),
                    description,
                    zipcode: parseInt(zipcode),

                    reporter: Auth.getProfile().data.username,
                },
            });
            // First we check to see if the email is not valid or if the userName is empty. If so we set an error description to be displayed on the page.
            if (!validateEmail(email) || !description || !name) {
                setErrorMessage("Email invalid or description/name is empty");
                // We want to exit out of this code block if something is wrong so that the user can correct it
                return;
                // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
            }

            // If everything goes according to plan, we want to clear out the input after a successful registration.
            setSeverity(severity);
            setDescription(description);
            setName(name);
            setEmail(email);
            setZipcode(zipcode);
            // setEmergencyText('#');
            setToggleOn(true);
            console.log(data);
            setResults(data.addEmergency.heroes);
        } catch (err) {
            console.error(err);
        }
    };

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






    // START: FORM VALIDATIONS
    // Create state variables for the fields in the form
    return (
        <>
            {/* REPORT YOUR EMERGENCY FORM*/}
            <div
                style={{ display: toggleOn ? "none" : "block" }}
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
                            <div className="mb-3">
                                <label className="form-label">Emergency Level</label>
                                <br></br>
                                <select className="form-control" name="severity" defaultValue={severity}
                                    onChange={handleInputChange}>
                                    <option value={1}>1 (i.e. Cat in tree, Home Maintenance)</option>
                                    <option value={2}>2 (i.e. Bullying, Robbery)</option>
                                    <option value={3}>3 (i.e. Natural Disaster)</option>
                                    <option value={4}>4 (i.e. Attack of Super Villans)</option>
                                    <option value={5}>5 (i.e. World-Ender, Thanos is back)</option>
                                </select>
                            </div>
                            {/* NAME */}
                            <div className="mb-3">
                                <label className="form-label">Your Full Name</label>
                                <input
                                    defaultValue={name}
                                    name="name"
                                    type="textarea"
                                    className="form-control"
                                    placeholder="Please enter your full name."
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* EMAIL */}
                            <div className="mb-3">
                                <label className="form-label">Your Email Address</label>
                                <input
                                    defaultValue={email}
                                    name="email"
                                    type="email"
                                    className="form-control"
                                    placeholder="name@example.com"
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* ZIPCODE */}
                            <div className="mb-3">
                                <label className="form-label">Zipcode:</label>
                                <input
                                    defaultValue={zipcode}
                                    name="zipcode"
                                    type="textarea"
                                    className="form-control"
                                    placeholder="12345"
                                    onChange={handleInputChange}
                                />
                            </div>
                            {/* MESSAGE */}
                            <div className="mb-3">
                                <label className="form-label">
                                    Describe What's Happening
                                </label>
                                <textarea
                                    defaultValue={description}
                                    name="description"
                                    input type="text"
                                    className="form-control"
                                    placeholder="Describe What's Happening"
                                    onChange={handleInputChange}
                                    rows="3"
                                />
                            </div>

                            <button
                                input type="submit"
                                value="submit"
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
            {/* RESULTS FORM*/}
            <div
                style={{ display: toggleOn ? "block" : "none" }}
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
                                {results.map((card) => (
                                    <div className="col-lg-3">
                                        <img src={card.image} className="card-img-top mb-3" alt={card.name} />
                                        <div className="form-check mb-3">
                                            <input className="form-check-input" type="checkbox" value={false} id={card.resultValue} />
                                            <label htmlFor={card.value}>
                                                {card.value}
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
    );
};

export default EmergencyForm;