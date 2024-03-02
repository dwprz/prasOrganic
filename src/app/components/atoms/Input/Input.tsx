const Input: React.FC<InputProps> = ({ type, name, id, placeholder }) => {
    return (
        <input
            type={type}
            name={name}
            id={id}
            className="border-2 outline-teal-600 border-teal-600 px-5 py-2 mt-1 rounded-lg"
            placeholder={placeholder}
            required
        />
    )
}

export default Input;