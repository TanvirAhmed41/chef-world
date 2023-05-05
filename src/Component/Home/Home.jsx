import React, { useEffect, useState } from "react";
import SingleChefCard from "../SingelChefCard/SingleChefCard";
import banner from "../../assets/banner.jpg";
import "./Home.css"
import AboutUs from "../AboutUs/AboutUs";
import Gallery from "../Gallery/Gallery";


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
        <h1 className="display-2 text-white mb-4 fw-semibold">
        "Flavorful Recipes for You!"
        </h1>
        <p className="text-white fw-semibold fs-6 w-50 mx-auto mt-5">
          Welcome to Chef World, <br /> Looking for delicious and easy-to-follow recipes? Look no further! Our recipe website simplifies cooking and offers flavorful dishes that will satisfy even the most discerning palate. Discover our mouthwatering recipes today!
        </p>
      </div>
    </div>
   
    <div className="container row row-cols-1 row-cols-md-3 g-4 mx-auto pt-5">
    {chefsData &&
          chefsData.map((singleChef) => (
            <SingleChefCard singleChef={singleChef} key={singleChef}></SingleChefCard>
          ))}
    </div>
    <AboutUs></AboutUs>
    <Gallery></Gallery>
    
  </>
  
  );
            
};

export default Home;
