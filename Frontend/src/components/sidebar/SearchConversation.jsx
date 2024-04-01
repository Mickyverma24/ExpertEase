import {React,useState} from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../globalStateManagement/useConversation";
import useGetConversations from "../../hooks/useGetConversations"
import toast from "react-hot-toast";
const SearchConversation = () => {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation()
  const {conversations} = useGetConversations()
  const handleSubmit = (e) =>{
    e.preventDefault();
    if (!search) return 
    if (search.length<3) return  toast.error("search atleast three charachter")
    const conversation = conversations.find((c)=>c.fullName.toLowerCase().includes(search.toLowerCase()));
    if (conversation){
      setSelectedConversation(conversation)
      setSearch("")
    }
    else toast.error("No such user found")
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Serach...."
          className="input input-bordered rounded-full"
          value={search}
          onChange={(e)=>setSearch(e.target.value)}
        />
        <button type="submit" className="btn btn-circle bg-sky-500 text-white">
          <FaSearch className="w-6 h-6 outline-none" />
        </button>
      </form>
    </div>
  );
};

export default SearchConversation;
