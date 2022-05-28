import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";
const TeamPersone = () => {
  return (
    <div>
      <div className="card w-72 glass">
        <figure>
          <img src="https://api.lorem.space/image/car?w=400&h=225" alt="car!" />
        </figure>
        <div className="card-body text-center py-10">
          <h2 className="font-bold text-xl">Jason Smith</h2>
          <p className="py-5">Founder / Ceo</p>
          <div className="card-actions justify-evenly w-3/4 mx-auto">
            <Link to="#">
              <FaFacebookSquare />
            </Link>
            <Link to="#">
              <FaTwitterSquare />
            </Link>
            <Link to="#">
              <FaLinkedin />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPersone;
