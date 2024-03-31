import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
const useGetConversations = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    const getConversations = async () => {
      setLoading(true);
      try {
        const result = await fetch("api/users");
        if (!result.ok) {
          throw new Error("Error while fetching users");
        }
        const data = await result.json();
        setConversations(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    getConversations();
  }, []);

  return { loading, conversations };
};

export default useGetConversations;
