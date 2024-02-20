import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState({
    navMobile: false,
    navMore: false,
  });

  const handleToggleVisibility = (target) => {
    const updateIsVisible = { ...isVisible, [target]: !isVisible[target] };
    setIsVisible(updateIsVisible);
  };

  return (
    <nav>
      <section className="fixed top-0 flex justify-between items-center z-30 px-10 lg:px-40 py-5 w-full bg-white bg-opacity-90">
        <figure>
          <img
            src="/assets/logo/prasorganic-high-resolution-logo-transparent.svg"
            alt=""
            className="h-[7vh] w-[7vx]"
          />
        </figure>

        <div>
          <ul className="hidden lg:flex gap-14">
            <li>
              <Link to="/" className="text-teal-700">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="w-[14vw] flex">
          <Link
            to="./pages/auth/login/index.html"
            className="hidden lg:block text-teal-700 ml-auto"
          >
            Sign In
          </Link>
          <button
            type="button"
            className="lg:hidden ml-auto"
            onClick={() => handleToggleVisibility("navMobile")}
          >
            <i
              className={`fa-solid ${
                isVisible.navMobile ? "fa-circle-xmark" : "fa-bars"
              } text-2xl text-teal-700`}
            ></i>
          </button>
        </div>
      </section>

      <section
        className={`${
          isVisible.navMobile ? "block" : "hidden"
        } fixed bottom-0 z-30 w-full`}
      >
        <div
          className={`${
            isVisible.navMore ? "flex" : "hidden"
          } justify-center gap-10 mb-10`}
        >
          <Link
            to="/auth/login"
            className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-1 rounded-full"
          >
            Sign In
          </Link>
          <Link
            to="/auth/register"
            className="bg-white hover:bg-slate-200 border border-teal-700 px-3 py-1 rounded-full"
          >
            Sign Up
          </Link>
        </div>

        <ul className="flex justify-around bg-white bg-opacity-90 py-5 ">
          <li>
            <Link to="/">
              <div className="text-center text-lg text-teal-700">
                <i className="fa-solid fa-house"></i>
                <h1 className="font-semibold mt-1">Home</h1>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/products">
              <div className="text-center text-lg">
                <i className="fa-solid fa-store"></i>
                <h1 className="font-semibold mt-1">Products</h1>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/about">
              <div className="text-center text-lg">
                <i className="fa-solid fa-building"></i>
                <h1 className="font-semibold mt-1">About Us</h1>
              </div>
            </Link>
          </li>

          <li>
            <Link to="/contact">
              <div className="text-center text-lg">
                <i className="fa-solid fa-envelope-open-text"></i>
                <h1 className="font-semibold mt-1">Contact Us</h1>
              </div>
            </Link>
          </li>

          <li>
            <button
              type="button"
              onClick={() => handleToggleVisibility("navMore")}
            >
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
