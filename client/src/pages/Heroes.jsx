import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from '@apollo/client'
import { QUERY_HEROES } from "../utils/queries";

const Heroes = () => {

  // Create state variables for the fields in the hero submission form
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [alias, setAlias] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const [formState, setFormState] = useState({
    firstName:'',
    lastName:'',
    alias: '',
    phone:'',
    email:'',
    description:''
  })
  // Handle input for form fields
  const handleChange = (e) => {
    // FIXME: this needs to be refactored to use form state
    const { firstName, lastName, alias, phone, email, description } = e.target;
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
  
  const { loading, error, data } = useQuery(QUERY_HEROES)
    
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

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
          {data?.hero?.map((card) => (
            <>
              <div className="col-lg-3 mx-auto">
                <div className="card capesCard">
                  <img
                    src={card?.image}
                    className="card-img-top"
                    alt={card?.name} />
                  <div className="card-body">
                    <h4>{card?.name}</h4>
                    <p className="card-text">{card?.description}</p>
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
        {/* start: modal 1 */}
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
                
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                  Submit Application
                </button>
                {/* <button type="button" className="btn btn-primary" data-bs-dismiss="modal">
                  Submit Application
                </button> */}
              </div>
            </div>
          </div>
        </div>
        {/* end: modal 1 */}

        {/* start: modal 2 */}
        <div className="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel2" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                {/* TITLE */}
                <h5 className="modal-title" id="exampleModalLabel">
                  Success!
                </h5>
                {/* CLOSE MODAL BUTTON */}
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              {/* MODAL BODY */}
              <div className="modal-body">
                <p className="text-muted">
                  Your C.A.P.E.S. application has successfully been submitted.
                </p>
              </div>
              {/* MODAL FOOTER */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* end: modal 2 */}
    </></>
  );
  // end: return
};

export default Heroes;
