import React, { useEffect, useRef } from "react";
import { useChat } from "../context/ChatContext";

import { MessageItem } from "./MessageItem";
import TypingIndicator from "./TypingIndicator";
const MessageList = () => {
  const { state } = useChat();
  const messageEndRef = useRef(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [state.message]);

  if (state.message.length === 0) {
    return (
      <div className="flex-1 p-6 flex items-center justify-center">
        <div className="text-center max-w-md mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2">
            Welcome to Gemini Chat
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Ask me anything about the latest news, technology, or any topic of
            your choice. I am here to help you with your queries and provide you
            with the best information possible.
          </p>

          <div className="flex flex-col gap-4 text-left bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm">
            <p className="text-sm font-medium text-gray-700 dark:text-gray-200">
              Try These Examples Questions
            </p>

            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
              <li>• "Explain quantum computing in simple terms"</li>
              <li>• "Write a short poem about the ocean"</li>
              <li>• "How do I make a delicious pasta sauce?"</li>
              <li>• "What are some good exercises for beginners?"</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto divide-y-auto divide-gray-200 dark:divide-gray-700 x">
      {state.message.map((message) => (
        <MessageItem key={message.id} message={message} />
      ))}
      {state.isLoading && <TypingIndicator />}
      <div ref={messageEndRef} />
    </div>
  );
};

export default MessageList;
