import React from "react";
import { BsSendFill } from "react-icons/bs";
const SendMessageInput = () => {
  return <div>
    <form className="px-4 my-3">
        {/* ye jo button ko input k ander dala hai uska raaj ye realtive mai daba hai */}
        <div className="w-full relative">
            <input type="text" placeholder="Write a Message To send" className='border text-sm rounded-lg block w-full p-2.5  bg-gray-700 border-gray-600 text-white' />
            <button type="submit" className="absolute inset-y-0 end-0 flex items-center pe-3"><BsSendFill/></button>
        </div>
    </form>
  </div>;
};

export default SendMessageInput;
