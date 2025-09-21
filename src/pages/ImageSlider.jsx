import React from "react";

const ImageSlider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide mx-20"
      data-bs-ride="carousel"
      data-bs-interval="3000"
    >
      <div className="carousel-inner">
        {/* Slide 1 */}
        <div className="carousel-item active">
          <img
            src="..\src\assets\photo\slide-1.jpg"
            className="d-block w-100"
            alt="Slide 1"
          />
          <div
            className="carousel-caption d-none d-md-block text-start"
            style={{
              left: "5%",
              right: "auto",
              top: "20%",
              padding: "20px",
              width: "500px",
            }}
          >
            <h5 className="bg-amber-500 w-fit px-2 rounded-2xl">
              Opening Sale Discount 50%
            </h5>
            <p className="text-5xl text-black font-bold">
              SuperMarket For Fresh Grocery
            </p>
            <p className="text-black">
              Introduced a new model for online grocery shopping and convenient
              home delivery
            </p>
            <button className="btn btn-primary mt-2">Shop Now -</button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="carousel-item">
          <img
            src="..\src\assets\photo\slide-2.jpg"
            className="d-block w-100"
            alt="Slide 2"
          />
          <div
            className="carousel-caption d-none d-md-block text-start"
            style={{
              left: "5%",
              right: "auto",
              top: "20%",
              padding: "20px",
              width: "500px",
            }}
          >
            <h5 className="bg-amber-500 w-fit px-2 rounded-2xl">
              Fress Shipping - orders over $100
            </h5>
            <p className="text-5xl text-black font-bold ">
              Free Shipping on Orders over{" "}
              <span className="text-green-500">$100</span>
            </p>
            <p className="text-black">
              Free Shipping to First-Time Customers Only , After promotion and
              discounts are applied
            </p>
            <button className="btn btn-primary mt-2">Shop Now -</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
