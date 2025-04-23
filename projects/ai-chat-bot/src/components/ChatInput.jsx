import { Send } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import { useChat } from "../context/ChatContext";
import { p } from "framer-motion/client";

const ChatInput = () => {
  const [message, setMessage] = useState("");

  const {sendMessage , state} = useChat();
  const textareaRef = useRef(null);

  const MAX_LENGTH = 2000;

  useEffect(()=>{
    if(textareaRef.current){
        textareaRef.current.style.height = "auto";
        textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 150)}px`;
    }
  },[message])

  const handleSubmit = (e)=>{
    e.preventDefault();

    if(message.trim() && !state.isLoading){
        sendMessage(message)
        setMessage("");

        // reset textarea height
        if(textareaRef.current){
            textareaRef.current.style.height = "auto";
          
        }
    }

  }


  const handleKeyDown = (e)=>{
    if(e.key === "Enter" && !e.shiftKey){
        e.preventDefault();
        handleSubmit(e);
    }
  }
  return (
    <div className="border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 backgrop-blur-sm bg-opacity-70 dark:bg-opacity-70">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div
          className="relative flex items-end bg-gray-50 dark:bg-gray-900 rounded-lg border
     border-gray-200 dark:border-gray-700 focus-within:ring-2 focus-within:ring-indigo-500"
        >
          <textarea
            ref={textareaRef}
            value={message}
            onKeyDown={handleKeyDown}
            onChange={(e) => setMessage(e.target.value.slice(0, MAX_LENGTH))}
            placeholder="Type Your Message Here..."
            className="flex-1 max-h-[150px] py-3 px-4 bg-transparent border-0 resize-none focus:ring-0 focus:outline-none text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400"
            rows={1}
            disabled={state.isLoading}
          />
          <div className="flex items-center px-3 py-3">
            <div className="text-xs text-gray-500 dark:text-gray-400 mr-2">
              {message.length}/{MAX_LENGTH}
            </div>

            <button
            type="submit"
            disabled={!message.trim() || state.isLoading}
            className={
                `p-2 rounded-full ${
                !message.trim() ? "bg-gray-200 text-gray-500 dark:bg-gray-700 dark:text-gray-400" :"bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"} transition-colors duration-200`
            }
            >
                <Send size={18}/>
            </button>
          </div>
        </div>
        {
          state.error && (
            <p className="mt-2 text-sm text-red-600 dark:text-red-400">{state.error}</p>
          )
        }
      </form>
    </div>
  );
};

export default ChatInput;
