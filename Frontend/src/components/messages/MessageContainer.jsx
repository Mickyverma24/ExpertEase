import React from "react";
import Messages from "./Messages";
import SendMessageInput from "./SendMessageInput";
import { TiMessages } from "react-icons/ti";
const MessageContainer = () => {
  const flag = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {/* let me first write here mid day meal headrer */}
      {flag ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-sky-700 px-4 py-2 mb-2">
            <span className="label-text">To:</span>{" "}
            <span className="text-gray-900 font-bold">John doe</span>
          </div>
          <Messages />
          <SendMessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 Jhon Doe ❄</p>
        <p>Select a Person to Start chating</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};

export default MessageContainer;
