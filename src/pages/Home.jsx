import React from "react";
import ImageSlider from "./ImageSlider";
import FeaturedCategories from "./FeaturedCatergories/FeaturedCategories";
import PopularProducts from "./popularProducts/PopularProducts";
import Above_Footer from "../components/Footer/Above_Footer";
const Home = () => {
  return (
    <>
      {/* Image Carousel */}
      <ImageSlider />
      <FeaturedCategories />
      <PopularProducts />
      <Above_Footer />
    </>
  );
};

export default Home;
