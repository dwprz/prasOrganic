import { NavigateFunction } from "react-router-dom";

interface FormLoginProps {
  handleSignInRegular: (
    event: React.FormEvent<HTMLFormElement>,
    navigate: NavigateFunction
  ) => Promise<void>;
}
