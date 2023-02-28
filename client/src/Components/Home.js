import React from 'react';
import About from './About';
import Services from './Services';
import Contact from './Contact';

const Home = () => {
  return (
    <div>

      <section id="home">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-8 mt-5">
              <h1 className="display-4 fw-bolder mb-4 text-center text-white">
                Feels the Fresh Business Perspective
              </h1>
              <p className="lead text-center fs-4 mb-5 text-white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
              <div className="buttons d-flex justify-content-center">
                <button className="btn btn-light me-4 rounder-pill py-2 px-4">
                  Get Quote
                </button>
                <button className="btn btn-outline-light me-4 rounder-pill py-2 px-4">
                  Our Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <About/>
      <Services/>
      <Contact/>


    </div>
  )
}

export default Home ;
