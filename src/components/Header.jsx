import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleClick = (name) => navigate(`${name}`);
  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <>
      <div className="mb-[20px] border-b-[1px]">
        {/* Top Header */}
        <header className="sub-header flex justify-between items-center bg-gray-200 text-black px-20 md:px-20 py-2">
          <p className="text-sm md:text-xl font-Poppins font-normal text-center">
            SuperValue Deals - Save more with coupons
          </p>
          <div className="header-side2 flex items-center gap-4">
            <select
              className="border rounded px-2 py-0.5 cursor-pointer text-sm"
              aria-label="Language Selector"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
            </select>

            <button
              className="border px-3 py-2 bg-gray-100 text-sm flex items-center gap-2 rounded cursor-pointer"
              aria-label="Toggle Theme"
            >
              <i className="fa-regular fa-sun"></i>
            </button>
          </div>
        </header>

        {/* Middle Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:px-20 px-20 py-3 gap-4">
          {/* Logo & Search */}
          <div className="w-full md:w-auto flex justify-between items-center">
            <button className="cursor-pointer">
              <img
                src="https://freshcart-next-js.vercel.app/images/logo/freshcart-logo.svg"
                className="h-8 md:h-10"
                alt="Logo"
              />
            </button>

            {/* Mobile Menu Icon */}
            <button
              className="block md:hidden text-2xl text-gray-800"
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>

          {/* Search bar (Hidden on mobile/tablet) */}
          <div className="hidden md:flex items-center border rounded px-3 py-1 bg-white w-full md:w-[400px]">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none px-2 py-1 w-full text-sm"
            />
            <button className="text-gray-500">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleClick("wishlist")}
              aria-label="Wishlist"
            >
              <i className="fa-solid fa-heart text-xl text-gray-700"></i>
            </button>
            <button onClick={() => handleClick("signup")} aria-label="Sign up">
              <i className="fa-solid fa-user text-xl text-gray-700"></i>
            </button>
            <button onClick={() => handleClick("cart")} aria-label="Cart">
              <i className="fa-solid fa-bag-shopping text-xl text-gray-700"></i>
            </button>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="header-bottom px-20 md:px-20">
          <div className="header-bottom px-20 md:px-20">
            <div className="flex items-center flex-wrap gap-2">
              <div className="rounded-[10px] py-2 px-4 m-1 text-white text-sm md:text-base bg-[rgb(30,217,13)]">
                <Link to="/">All Department</Link>
              </div>

              {/* Nav Links: Hidden on small screens, visible on md+ */}
              <ul className="hidden md:flex justify-between gap-3 my-2 text-sm md:text-base text-black">
                <li>
                  <Link
                    to="/"
                    className="text-[black!important] no-underline[!important]"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/shop"
                    className="hover:text-green-600 hover:underline transition-all duration-200"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to="/store"
                    className="hover:text-green-600 hover:underline transition-all duration-200"
                  >
                    Store
                  </Link>
                </li>
                <li>
                  <Link
                    to="/mega-menu"
                    className="hover:text-green-600 hover:underline transition-all duration-200"
                  >
                    Mega Menu
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pages"
                    className="hover:text-green-600 hover:underline transition-all duration-200"
                  >
                    Pages
                  </Link>
                </li>
                <li>
                  <Link
                    to="/account"
                    className="hover:text-green-600 hover:underline transition-all duration-200"
                  >
                    Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-green-600 hover:underline transition-all duration-200"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/doc"
                    className="hover:text-green-600 hover:underline transition-all duration-200"
                  >
                    Doc
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* Mobile Nav (Toggle) */}
          {mobileMenuOpen && (
            <div>
              <div className="bg-yellow-300 flex justify-between my-3">
                <div>
                  <img
                    src="https://freshcart-next-js.vercel.app/images/logo/freshcart-logo.svg"
                    className="h-8 md:h-10"
                    alt="Logo"
                  />
                </div>
                <div className="bg-gray-400 text-red-600 font-bold py-1 px-2">
                  {" "}
                  X{" "}
                </div>
              </div>
              <div className="flex items-center border rounded px-3 py-1 bg-white w-full md:w-[400px]">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none px-2 py-1 w-full text-sm"
                />
                <button className="text-gray-500">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>
              <button
                className="py-2 px-4 text-white text-sm md:text-base w-full my-2"
                style={{
                  backgroundColor: "rgb(30, 217, 13)",
                  fontSize: "16px",
                  borderRadius: "10px",
                }}
              >
                All Department
              </button>
              <ul className="md:hidden mt-4 space-y-2 text-sm">
                <li>
                  <Link to="/">Homes</Link>
                </li>
                <li>
                  <a href="">Shop</a>
                </li>
                <li>
                  <a href="">Store</a>
                </li>
                <li>
                  <a href="">Mega Menu</a>
                </li>
                <li>
                  <a href="">Pages</a>
                </li>
                <li>
                  <a href="">Account</a>
                </li>
                <li>
                  <a href="">Dashboard</a>
                </li>
                <li>
                  <a href="">Doc</a>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
