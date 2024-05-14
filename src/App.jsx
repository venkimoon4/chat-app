import "./App.css";
import Chat from "./components/Chat.jsx";
import Navbar from "./components/Navbar";
import { auth } from "./firebase.js";
import { useAuthState } from "react-firebase-hooks/auth";

function App() {
  const [user] = useAuthState(auth);

  console.log(user?.email);

  return (
    <div className="w-[100%] h-[600px] flex justify-center items-center bg-gray-400">
      <div className="bg-white w-[50%] h-[80%] relative">
        <Navbar />
        {user && <Chat />}
      </div>
    </div>
  );
}

export default App;
