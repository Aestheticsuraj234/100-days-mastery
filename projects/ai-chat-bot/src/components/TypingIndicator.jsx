import React from "react";
import { motion } from "framer-motion";
import { Bot } from "lucide-react";
const TypingIndicator = () => {
  return (
    <div className="flex gap-3 p-4 bg-indigo-50 dark:bg-indigo-950/30">
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-indigo-100 text-indigo-600 dark:bg-indigo-800 dark:text-indigo-200">
          <Bot size={18} />
        </div>
      </div>

      <div className="flex-1">
        <div className="flex items-center mb-1">
          <span className="font-medium text-sm text-gray-900 dark:text-gray-100">
            AI Assistant
          </span>
        </div>

        <div className="flex items-center">
          <div className="flex space-x-1">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-indigo-500 dark:bg-indigo-400 rounded-full"
                initial={{ opacity: 0.5 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>

          <span className="ml-2 text-sm text-gray-500 dark:text-gray-400">
            Thinking...
          </span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
