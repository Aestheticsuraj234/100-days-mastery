import { Info, Moon, Sun, Trash } from "lucide-react";
import React from "react";
import { useTheme } from "../context/ThemeContext";
import { useChat } from "../context/ChatContext";
const Header = () => {

  const {theme , toggleTheme} = useTheme();
  const {apiKeySet , clearChat} = useChat()
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm bg-white/90 dark:bg-gray-900/90 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
              <span className="text-white font-bold text-xl">G</span>
            </div>
            <h1 className="ml-3 text-xl font-bold text-gray-900 dark:text-white">
              Gemini Chat
            </h1>
            {!apiKeySet && (
              <div className="ml-3 flex items-center text-amber-600 dark:text-amber-400">
                <Info size={16} className="mr-1" />
                <span className="text-sm">API Key not set</span>
              </div>
            )}
          </div>

          <div className="flex items-center space-x-3">
            <button
              onClick={clearChat}
              className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              title="clear chat"
            >
              <Trash size={20} />
            </button>

            <button
            onClick={toggleTheme}
            className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"    
            title={`Switch to ${theme === "light" ? "dark" :"light"} mode`}        
            >
{
    theme === "light" ? <Moon size={20}/> : <Sun size={20} />
}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
