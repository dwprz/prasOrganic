import { NavigateFunction } from "react-router-dom";

export interface FormRegisterProps {
    handleRegister: (
      event: React.FormEvent<HTMLFormElement>,
      navigate: NavigateFunction,
      setRegisterState: React.Dispatch<React.SetStateAction<RegisterState>>
    ) => Promise<any>;
  }
  