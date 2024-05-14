import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { GoogleAuthProvider } from "firebase/auth";

const SignIn = () => {
  const signIn = async () => {
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider);
  };

  return (
    <div>
      <GoogleButton onClick={signIn} />
    </div>
  );
};

export default SignIn;
