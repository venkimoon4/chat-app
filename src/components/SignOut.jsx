import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const SignOut = () => {
  const logout = () => {
    signOut(auth);
  };

  return (
    <div>
      <button
        onClick={logout}
        className="bg-white px-4 py-3 font-bold rounded-sm"
      >
        Signout
      </button>
    </div>
  );
};

export default SignOut;
