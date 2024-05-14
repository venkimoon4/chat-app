import { useEffect, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Chat = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "message"), orderBy("time"));
    const getDataFromFireStore = onSnapshot(q, (dataFromDB) => {
      const messages = [];
      dataFromDB.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessage(messages);
    });

    return () => getDataFromFireStore();
  }, []);

  return (
    <div className="p-3">
      <div
        className="overflow-auto h-[350px] scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {message.map((msg) => {
          return <Message msg={msg} key={msg.id} />;
        })}
      </div>
      <SendMessage />
    </div>
  );
};

export default Chat;
