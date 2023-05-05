import React from "react";

const RecipeCard = ({recipe}) => {
  return (
    <div>
      {/* <div class="col">
        <div class="card h-100">
          <img
            src={chef_picture}
            class="card-img-top"
            style={{ height: "250px" }}
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">{chef_name}</h5>
            <p class="card-text">{bio.slice(0, 80)}...</p>
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
          <div class="card-footer border-0">
            <Link to={`/chef/${id}`}>
              <button className="btn btn-primary ">View Recipies</button>
            </Link>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default RecipeCard;
