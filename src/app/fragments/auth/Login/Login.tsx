import { Link } from "react-router-dom";
import { handleSignInGoogle, handleSignInRegular } from "./login.util";
import { FormLogin } from "../../../components/organisms/auth/FormLogin/FormLogin";
import ButtonLoginGoogle from "../../../components/atoms/Button/ButtonLoginGoogle";

function LoginFragment() {

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

                <FormLogin handleSignInRegular={handleSignInRegular} />

                <div className="w-full px-7 mt-7">
                    <ButtonLoginGoogle type="button" handleSignInGoogle={handleSignInGoogle} />
                </div>

                <div className="w-full flex justify-between px-7 mt-12 xl:mt-14 text-teal-600">
                    <Link className="hover:underline" to={"/users/register"}>Sign up</Link>
                    <Link className="hover:underline" to={"#"}>Forgot Password</Link>
                </div>

            </main>
        </section>

    )
}

export default LoginFragment;