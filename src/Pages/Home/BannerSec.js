import React from "react";
import "./Home.css";
const BannerSec = () => {
  return (
    <div className="hero min-h-screen banner-bg">
      <div className="hero-overlay"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="px-16">
          <h1
            className="mb-5 text-5xl font-bold"
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            Need Doctors Tools?
          </h1>
          <p className="mb-5">
          We sell the best quality office equipment like Printer, Photocopier, Scanner, Projector, Server, Security System, CC Camera, DVR, NVR, IP Camera, Network Router, Access Control, Money Counting Machine, Cash Register Machine, Land Phone Set, IP Phone Set from famous brands including HP, Canon, Dell, Toshiba, Brother, Epson, Sharp, Casio, BenQ, Xiaomi, Samsung, Panasonic, etc
          </p>
          <button className="btn btn-primary">Explore Now!</button>
        </div>
      </div>
    </div>
  );
};

export default BannerSec;
