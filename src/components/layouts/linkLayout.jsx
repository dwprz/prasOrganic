/* eslint-disable react/prop-types */

import RedirectLink from "../elements/redirectLink";

function LinkLayout({ type }) {
  switch (type) {
    case "START_SHOPING":
      return (
        <RedirectLink
          marginTop="mt-20 lg:mt-32"
          to="./pages/products/index.html"
          className="text-neutral-100 lg:text-3xl px-5 lg:px-7 py-3 lg:py-5 bg-teal-700 hover:bg-teal-800 rounded-full"
        >
          <i className="fa-solid fa-bag-shopping me-1"></i>
          start shopping
        </RedirectLink>
      );
    case "SELENGKAPNYA":
      return (
        <RedirectLink
          marginTop="mt-7 xl:mt-14"
          to="./pages/about/index.html"
          className="font-semibold underline text-xl xl:text-2xl text-teal-700 hover:text-teal-800"
        >
          Selengkapnya
        </RedirectLink>
      );
    case "BELI":
      return (
        <RedirectLink
          marginTop="mt-7"
          to="./pages/products/index.html"
          className="bg-teal-700 hover:bg-teal-800 text-neutral-100 px-3 py-2 rounded-lg"
        >
          <i className="fa-solid fa-cart-shopping me-1"></i> Beli
        </RedirectLink>
      );
    default:
      break;
  }
}

export default LinkLayout;
