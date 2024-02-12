function Footer() {
  return (
    <footer className="bg-gray-800 py-14 mt-14 lg:mt-24">
      <section className="flex flex-col sm:flex-row sm:justify-between gap-7 border-b border-neutral-500 pb-10 sm:px-14">
        <img
          src="assets/logo/prasorganic-high-resolution-logo-transparent.svg"
          alt=""
          className="h-[7vh]"
        />
        <div className="flex justify-center gap-5">
          <a href="#">
            <i className="fa-brands fa-facebook-f text-4xl px-4 py-2 bg-blue-600 text-neutral-300 rounded-full"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-twitter text-3xl p-3 bg-blue-500 text-neutral-200 rounded-full"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram text-4xl px-3 py-2 bg-red-600 text-neutral-200 rounded-full"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-linkedin-in text-4xl px-3 py-2 bg-blue-600 text-neutral-200 rounded-full"></i>
          </a>
        </div>
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-5 gap-10 mt-14 lg:mb-14 px-7 sm:px-14">
        <div>
          <h1 className="text-3xl font-semibold text-teal-700 underline underline-offset-4">
            Store
          </h1>
          <ul className="text-neutral-300 mt-3">
            <li>Home</li>
            <li>Products</li>
            <li>Cart</li>
          </ul>
        </div>

        <div>
          <h1 className="text-3xl font-semibold text-teal-700 underline underline-offset-4">
            About
          </h1>
          <ul className="text-neutral-300 mt-3">
            <li>About Us</li>
            <li>Partner With Us</li>
            <li>Career</li>
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <h1 className="text-3xl font-semibold text-teal-700 underline underline-offset-4">
            Meet Us
          </h1>
          <address className="flex flex-col text-neutral-300 mt-3">
            <a href="#">
              <i className="fa-brands fa-whatsapp"></i> +62 81234567
            </a>
            <a href="#">
              <i className="fa-regular fa-envelope"></i> prasorganic@gmail.com
            </a>
            <a href="#">
              <i className="fa-solid fa-location-dot"></i> Center Office :
              Goatan Street, Northen District, Pantura States
            </a>
          </address>
        </div>

        <div className="w-3/4 sm:col-span-3 lg:col-span-2">
          <h1 className="text-3xl font-semibold text-teal-700 underline underline-offset-4">
            Subscribe Us
          </h1>
          <form method="post" className="mt-7 flex flex-col">
            <input
              className="py-2 px-3 rounded-xl italic focus:outline-teal-700"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              required
            />
            <button
              className="text-neutral-300 bg-teal-700 hover:bg-teal-800 rounded-full mt-5 py-2"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </footer>
  );
}

export default Footer;