import React from "react";

const Top10 = () => {
  return (
    <div className="py-20">
      <h1 className="text-center font-extrabold text-4xl mb-5">
        Top 10 Products
      </h1>
      <p className="text-center mb-10">Scroll (Left || Right) to see more...</p>
      <div className="carousel rounded-box product-carousel">
        <div className="carousel-item">
          <img
            src="https://tools.com.bd/storage/images/products/1/calibration/electrical-calibration/fluke/thumbnailMedium/5522A-Multi-Product-Calibrator-1566803415.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tools.com.bd/storage/images/products/1/calibration/temperature-calibrators/fluke/thumbnailMedium/1560-Black-Stack-Thermometer-Readout-from-tools-bangladesh-1568185541.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tools.com.bd/storage/images/products/1/calibration/ma-loop-calibrators/fluke/thumbnailMedium/Fluke-707Ex-Intrinsically-Safe-mA-Loop-Calibrator-from-Tools-Bangladesh-the-best-eccomerc-site-in-bd-1567847656.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tools.com.bd/storage/images/products/1/calibration/ma-loop-calibrators/fluke/thumbnailMedium/Fluke-715-VoltmA-Loop-Calibrator-from-Tools-BD-1567846598.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tools.com.bd/storage/images/products/1/calibration/ma-loop-calibrators/fluke/thumbnailMedium/Fluke-772-Milliamp-Process-Clamp-Meter-from-Tools-Bangladesh-the-biggest-e-commerce-site-in-BD-1567666706.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tools.com.bd/storage/images/products/1/hvac-clean-rooms/anemometers/smart-sensor/thumbnailMedium/Smart-Sensor-AR836+-Digital-Anemometer-1569588651.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tools.com.bd/storage/images/products/1/hvac-clean-rooms/anemometers/lutron/thumbnailMedium/Digital-anemometer-am-4204-1569511433.png"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://tools.com.bd/storage/images/products/3/hvac-clean-rooms/flue-gas-analysis/testo/thumbnailMedium/Testo-315-3-CO-and-CO2-meter-1574161730.png"
            className="h-80"
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Top10;
