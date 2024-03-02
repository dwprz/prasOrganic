import React, { createContext, useContext, useState } from "react";

const RegisterContext = createContext<RegisterContextType>({
    registerState: {} as RegisterState,
    setRegisterState: () => { }
});

const RegisterContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [registerState, setRegisterState] = useState<RegisterState>({} as RegisterState);

    return (
        <RegisterContext.Provider
            value={{ registerState, setRegisterState }}
        >
            {children}
        </RegisterContext.Provider>
    )
}

export const useRegister = () => useContext(RegisterContext);
export default RegisterContextProvider;
