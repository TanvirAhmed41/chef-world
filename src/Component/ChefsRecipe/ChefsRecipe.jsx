import React from "react";
import { useLoaderData } from "react-router-dom";
import Cover from "../../assets/cover.jpg";
import Experience from "../../assets/value-proposal.png";
import Likes from "../../assets/like.png";
import Recipes from "../../assets/mix.png";
import RecipeCard from "../RecipeCard/RecipeCard";

const ChefsRecipe = () => {
  const chefsData = useLoaderData();
  console.log(chefsData);
  const {
    ViewRecipes,
    bio,
    chef_name,
    chef_picture,
    id,
    likes,
    num_recipes,
    rating,
    recipes,
    years_of_experience,
  } = chefsData;
  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(#0000008f,#0000008f),url(${Cover})`,
          padding: "150px 0px 150px 0px",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-white fw-bold text-center fs-1">Chef Details</h2>
      </section>
      <section className="container mt-5 mb-5">
        <div className="w-75 mx-auto row align-items-center gap-3 shadow-lg">
          <div className=" col px-0">
            <img className="w-100" src={chef_picture} alt="" />
          </div>
          <div className="col-md-6 ">
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
        </div>
      </section>
      <section  className="container mt-5 mb-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    recipes.map((rc, index)=><RecipeCard key={index} recipe={rc}></RecipeCard>)
                }
            </div>
      </section>
    </>
  );
};

export default ChefsRecipe;
