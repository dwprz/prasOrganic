
import { useNavigate } from "react-router-dom";
import { Button } from "../../../atoms/Button/Button";
import { InputAuth } from "../../../molecules/InputAuth/InputAuth";
import { FormLoginProps } from "./FormLoginProps";

const inputsLogin = [
    {
        type: "text",
        id: "username",
        name: "username",
        placeholder: "Username",
        htmlFor: "username",
        children: "Username:"
    },
    {
        type: "password",
        id: "password",
        name: "password",
        placeholder: "********",
        htmlFor: "password",
        children: "Password"
    }
]

export const FormLogin: React.FC<FormLoginProps> = ({ handleSignInRegular }) => {
    const navigate = useNavigate();
    return (
        <form onSubmit={(e) => handleSignInRegular(e, navigate)}>
            <div className="flex flex-col gap-5">

                {
                    inputsLogin.map((input, index) => {
                        return (
                            <InputAuth
                                key={index}
                                type={input.type}
                                id={input.id}
                                name={input.name}
                                placeholder={input.placeholder}
                                htmlFor={input.htmlFor}

                            >
                                {input.children}
                            </InputAuth>
                        )
                    })
                }

            </div>

            <div className="w-full px-7 mt-7">
                <Button type="submit">
                    Login
                </Button>
            </div>
        </form>
    );
}



