import { Link } from "react-router-dom";
import { handleRegister } from "./register.util";
import { FormRegister } from "../../../components/organisms/auth/FormRegister/FormRegister";

function RegisterFragment() {

  return (
    <section className="xl:relative xl:h-screen">
      <figure className="h-[40vh] xl:h-full xl:w-full">
        <img
          src="/assets/hero/hero-auth.jpg"
          alt="prasorganic"
          className="object-cover w-full h-full brightness-75"
        />
      </figure>

      <main className="mt-7 xl:mt-0 xl:absolute xl:w-[40rem] xl:bg-white xl:bg-opacity-90 xl:py-14 xl:rounded-xl left-1/2 xl:-translate-x-1/2 top-1/2 xl:-translate-y-1/2">

        <h1 className="text-xl md:text-3xl text-teal-600 font-extrabold px-7 mb-5 text-center">Welcome To PrasOrganic</h1>

        <FormRegister handleRegister={handleRegister} />

        <div className="text-teal-600 text-end px-7 mt-12 xl:mt-14">
          <Link className="hover:underline" to={"/users/login"}>Sign in</Link>
        </div>

      </main>
    </section>
  );
}

export default RegisterFragment;

