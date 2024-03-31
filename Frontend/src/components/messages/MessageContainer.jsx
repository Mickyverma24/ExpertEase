import React, { useEffect } from "react";
import Messages from "./Messages";
import SendMessageInput from "./SendMessageInput";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../globalStateManagement/useConversation";
import { useAuthContext } from "../../contexts/AuthContext";
const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
   // while unmouning use clean up and reset the selectedConversation
    return () => 
      setSelectedConversation(null)
    
  },[setSelectedConversation] )
  
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {/* let me first write here mid day meal headrer */}
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-sky-700 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages  />
          <SendMessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  const {authUser} = useAuthContext();
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>{`Welcome 👋 ${
          authUser.fullName
        } ❄`}</p>
        <p>Select a Person to Start chating</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
