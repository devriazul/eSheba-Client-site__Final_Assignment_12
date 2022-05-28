import React from "react";
import TeamPersone from "./TeamPersone";

const Teams = () => {
  return (
    <div className="hero">
    <div className=" hero-overlay">

    <div className="teams py-20 px-0 lg:px-20 ">
        <h1 className="text-center font-bold text-4xl mb-10 text-white">
          Our Expert In Different Solutions
        </h1>
        <div className=" flex items-center justify-center ">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <TeamPersone />
            <TeamPersone />
            <TeamPersone />
            <TeamPersone />
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Teams;
