import { HeartIcon } from "lucide-react";
import SocialLinks from "../shared/SocialLinks";


export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-black py-12 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <a href="#home" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Dev<span className="text-primary">Portfolio</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              Building beautiful web experiences
            </p>
          </div>
          
          <div className="mb-4 md:mb-0">
            <SocialLinks />
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} John Developer. All rights reserved.
          </p>
          
          <p className="text-sm text-muted-foreground flex items-center mt-4 md:mt-0">
            Made with <HeartIcon className="h-4 w-4 text-red-500 mx-1" /> using React & Tailwind
          </p>
        </div>
      </div>
    </footer>
  );
}