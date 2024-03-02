import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const [isVisible, setIsVisible] = useState({
    navMobile: false,
    navMore: false,
  });

  const handleToggleVisibility = (target: keyof typeof isVisible) => {
    const updateIsVisible = { ...isVisible, [target]: !isVisible[target] };
    setIsVisible(updateIsVisible);
  };

  const { pathname } = useLocation()

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
            {
              [
                { path: "/", name: "Home" },
                { path: "/products", name: "Products" },
                { path: "/about", name: "About" },
                { path: "/contact", name: "Contact" },
              ].map((item, index) => {
                const { path, name } = item;
                return (
                  <li key={index}>
                    <Link
                      to={path}
                      className={`${pathname === path ? "text-teal-700" : ""}`}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })
            }
          </ul>
        </div>

        <div className="w-[14vw] flex">
          <Link
            to="/users/login"
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
              className={`fa-solid ${isVisible.navMobile ? "fa-circle-xmark" : "fa-bars"
                } text-2xl text-teal-700`}
            ></i>
          </button>
        </div>
      </section>

      <section
        className={`${isVisible.navMobile ? "block" : "hidden"
          } fixed bottom-0 z-30 w-full`}
      >
        <div
          className={`${isVisible.navMore ? "flex" : "hidden"
            } justify-center gap-10 mb-10`}
        >
          <Link
            to="/users/login"
            className="bg-teal-700 hover:bg-teal-800 text-white px-3 py-1 rounded-full"
          >
            Sign In
          </Link>
          <Link
            to="/users/register"
            className="bg-white hover:bg-slate-200 border border-teal-700 px-3 py-1 rounded-full"
          >
            Sign Up
          </Link>
        </div>

        <ul className="flex justify-around bg-white bg-opacity-90 py-5 ">
          {
            [
              { path: "/", icon: "fa-house", name: "Home" },
              { path: "/products", icon: "fa-store", name: "Products" },
              { path: "/about", icon: "fa-building", name: "About Us" },
              { path: "/contact", icon: "fa-envelope-open-text", name: "Contact Us" }
            ].map((item, index) => {
              const { path, icon, name } = item;
              return (
                <Link 
                key={index}
                to={path}
                >
                  <div className={`${pathname === path ? "text-teal-700" : ""} text-center text-lg`}>
                    <i className={`fa-solid ${icon}`}></i>
                    <h1 className="font-semibold mt-1">{name}</h1>
                  </div>
                </Link>
              )
            })
          }

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
    </nav >
  );
}

export default Navbar;
