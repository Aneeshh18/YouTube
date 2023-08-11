import React, { useEffect } from "react";
import ChatMessages from "./ChatMessages";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../Utils/chatSlice";
import { generateRandomName } from "../Utils/helper";
import { generateRandomMessages } from "../Utils/helper";

const LiveChat = () => {
  const dispatch = useDispatch();

  const chatMessage = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomMessages(20) + "😄",
        })
      );
    }, 2000);

    return () => clearInterval(i);
  }, [dispatch]);

  return (
    <div>
      <h1 className="font-bold pl-2 shadow-lg border-black p-2">LiveChat</h1>
      <div className="border-4 h-[450px] overflow-y-scroll flex flex-col-reverse">
        {chatMessage.map((c, i) => (
          <ChatMessages key={i} name={c.name} message={c.message} />
        ))}
      </div>
    </div>
  );
};

export default LiveChat;
