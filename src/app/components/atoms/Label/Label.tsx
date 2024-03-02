const Label: React.FC<LabelProps> = ({ htmlFor, children }) => {
    return (
        <label
            htmlFor={htmlFor}
            className="text-teal-600 font-semibold ">
            {children}:
        </label>
    )
}

export default Label;