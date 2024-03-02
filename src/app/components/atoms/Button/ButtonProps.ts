import { NavigateFunction } from "react-router-dom";

export interface ButtonProps {
  type: "submit" | "reset" | "button" | undefined;
  children: React.ReactNode;
}

export interface ButtonLoginGoogleProps {
  type: "submit" | "reset" | "button" | undefined;
  handleSignInGoogle: (navigate: NavigateFunction) => void;
}

export interface ButtonLinkProps {
  marginTop: string;
  to: string;
  className: string;
  children: React.ReactNode;
}
