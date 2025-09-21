import React, { useRef } from "react";
import bakery from "../../../src/assets/photo/category-bakery-biscuits.jpg";
import petCare from "../../../src/assets/photo/category-pet-care.jpg";
import chickenMeatFish from "../../../src/assets/photo/category-chicken-meat-fish.jpg";
import instantFood from "../../../src/assets/photo/category-instant-food.jpg";
import attaRiceDal from "../../../src/assets/photo/category-atta-rice-dal.jpg";
import babyCare from "../../../src/assets/photo/category-baby-care.jpg";
import groceryBanner1 from "../../../src/assets/photo/grocery-banner.png";

const categories = [
  { name: "Bakery and Biscuits", image: bakery },
  { name: "Baby Care", image: babyCare },
  { name: "Pet Care", image: petCare },
  { name: "Chicken, Meat & Fish", image: chickenMeatFish },
  { name: "Instant Food", image: instantFood },
  { name: "Atta Rice & Dal", image: attaRiceDal },
];

const FeaturedCategories = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative  mx-20 md:mx-20 my-10">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Featured Categories</h1>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            &#8249;
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
          >
            &#8250;
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scrollbar-hide pb-2"
      >
        {categories.map((category, index) => (
          <div
            key={index}
            className="min-w-[150px] md:min-w-[200px] border rounded-lg p-4 flex-shrink-0 flex flex-col items-center hover:shadow-lg transition"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-28 h-28 object-contain mb-2"
            />
            <p className="text-center text-gray-800">{category.name}</p>
          </div>
        ))}
      </div>

      <div className="mx-10 my-5">
        <div className="flex justify-between">
          <div
            className="bg-center bg-cover px-20 py-10 rounded-2xl"
            style={{ backgroundImage: `url(${groceryBanner1})` }}
          >
            <div>
              <h3>Fruits & Vegtables</h3>
              <p>
                Get Upto
                <span>30%</span>
                Off
              </p>
              <a href="">Shop Now</a>
            </div>
          </div>
          <div className="bg-yellow-300 rounded-2xl px-20 py-10">
            <div>
              <h3>Freshly Baked Buns</h3>
              <p>
                Get Upto
                <span>25%</span>
              </p>
              Off
              <a href="">Shop Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCategories;
