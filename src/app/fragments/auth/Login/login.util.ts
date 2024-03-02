import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../../../../lib/firebase/init";
import { NavigateFunction } from "react-router-dom";
import axios from "axios";

const auth = firebaseAuth;
const provider = new GoogleAuthProvider();

export const handleSignInGoogle = (navigate: NavigateFunction) => {
  signInWithPopup(auth, provider)
    .then((result: any) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);

      if (credential) {
        navigate("/");
      }
    })
    .catch((error: any) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const handleSignInRegular = async (
  event: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction
) => {
  try {
    event.preventDefault();
    const { username, password } = event.currentTarget;
    const user = {
      username: username.value,
      password: password.value,
    };

    await axios.post("http://localhost:3300/api/users/login", user);
    navigate("/");
  } catch (error) {
    console.log(error);
  }
};
