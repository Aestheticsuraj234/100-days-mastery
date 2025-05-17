import React from "react";
import { Button } from "@/components/ui/button";
import { SOCIAL_LINKS } from "../../lib/constant";
import * as LucideIcons from "lucide-react";

const SocialLinks = () => {
  return (
    <div className="flex space-x-2">
      {SOCIAL_LINKS.map((link, index) => {
        const Icon = LucideIcons[link.icon];

        return (
          <Button
            key={index}
            variant="outline"
            size="icon"
            className="rounded-full border-indigo-200 dark:border-indigo-800 hover:border-indigo-600 dark:hover:border-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400"
            asChild
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              {Icon && <Icon className="h-5 w-5" />}
            </a>
          </Button>
        );
      })}
    </div>
  );
};

export default SocialLinks;
