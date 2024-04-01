import React from "react";
import useConversation from "../../globalStateManagement/useConversation";
import { useSocketContext } from "../../contexts/SocketContext";

const Conversation = ({ conversation, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const {onlineUsers} = useSocketContext();
  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id)
  return (
    <>
      <div
        className={`flex gap-2 items-center hover:bg-sky-600 p-2 py-1 cursor-pointer ${
          isSelected ? "bg-sky-500" : ""
        }`}
        onClick={() => {
          setSelectedConversation(conversation);
        }}
      >
        <div className={`avatar ${isOnline ? "online":""}` }>
          <div className="w-16 rounded-full">
            <img src={conversation.profile} alt="use avatar" />
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">{conversation.fullName}</p>
            {/* <span className="text-xl">🎃</span> */}
          </div>
        </div>
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1"></div>}
    </>
  );
};

export default Conversation;
