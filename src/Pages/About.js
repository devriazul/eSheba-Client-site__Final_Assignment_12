import React from "react";
const About = () => {
  return (
    <div className="hero min-h-screen bg-base-200 lg:px-20">
      <div className="hero-content flex-col lg:flex-row-reverse lg:gap-20">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">About Me</h1>
          <p className="py-6">
            Hey! I'm{" "}
            <span className=" font-bold text-primary">Masuduzzaman</span> I am a
            computer science student. My mission this year is to be a web
            developer. I am constantly working hard for this and hopefully I
            will be able to reach my destination.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <img
            src="https://swdrana.github.io/personal-portfolio-m1-final/img/swdrana.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default About;
