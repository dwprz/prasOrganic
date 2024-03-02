import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { NavigateFunction } from "react-router-dom";
import { firebaseAuth } from "../../../../lib/firebase/init";

export const handleRegister = async (
    event: React.FormEvent<HTMLFormElement>,
    navigate: NavigateFunction,
    setRegisterState: React.Dispatch<React.SetStateAction<RegisterState>>
) => {
    event.preventDefault();
    const { username, full_name, phone_number } = event.currentTarget
    const userData = {
        username: username.value,
        full_name: full_name.value,
        phone_number: phone_number.value
    }

    const confirm = await sendOtp(userData, setRegisterState)
    if (confirm) {
        navigate("/users/register/verification");
    }
}

const sendOtp = async (
    userData: RegisterState,
    setRegisterState: React.Dispatch<React.SetStateAction<RegisterState>>
) => {
    try {
        const recaptcha = new RecaptchaVerifier(firebaseAuth, "recaptcha", {})
        const confirmation = await signInWithPhoneNumber(firebaseAuth, userData.phone_number, recaptcha)
        setRegisterState({ ...userData, data: confirmation })
        return confirmation
    } catch (error: any) {
        console.log(error);
    }

}
