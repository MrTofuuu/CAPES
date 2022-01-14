import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MATCHUPS } from "../utils/queries";
import service1 from "../assets/img/Features-Fire.jpg";
import service2 from "../assets/img/Features-Crime.jpg";
import service3 from "../assets/img/Features-WorldEnder.jpg";
import service4 from "../assets/img/Features-MuchMore.jpg";

const Home = () => {
  const { loading, data } = useQuery(QUERY_MATCHUPS, {
    fetchPolicy: "no-cache",
  });

  const matchupList = data?.matchups || [];

  return (
    <>
      {/* JUMBOTRON IMAGE */}
      <div className="p-5 mb-4 bg-light rounded-3 bg-dark text-white capesJumbotron">
        <div className="container-fluid py-5 mt-100">
          <h1 className="display-5 fw-bold mt-50">
            Tell us about your emergency.
          </h1>
          <Link to="/matchup">
            <button className="btn capes-btn capes-btn-danger btn-lg" type="button">
              Get Started
            </button>
          </Link>
        </div>
      </div>
      <>
      {/* OUR SERVICES HERO */}
      <div className="px-4 py-5 my-5 text-center">
        <h1 className="display-5 fw-bold redText">Our Services</h1>
        {/* start: row */}
        <div className="row">

          {/* FEATURE 1 */}
          <div className="col-lg-3 mx-auto">
          <div className="card">
            <img src={service1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4>Fire &amp; Natural Disaster</h4>
              <p className="card-text">This is dummy text intended to fill out the card's content.</p>
            </div>
          </div>
          </div>
          
          {/* FEATURE 2 */}
          <div className="col-lg-3 mx-auto">
          <div className="card">
            <img src={service2} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4>Fighting Crime</h4>
              <p className="card-text">This is dummy text intended to fill out the card's content.</p>
            </div>
          </div>
          </div>

          {/* FEATURE 3 */}
          <div className="col-lg-3 mx-auto">
          <div className="card">
            <img src={service3} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4>World-Enders</h4>
              <p className="card-text">This is dummy text intended to fill out the card's content.</p>
            </div>
          </div>
          </div>

          {/* FEATURE 4 */}
          <div className="col-lg-3 mx-auto">
          <div className="card">
            <img src={service4} className="card-img-top" alt="..." />
            <div className="card-body">
              <h4>Much More</h4>
              <p className="card-text">This is dummy text intended to fill out the card's content.</p>
            </div>
          </div>
          </div>

        </div> 
        {/* end: row */}
      </div>
      {/* end: our services */}
      </>

      {/* CARD */}
      <div classNameName="card bg-white card-rounded w-50">
        <div classNameName="card-header bg-dark text-center">
          <h1>Welcome to Tech Matchup!</h1>
        </div>
        <div classNameName="card-body m-5">
          <h2>Here is a list of matchups you can vote on:</h2>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ul classNameName="square">
              {matchupList.map((matchup) => {
                return (
                  <li key={matchup._id}>
                    <Link to={{ pathname: `/matchup/${matchup._id}` }}>
                      {matchup.tech1} vs.{matchup.tech2}
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
        <div classNameName="card-footer text-center m-3">
          <h2>Ready to create a new matchup?</h2>
          <Link to="/matchup">
            <button classNameName="btn btn-lg btn-danger">
              Create Matchup!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
