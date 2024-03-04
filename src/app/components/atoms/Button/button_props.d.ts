import { NavigateFunction } from "react-router-dom";

interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}

interface ButtonLoginGoogleProps {
  type: "submit" | "reset" | "button" | undefined;
  handleSignInGoogle: (navigate: NavigateFunction) => void;
}

interface ButtonLinkProps {
  marginTop: string;
  to: string;
  className: string;
  children: React.ReactNode;
}
