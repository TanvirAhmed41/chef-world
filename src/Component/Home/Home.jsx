import React, { useEffect, useState } from "react";
import SingleChefCard from "../SingelChefCard/SingleChefCard";
import banner from "../../assets/banner.jpg";
import "./Home.css"


const Home = () => {
    const [chefsData, setChefsData] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/chefs")
        .then((res) => res.json())
        .then((data) => setChefsData(data));
    }, []);
  return (
  <>
   <div
      style={{
        backgroundImage: `linear-gradient(#0000008f,#0000008f),url(${banner})`,
        padding: "150px 0px 150px 0px",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-center">
        <h1 className="display-2 text-white mb-4 fw-bold">
          "Explore Global Cuisine with Our Chef Community"
        </h1>
        <p className="text-white">
          Welcome to Chef World, your ultimate destination for exploring the
          diverse and delicious world of international cuisine. Our platform
          brings together a community of passionate food enthusiasts and expert
          chefs from all corners of the globe, to help you discover new flavors,
          ingredients, and cooking techniques. Whether you're a seasoned home
          cook, a professional chef, or simply an adventurous eater, Chef World
          is the perfect place to indulge your culinary curiosity and expand
          your horizons.
        </p>
      </div>
    </div>
   
    <div className="container row row-cols-1 row-cols-md-3 g-4 mx-auto pt-5">
    {chefsData &&
          chefsData.map((singleChef) => (
            <SingleChefCard singleChef={singleChef}></SingleChefCard>
          ))}
    </div>
    
  </>

  );
};

export default Home;
