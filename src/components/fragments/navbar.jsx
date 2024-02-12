import { useState } from "react";

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const [isDivVisible, setIsDivVisible] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
  };

  const handleAuthNavMobile = () => {
    setIsDivVisible(!isDivVisible);
  };

  return (
    <nav>
      <section className="fixed flex justify-between items-center z-30 px-10 lg:px-40 py-5 w-full bg-white bg-opacity-90">
        <figure>
          <img
            src="assets/logo/prasorganic-high-resolution-logo-transparent.svg"
            alt=""
            className="h-[7vh] w-[7vx]"
          />
        </figure>

        <div>
          <ul className="hidden lg:flex gap-14">
            <li>
              <a href="./index.html" className="text-teal-700">
                Home
              </a>
            </li>
            <li>
              <a href="./pages/products/index.html">Products</a>
            </li>
            <li>
              <a href="./pages/about/index.html">About</a>
            </li>
            <li>
              <a href="./pages/contact/index.html">Contact</a>
            </li>
          </ul>
        </div>

        <div className="w-[14vw] flex">
          <a
            href="./pages/auth/login/index.html"
            className="hidden lg:block text-teal-700 ml-auto"
          >
            Sign In
          </a>
          <button
            type="button"
            className="lg:hidden ml-auto"
            onClick={handleButtonClick}
          >
            <i
              className={`fa-solid ${
                isClicked ? "fa-circle-xmark" : "fa-bars"
              } text-2xl text-teal-700`}
            ></i>
          </button>
        </div>
      </section>

      <section
        className={`${
          isClicked ? "block" : "hidden"
        } fixed bottom-0 z-30 w-full`}
      >
        <div
          className={`${
            isDivVisible ? "flex" : "hidden"
          } justify-center gap-10 mb-10`}
        >
          <a
            href="./pages/auth/login/index.html"
            className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-1 rounded-full"
          >
            Sign In
          </a>
          <a
            href="./pages/auth/register/index.html"
            className="bg-white hover:bg-slate-200 border border-teal-700 px-3 py-1 rounded-full"
          >
            Sign Up
          </a>
        </div>

        <ul className="flex justify-around bg-white bg-opacity-90 py-5 ">
          <li>
            <a href="./index.html">
              <div className="text-center text-lg text-teal-700">
                <i className="fa-solid fa-house"></i>
                <h1 className="font-semibold mt-1">Home</h1>
              </div>
            </a>
          </li>

          <li>
            <a href="./pages/products/index.html">
              <div className="text-center text-lg">
                <i className="fa-solid fa-store"></i>
                <h1 className="font-semibold mt-1">Products</h1>
              </div>
            </a>
          </li>

          <li>
            <a href="./pages/about/index.html">
              <div className="text-center text-lg">
                <i className="fa-solid fa-building"></i>
                <h1 className="font-semibold mt-1">About Us</h1>
              </div>
            </a>
          </li>

          <li>
            <a href="./pages/contact/index.html">
              <div className="text-center text-lg">
                <i className="fa-solid fa-envelope-open-text"></i>
                <h1 className="font-semibold mt-1">Contact Us</h1>
              </div>
            </a>
          </li>

          <li>
            <button type="button" onClick={handleAuthNavMobile}>
              <div className="text-center text-lg">
                <i className="fa-solid fa-ellipsis"></i>
                <h1 className="font-semibold mt-1">More</h1>
              </div>
            </button>
          </li>
        </ul>
      </section>
    </nav>
  );
}

export default Navbar;
