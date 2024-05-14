import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useRef } from "react";
import { auth, db } from "../firebase";
import { LuSendHorizonal } from "react-icons/lu";
const SendMessage = () => {
  const inputRef = useRef();

  const sendDataToFireStore = async () => {
    if (inputRef.current.value !== "") {
      const { uid, displayName } = auth.currentUser;
      await addDoc(collection(db, "message"), {
        text: inputRef.current.value,
        time: serverTimestamp(),
        user: displayName,
        uid,
      });
      inputRef.current.value = "";
    } else {
      alert("please write message to send");
    }
  };

  return (
    <div className="w-[100%] absolute bottom-0 left-0 right-0 flex">
      <input
        ref={inputRef}
        type="text"
        className="p-2 outline-none w-[0] flex-1 bg-black text-white"
        placeholder="enter your message here!"
      />
      <button
        onClick={sendDataToFireStore}
        className="bg-green-600 text-white px-3  py-2 flex items-center gap-1"
      >
        Send <LuSendHorizonal />
      </button>
    </div>
  );
};

export default SendMessage;
