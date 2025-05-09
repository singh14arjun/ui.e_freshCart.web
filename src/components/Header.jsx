import React from 'react'

const Header = () => {
  return (
    <>
      <div className="header ">
        <div className="sub-header flex justify-between p-1 bg-amber-50 text-black px-20">
          <p className="text-xl font-Poppins font-600">SuperValue Deals - Save more with coupons</p>
          <div className="header-side2 flex mx-3 items-center gap-4">

            <div className="dropdown flex items-center gap-2 mx-5 ">

              <select className="border rounded px-2 py-1 cursor-pointer">
                <option value="en">English</option>
                <option value="es">Spanish</option>
              </select>
            </div>

            <div className="toggler">
              <button className="border px-3 py-2 bg-gray-100 text-sm flex items-center gap-2 rounded cursor-pointer">
                <i className="fa-regular fa-sun"></i>
                <i className="fa-solid fa-moon"></i>
              </button>
            </div>
          </div>
        </div>

        <div className="main-header flex justify-between mx-20">
          <div className="main-header-side1 my-3">
            <div className="main-header-side1-row1 flex gap-20">
              <button className='flex cursor-pointer'>
                <img src='https://freshcart-next-js.vercel.app/images/logo/freshcart-logo.svg' />
              </button>
              <div className="search-bar flex items-center border rounded px-3 py-1 bg-white w-150">
                <input
                  type="text"
                  placeholder="Search..."
                  className="outline-none px-2 py-1 w-full"

                />
                <button className="text-gray-500">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </button>
              </div>

            </div>
          </div>

          <div className="main-header-side2 my-5">
            <button>
              <i className="fa-solid fa-heart px-3"></i>
            </button>
            <button>
              <i className="fa-solid fa-user px-3"></i>
            </button>
            <button>
              <i className="fa-solid fa-bag-shopping px-3"></i>
            </button>
          </div>

        </div>
   {/* its optional  */}
        <div className="header-buttom mx-20">
          <div className="navbar flex gap-5 list-none font-semibold" style={{alignItems:"center"}} >
            <button className='p-2 rounded-xl' style={{backgroundColor:"rgb(30, 217, 13)" , fontSize:"20px"}}>All Department</button>
               <li><a href="">Home</a></li>
               <li><a href="">Shop</a></li>
               <li><a href="">Store</a></li>
               <li><a href="">Mega Menu</a></li>
               <li><a href="">Pages</a></li>
               <li><a href="">Account</a></li>
               <li><a href="">Dashboard</a></li>
               <li><a href="">Doc</a></li>
          </div>
        </div>
      </div>


    </>
  )
}

export default Header
