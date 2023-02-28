import React from "react";

const About = () => {
  return (
    <>
      <div>
        <section id="about">
          <div className="container my-5 py-5">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://thumbs.dreamstime.com/b/jpg-spelled-word-dice-letters-reflection-term-toy-cubes-bottom-studio-shot-white-background-46803015.jpg"
                  alt="About"
                  className="w-75 mt-5"
                />
              </div>
              <div className="col-md-6">
                <h3 className="fs-5 mb-0">About Us</h3>
                <h1 className="display-6 mb-2">
                  Who <b>We</b> Are
                </h1>
                <hr className="w-50" />
                <p className="lead mb-4 ;">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged.
                </p>
                <button className="btn btn-primary rounded-pill py-2 px-4">
                  Get Started
                </button>
                <button className="btn btn-outline-primary rounded-pill py-2 px-4 ms-2">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
