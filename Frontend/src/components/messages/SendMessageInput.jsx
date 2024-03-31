import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { BsSendFill } from "react-icons/bs";
import useSendMessage from "../../hooks/useSendMessage";
const SendMessageInput = () => {
  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message) {
      toast.error("Write a Message to send");
      return;
    }

    await sendMessage(message);
    setMessage("")
  };
  return (
    <div>
      <form className="px-4 my-3" onSubmit={handleSubmit}>
        <div className="w-full relative">
          <input
            type="text"
            placeholder="Write a Message To send"
            className="border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="absolute inset-y-0 end-0 flex items-center pe-3"
          >
            {loading ? (
              <span className="loading loading-spinner"></span>
            ) : (
              <BsSendFill />
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendMessageInput;
