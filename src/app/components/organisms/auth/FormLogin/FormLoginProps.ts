import { NavigateFunction } from "react-router-dom";

export interface FormLoginProps {
  handleSignInRegular: (
    event: React.FormEvent<HTMLFormElement>,
    navigate: NavigateFunction
  ) => Promise<void>;
}
