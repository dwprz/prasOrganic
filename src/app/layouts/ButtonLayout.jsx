/* eslint-disable react/prop-types */
import Button from "../components/atoms/Button";

function ButtonLayout({ type, to }) {
  switch (type) {
    case "START_SHOPING":
      return (
        <Button
          marginTop="mt-20 lg:mt-32"
          to={to}
          className="text-neutral-100 lg:text-3xl px-5 lg:px-7 py-3 lg:py-5 bg-teal-700 hover:bg-teal-800 rounded-full"
        >
          <i className="fa-solid fa-bag-shopping me-1"></i>
          start shopping
        </Button>
      );
    case "SELENGKAPNYA":
      return (
        <Button
          marginTop="mt-7 xl:mt-14"
          to={to}
          className="font-semibold underline text-xl xl:text-2xl text-teal-700 hover:text-teal-800"
        >
          Selengkapnya
        </Button>
      );
    case "BELI":
      return (
        <Button
          marginTop="mt-0"
          to={to}
          className="bg-teal-700 hover:bg-teal-800 text-neutral-100 px-3 py-2 rounded-lg"
        >
          <i className="fa-solid fa-cart-shopping me-1"></i> Beli
        </Button>
      );
    default:
      break;
  }
}

export default ButtonLayout;