import { useRef, useState } from "react";
import "react-phone-number-input/style.css";
import { useNavigate } from "react-router-dom";
import { useRegister } from "../context";
import { handleChange, handleKeyDown, handlePasswordSubmit, handleVerifyOTP } from "./verification.util";

function Verification() {
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '', '']);
    const [isSuccess, setIsSuccess] = useState({ otp: false, error: false });
    const navigate = useNavigate();
    const { registerState } = useRegister();

    const inputRefs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    return (

        <section className="bg-teal-500">
            <section className={`${!isSuccess.otp ? "flex" : "hidden"} flex flex-col justify-center h-screen items-center`}>

                <i className="fa-solid fa-key bg-white p-5 rounded-full text-teal-500 text-5xl"></i>

                <div className="mt-10 text-2xl text-center text-white">
                    <h1>Enter the OTP that we have sent to: </h1>
                    <h1>{registerState.phone_number}</h1>
                </div>

                <form
                    className="py-10 flex flex-col justify-center"
                    onSubmit={(e) => handleVerifyOTP(e, registerState, otp, setIsSuccess, isSuccess)}
                >
                    <div>
                        {inputRefs.map((inputRef, index) => (
                            <input
                                key={index}
                                ref={inputRef}
                                className="w-10 h-12 border-b-2 text-2xl text-center mx-2 focus:outline-none focus:border-blue-500 "
                                type="text"
                                maxLength={1}
                                value={otp[index]}
                                onChange={(e) => handleChange(index, e.target.value, otp, setOtp, inputRefs)}
                                onKeyDown={(e) => handleKeyDown(index, e, otp, inputRefs)}
                            />
                        ))}
                    </div>

                    <p className={`${isSuccess.error ? "block" : "hidden"} text-red-500 text-lg italic mt-5`}>*OTP invalid</p>

                    <button type="submit" className="mt-7 bg-white px-10 py-2">Verify OTP</button>

                </form>
            </section >

            <section className={`${isSuccess.otp ? "flex" : "hidden"} flex-col justify-center h-screen items-center`}>
                <div className="text-white text-center text-3xl">
                    <h1>Enter your password for:</h1>
                    <h1>{registerState.username}</h1>
                    <hr className="w-20 mx-auto" />
                </div>

                <form
                    className="flex flex-col mt-10"
                    onSubmit={(e) => handlePasswordSubmit(e, isSuccess, setIsSuccess, registerState, navigate)}
                >
                    <label
                        htmlFor="password"
                        className="text-white">
                        Password:
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        className="focus:outline-teal-500 px-3 py-1"
                        placeholder="********"
                        minLength={5}
                    />
                    <label
                        htmlFor="confirmPassword"
                        className="text-white">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        className="focus:outline-teal-500 px-3 py-1"
                        placeholder="********"
                        minLength={5}
                    />

                    <p className={`${isSuccess.error ? "block" : "hidden"} text-red-500 italic mt-5`}>*the password doesn't match</p>

                    <button type="submit" className="mt-7 bg-white px-10 py-2">Create Password</button>
                </form>

            </section>
        </section>

    );
}

export default Verification;

