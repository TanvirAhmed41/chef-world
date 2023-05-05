import React, { useContext,useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link} from "react-router-dom";
import { FaGithub,FaGoogle } from 'react-icons/fa';
import "./Login.css"
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useNavigate, useLocation } from "react-router-dom";

import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {handleLogin,githubLogin,googleLogin} = useContext(AuthContext)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [error, setError] = useState("");
  const location = useLocation();
  const from = location?.state?.from?.pathname;
  const navigate = useNavigate();
  const handleLoginInfo =(event)=>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    handleLogin(email,password)
    .then(result =>{
      console.log(result);
      form.reset()
      navigate (from)
    })
    .catch(error=>{
      console.log(error);
      setError(error.message)
    })
  }
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        location("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleGithubLogin = () => {
    githubLogin(githubProvider)
      .then((result) => {
        location("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="container mt-4 ">
     <div className=" login-form mx-auto border p-4 rounded-3 shadow-lg">
     <Form onSubmit={handleLoginInfo}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
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
        <Button variant="primary" type="submit" className="w-100 fw-semibold">
          Log In
        </Button>

      </Form>
      <p className="mt-3 text-center">
      <Link to="/registration" > Don't have an account? </Link>
      </p>
      <p className="mt-3 text-center">Or Sign Up</p>
      <div className="mt-3 text-center">
        <button onClick={handleGoogleLogin} className="border-0 text-bg-danger py-1 px-2 rounded-2 me-3"><FaGoogle></FaGoogle></button>
        <button onClick={handleGithubLogin} className="border-0 text-bg-dark py-1 px-2 rounded-2 "><FaGithub></FaGithub></button>
      </div>
      <p className="text-danger">{error}</p>
     </div>
    </div>
  );
};

export default Login;
