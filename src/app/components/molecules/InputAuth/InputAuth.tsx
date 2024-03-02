import Input from "../../atoms/Input/Input"
import Label from "../../atoms/Label/Label"

export const InputAuth: React.FC<InputAuthProps> = (props) => {
    const { children, htmlFor, id, type, name, placeholder } = props;
    return (
        <div className="flex flex-col mx-7">
            <Label htmlFor={htmlFor}>
                {children}
            </Label>
            <Input
                id={id}
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}