import React from 'react';
import Error from "../../assets/404.png"
import { Link} from "react-router-dom";


const ErrorPage = () => {
    return (
        <section className='container d-flex align-items-center '>
          <div className='w-25'>
            <h1 className='fs-1'>Page Not Found</h1>
            <Link to="/">GO BACK!</Link>
          </div>
          <div className='w-75'>
            <img className='w-100' src={Error} alt="" />
            
        </div>
        </section>
    );
};

export default ErrorPage;