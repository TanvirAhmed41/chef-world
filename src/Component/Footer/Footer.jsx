import React from "react";
import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => {
  return (
    <section className="bg-dark py-5">
      <div className="container row row-cols-md-3 g-5 " >
        <div>
          <h2 className="text-white mb-4 ">Chef-World</h2>
          <p className="text-light">
          Welcome to Chef World, your ultimate destination for exploring the
          diverse and delicious world of international cuisine. Our platform
          brings together a community of passionate food enthusiasts and expert
          chefs from all corners of the globe, to help you discover new flavors,
          ingredients, and cooking techniques.
          </p>
        </div>
        <div className="">
          <h2 className="text-light mb-4">Quick links</h2>
          <ul className="d-flex flex-column text-white list-unstyled gap-2">
            <li>Home</li>
            <li>Login</li>
            <li>Register</li>
            <li>Blog</li>
          </ul>
        </div>
        <div>
          <h2 className="text-light mb-4">Contact Details</h2>
          <ul className="d-flex flex-column text-white list-unstyled gap-3">
            <li>Address:227/A,Tejgaon,Dhaka</li>
            <li>Email:santoahmed225@gmail.com</li>
            <li>Phone:+880-17614-76189</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
