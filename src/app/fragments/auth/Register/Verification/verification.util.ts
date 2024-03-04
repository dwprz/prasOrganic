import axios from "axios";
import { NavigateFunction } from "react-router-dom";

export const handleChange = (
  index: number,
  value: string,
  otp: string[],
  setOtp: React.Dispatch<React.SetStateAction<string[]>>,
  inputRefs: React.RefObject<HTMLInputElement>[]
) => {
  if (isNaN(Number(value))) return; // Hanya menerima angka
  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  if (value && index < 5) {
    inputRefs[index + 1].current!.focus();
  }
};

export const handleKeyDown = (
  index: number,
  e: React.KeyboardEvent<HTMLInputElement>,
  otp: string[],
  inputRefs: React.RefObject<HTMLInputElement>[]
) => {
  if (e.key === "Backspace" && index > 0 && !otp[index]) {
    if (inputRefs[index - 1].current) {
      inputRefs[index - 1].current!.focus();
    }
  } else if (e.key.match(/[0-9]/) && index < 5 && otp[index]) {
    if (inputRefs[index + 1].current) {
      inputRefs[index + 1].current!.focus();
    }
  }
};

export const handleVerifyOTP = async (
  event: React.FormEvent<HTMLFormElement>,
  registerState: RegisterState,
  otp: string[],
  setIsSuccess: React.Dispatch<
    React.SetStateAction<{ otp: boolean; error: boolean }>
  >,
  isSuccess: { otp: boolean; error: boolean }
) => {
  try {
    event.preventDefault();
    if (registerState) {
      const res = await registerState.data!.confirm(otp.join(""));
      const updateIsSuccess = { otp: true, error: false };
      if (res.user.accessToken) setIsSuccess(updateIsSuccess);
    }
  } catch (error) {
    console.log(error);
    const updateIsSuccess = { ...isSuccess, error: true };
    setIsSuccess(updateIsSuccess);
  }
};

export const handlePasswordSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  isSuccess: { otp: boolean; error: boolean },
  setIsSuccess: React.Dispatch<
    React.SetStateAction<{ otp: boolean; error: boolean }>
  >,
  registerState: RegisterState,
  navigate: NavigateFunction
) => {
  try {
    event.preventDefault();
    const { password, confirmPassword } = event.currentTarget;
    if (password.value !== confirmPassword.value) {
      const updateIsSuccess = { ...isSuccess, error: true };
      setIsSuccess(updateIsSuccess);
      return;
    }

    const user = { ...registerState };
    delete user.data;
    user.password = password.value;

    const res = await axios.post(
      "http://localhost:3300/api/users/register",
      user,
      {
        headers: {
          Authorization: import.meta.env.VITE_AUTHORIZATION_SECRET,
        },
      }
    );

    console.log(res, "res");
    navigate("/users/login");
  } catch (error) {
    console.log(error);
  }
};
