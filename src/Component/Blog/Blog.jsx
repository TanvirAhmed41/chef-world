import React from 'react';
import ReactToPdf from "react-to-pdf";
import "./Blog.css"

const Blog = () => {
  const ref = React.createRef();
  return (
    <div  className="py-10">
       <ReactToPdf targetRef={ref} filename="Blog.pdf">
        {({ toPdf }) => (
          <div className="flex justify-center">
            <button className="btn btn-danger mb-10  mt-5 text-4xl" onClick={toPdf}>
              Download pdf
            </button>
          </div>
        )}
      </ReactToPdf>
      <div ref={ref}>
        <div className=' mb-5 mt-5'>
          <div className="item open">
            <p className="number">01</p>
            <p className="text fst-italic">
              Tell us the differences between uncontrolled and controlled
              components?
            </p>
            

            <div className="hidden-box">
              <p className="text-3xl">
                A controlled component has its state controlled from outside.
                Because of this, controlled components are usually stateless as
                they do not store their own state and receive it from a parent
                component. Uncontrolled components are essentially stateful, as
                they store and maintain their own internal state
              </p>
            </div>
          </div>
          <div className="item open">
            <p className="number">02</p>
            <p className="text fst-italic">How to validate React props using PropTypes?</p>
           
            <div className="hidden-box">
              <p className="text-3xl">
                props is an object passed to the component instance. propTypes
                is an object were you declare the types of the data under props.
                PropTypes it is an object packed with some utility - props type
                checker - functions to include in propTypes, so we don't
                reinvent the
              </p>
            </div>
          </div>
          <div className="item open">
            <p className="number">03</p>
            <p className="text fst-italic">
              Tell us the difference between nodejs and express js?
            </p>

            <div className="hidden-box">
              <p className="text-3xl">
                Express.js is a framework for Node.js, so in order to use it,
                you will use Node.js anyway. Express.js will help you organize
                your application better. It provides many features which will
                speed up the development for example mechanism for middlewares,
                more efficient REST support or robust routing.
              </p>
            </div>
          </div>
          <div className="item open">
            <p className="number">04</p>
            <p className="text fst-italic">
              What is a custom hook and why will you create a custom hook?
            </p>

            <div className="hidden-box">
              <p className="text-3xl">
                According to the React docs, “A custom Hook is a JavaScript
                function whose name starts with 'use' and that may call other
                Hooks.” This naming convention is suggested in order to follow
                the pattern that's already in place.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;