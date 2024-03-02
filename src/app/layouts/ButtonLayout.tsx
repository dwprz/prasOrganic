/* eslint-disable react/prop-types */

import ButtonLink from "../components/atoms/Button/ButtonLink";


function ButtonLayout({ type, to }: { type: string, to: string }) {
  switch (type) {
    case "START_SHOPING":
      return (
        <ButtonLink
          marginTop="mt-20 lg:mt-32"
          to={to}
          className="text-neutral-100 lg:text-3xl px-5 lg:px-7 py-3 lg:py-5 bg-teal-700 hover:bg-teal-800 rounded-full"
        >
          <i className="fa-solid fa-bag-shopping me-1"></i>
          start shopping
        </ButtonLink>
      );
    case "SELENGKAPNYA":
      return (
        <ButtonLink
          marginTop="mt-7 xl:mt-14"
          to={to}
          className="font-semibold underline text-xl xl:text-2xl text-teal-700 hover:text-teal-800"
        >
          Selengkapnya
        </ButtonLink>
      );
    case "BELI":
      return (
        <ButtonLink
          marginTop="mt-0"
          to="#"
          className="bg-teal-700 hover:bg-teal-800 text-neutral-100 px-3 py-2 rounded-lg"
        >
          <i className="fa-solid fa-cart-shopping me-1"></i> Beli
        </ButtonLink>
      );
    default:
      break;
  }
}

export default ButtonLayout;
