import { useNavigate } from "react-router-dom";
import { ButtonLoginGoogleProps } from "./button_props"

const ButtonLoginGoogle: React.FC<ButtonLoginGoogleProps> = ({ type, handleSignInGoogle }) => {
    const navigate = useNavigate();

    return (
        <button
            onClick={() => handleSignInGoogle(navigate)}
            type={type}
            className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white w-full rounded-lg flex flex-row justify-center items-center gap-1"
        >
            Login With Google
            <img
                src="/assets/icons/google-svgrepo-com.svg"
                alt="google icon"
                className="w-6 h-6" />
        </button>
    )
}

export default ButtonLoginGoogle;