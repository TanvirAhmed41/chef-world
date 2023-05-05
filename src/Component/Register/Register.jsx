import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../Login/Login.css";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import {  useNavigate } from "react-router-dom";


const Register = () => {
  const { handleSignUp } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    console.log(form,name);
   
    setError("");
    if (password.length < 6) {
      setError("password must be 6 characters or longer");
      return;
    }

    handleSignUp(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        handleUpdate(createUser, name, photoUrl);
        form.reset();
        navigate("/")
      })
      .catch((error) => {
        console.error(error);
        setError(error.message)
      });
  };
  const handleUpdate = (createUser, name, photoUrl) => {
    updateProfile(createUser, { displayName: name, photoURL: photoUrl })
      .then(() => {})
      .catch((error) => console.error(error));
  };
  return (
    <div className="container my-4 ">
      <div className="login-form mx-auto border p-4 rounded-3 shadow-lg">
        <Form onSubmit={handleRegister}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPhoto">
            <Form.Label>Photo Url</Form.Label>
            <Form.Control
              type="text"
              name="photo"
              placeholder="Enter Your Photo Url"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type ="email"
              name ="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
             
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <button type="submit"
            className="w-100 fw-bold fs-5 btn btn-primary" >
            Register
          </button>
        </Form>
        <p className="text-danger">{error}</p>
      </div>
    </div>
  );
};

export default Register;
