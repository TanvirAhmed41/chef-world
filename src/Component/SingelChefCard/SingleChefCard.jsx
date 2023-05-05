import React from "react";
import Experience from "../../assets/value-proposal.png";
import Likes from "../../assets/like.png";
import Recipes from "../../assets/mix.png";
import { Link } from "react-router-dom";

const SingleChefCard = ({ singleChef }) => {
  console.log(singleChef);
  const {
    chef_picture,
    chef_name,
    years_of_experience,
    num_recipes,
    likes,
    id,
    bio,
  } = singleChef;
  return (
    <div className="my-4">
      <div className="col">
        <div className="card h-100">
          <img
            src={chef_picture}
            className="card-img-top"
            style={{ height: "250px" }}
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{chef_name}</h5>
            <p className="card-text">{bio.slice(0, 80)}...</p>
            <div>
              <p className="mb-1 ">
                <img src={Experience} className="me-1" /> Experience{" "}
                {years_of_experience}
              </p>
              <p className="mb-1">
                {" "}
                <img src={Recipes} className="me-1" />
                Recipes {num_recipes}
              </p>
              <p className="mb-1">
                {" "}
                <img src={Likes} className="me-1" />
                Likes {likes}
              </p>
            </div>
          </div>
          <div className="card-footer border-0">
            <Link to={`/chef/${id}`}>
              <button className="btn btn-success fw-semibold ">View Recipes</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChefCard;
