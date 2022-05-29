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
            src="https://www.ryanscomputers.com/cdn/products/small/microsoft-surface-laptop-3-10th-gen-intel-core-i5-11577344992.webp"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.ryanscomputers.com/cdn/products/small/razer-iskur-black-green-gaming-chair-11639308822.webp"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.ryanscomputers.com/cdn/products/small/intel-nuc-kit-intel-celeron-dual-core-j4005-4gb-11647256257.webp"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.ryanscomputers.com/cdn/products/small/hp-laserjet-pro-mfp-m227fdw-11548746660.webp"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.ryanscomputers.com/cdn/products/small/gigabyte-g34wqc-34-inch-wqhd-3440-x-1440-144hz-11622895433.webp"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.ryanscomputers.com/cdn/products/small/thermaltake-versa-j24-tg-rgb-tempered-glass-side-11552197564.webp"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.ryanscomputers.com/cdn/products/small/transcend-drivepro-20-1080p-dash-camera-with-32gb-11648377170.webp"
            className="h-80"
            alt="Burger"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://www.ryanscomputers.com/cdn/products/small/amazon-kindle-fire-hd-8-kids-pro-10th-gen-quad-11633778024.webp"
            className="h-80"
            alt="Burger"
          />
        </div>
      </div>
    </div>
  );
};

export default Top10;
