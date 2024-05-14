import { useAuthState } from "react-firebase-hooks/auth";
import SignIn from "./SignIn";
import SignOut from "./SignOut";
import { auth } from "../firebase";

const Navbar = () => {
  const [user] = useAuthState(auth);

  return (
    <header className="flex justify-between p-2 w-[100%] items-center bg-gray-700">
      <h1 className="text-[2rem] text-white">Chat App</h1>
      {user ? <SignOut /> : <SignIn />}
    </header>
  );
};

export default Navbar;
