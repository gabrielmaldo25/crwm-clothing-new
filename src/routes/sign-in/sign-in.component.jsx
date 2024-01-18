import { useEffect } from "react";
import {
  auth,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase.utils";
import { getRedirectResult } from "firebase/auth";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
    //console.log(response);
  };

  /* const logGoogleRedirectUser = async () => {
    const { user } = await signInWithGoogleRedirect();
    //const userDocRef = await createUserDocumentFromAuth(user);
    console.log(user);
  }; */

  return (
    <div>
      <h1>SignIn</h1>{" "}
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm />
    </div>
  );
};

export default SignIn;
