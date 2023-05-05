import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import ChickenImg from "../../assets/chickenRice.jpeg"
import {  toast } from 'react-toastify';


const RecipeCard = ({ recipe }) => {

  const [disabled,setDisabled]=useState(false)
  console.log(recipe);
  const {ingredients, recipe_name,cooking_method } = recipe;

  const handleToast = ()=>{
    setDisabled(true)
    return toast("Added to Favorite")
  }

  return (
    <div>
      <div className="card " style={{width:'18rem',height:"52rem"}}>
        <img src={ChickenImg} alt="" />
        <div  className="card-body">
        <h1 className="card-title">{recipe_name}</h1>
        <ul>{
          ingredients.map((ing)=><li >{ing}</li>)
          }
          </ul>
          <p>{cooking_method}</p>
          
        </div>
        <div>
          <button onClick={handleToast} className={` btn btn-primary ${disabled ? "disabled" : "" } `} href="#">
            {" "}
            <FaHeart></FaHeart>Favorite
          </button>
          </div>
      </div>
    </div>
  );
};

export default RecipeCard;
