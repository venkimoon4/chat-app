import { auth } from "../firebase";

// eslint-disable-next-line react/prop-types
const Message = ({ msg }) => {
  console.log("msg", msg);
  const styles =
    msg.uid === auth.currentUser.uid ? "justify-end" : "justify-start";

  const bgColor = styles === "justify-end" ? "bg-blue-600" : "bg-green-600";

  return (
    <div className={`mt-1 flex ${styles}`}>
      <div>
        <p className="text-[0.65rem]">{msg.user}</p>
        <p
          className={`${bgColor} p-1 w-fit text-[0.85rem] text-white rounded-full rounded-br-2xl mt-[2px]`}
        >
          {msg.text}
        </p>
      </div>
    </div>
  );
};

export default Message;
