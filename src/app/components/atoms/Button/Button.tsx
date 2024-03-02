import { ButtonLoginGoogleProps, ButtonProps } from "./ButtonProps"

export const Button: React.FC<ButtonProps> = ({ children, type }) => {
    return (
        <button type={type} className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white w-full rounded-lg">
            {children}
        </button>
    )
}

