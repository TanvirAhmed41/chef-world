import React from "react";
import { useLoaderData } from "react-router-dom";

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
  return(
    <>
        <div>
            
        </div>
        <div>

        </div>
    </>
  )
};

export default ChefsRecipe;
