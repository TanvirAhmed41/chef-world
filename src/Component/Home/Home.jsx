import React from "react";
import banner from "../../assets/banner.jpg";

const Home = () => {
  return (
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
  );
};

export default Home;
