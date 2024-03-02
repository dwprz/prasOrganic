import { useNavigate } from "react-router-dom";
import { useRegister } from "../../../../fragments/auth/Register/context";
import { InputAuth } from "../../../molecules/InputAuth/InputAuth";
import { Button } from "../../../atoms/Button/Button";
import { FormRegisterProps } from "./FormRegisterProps";

const inputsRegister = [
    {
        type: "text",
        id: "username",
        name: "username",
        placeholder: "johndoe23",
        htmlFor: "username",
        children: "Username:"
    },
    {
        type: "text",
        id: "full_name",
        name: "full_name",
        placeholder: "John Doe",
        htmlFor: "full_name",
        children: "Full Name"
    },
    {
        type: "tel",
        id: "phone_number",
        name: "phone_number",
        placeholder: "+62 8123456789",
        htmlFor: "phone_number",
        children: "Phone Number"
    }
]

export const FormRegister: React.FC<FormRegisterProps> = ({ handleRegister }) => {
    const navigate = useNavigate();
    const { setRegisterState } = useRegister()

    return (
        <form onSubmit={(e) => handleRegister(e, navigate, setRegisterState)}>
            <div className="flex flex-col gap-5">
                {
                    inputsRegister.map((input, index) => {
                        return (
                            <InputAuth
                                key={index}
                                htmlFor={input.htmlFor}
                                id={input.id}
                                name={input.name}
                                type={input.type}
                                placeholder={input.placeholder}
                            >
                                {input.children}
                            </InputAuth>
                        )
                    })
                }
            </div>

            <div className="w-full px-7 mt-7">
                <Button type="submit">
                    Register
                </Button>
            </div>

            <div className="flex justify-center mt-5" id="recaptcha"></div>
        </form>
    )
}