import { useEffect, useState } from "react"
import useConversation from "../globalStateManagement/useConversation";
import toast from "react-hot-toast";

const useGetMessage = () => {
  const [loading,setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();
  useEffect(() => {
    const getMessages = async ()=>{
        setLoading(true)
        try {
            const result = await fetch(`/api/messages/${selectedConversation._id}`)
            const data = await result.json();
            if (data.error) throw new Error(data.error)
            setMessages(data)
        } catch (error) {
            toast.error(error.message) 
        }finally{
            setLoading(false)
        }
    } 

    if (selectedConversation?._id) getMessages(); 
  }, [selectedConversation?.id,setMessages])
  return  {messages,loading}
}

export default useGetMessage;