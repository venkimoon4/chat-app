import { useEffect, useState, useRef } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "../firebase";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    const q = query(collection(db, "message"), orderBy("time"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
      scrollToBottom();
    });

    return () => unsubscribe();
  }, []);

  const scrollToBottom = () => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="p-3">
      <div
        className="overflow-auto h-[350px] scroll-smooth"
        style={{ scrollbarWidth: "none" }}
      >
        {messages.map((msg) => (
          <Message msg={msg} key={msg.id} />
        ))}
        <div ref={chatEndRef} />
      </div>
      <SendMessage />
    </div>
  );
};

export default Chat;
