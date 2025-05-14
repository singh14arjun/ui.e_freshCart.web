import React from "react";
import "../Footer/footer.css";

const Footer_bottom = () => {
  return (
    <>
      <div className="footer-bottom  flex justify-between list-none py-5">
        <div className="content">
          © 2022 - 2025 FreshCart eCommerce HTML Template. All rights reserved.
          Powered by{" "}
          <span className="text-green-600 font-bold">Codescandy</span>.
        </div>
        <div className="social-links flex gap-3">
          <li>
            <a href="#">
              <i className="fa-brands fa-instagram bg-amber-100 p-1 rounded-1 text-red-500"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-facebook bg-amber-100 p-1 rounded-1 text-blue-500"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="fa-brands fa-twitter bg-amber-100 p-1 rounded-1 text-cyan-500"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa-brands fa-github bg-amber-100 p-1 rounded-1 text-black"></i>
            </a>
          </li>
        </div>
      </div>
    </>
  );
};

export default Footer_bottom;
