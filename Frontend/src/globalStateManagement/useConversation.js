import { create } from "zustand";


const useConversation = create((set) => ({
  selectedConversation: null,
  setSelectedConversation: (newSelectedConversation) =>
    set((state) => ({ selectedConversation: newSelectedConversation })),
  messages: [],
  setMessages: (newMessages) => set((state) => ({ messages: newMessages })),
}));
export default useConversation;
