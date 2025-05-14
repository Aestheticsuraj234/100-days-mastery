import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/constant";
import { ThemeToggle } from "../ui/theme-toggle";
const Navbar = () => {
  const [isMenuOpen , setIsMenuOpen] = useState(false);
  const [isScrolled , setIsScrolled] = useState(false);

useEffect(()=>{
  const handleScroll = ()=>{
    setIsScrolled(window.scrollY > 20)
  }

  window.addEventListener("scroll" , handleScroll);

  return ()=>window.removeEventListener("scroll" , handleScroll)
},[])


const toggleMenu = ()=>{
  setIsMenuOpen(!isMenuOpen)
}

const closeMenu = ()=>{
  setIsMenuOpen(false);
}


  const handleNavLinkClick = (href) => {
    closeMenu();
    const element = document.querySelector(href);
    if (element) {
      const yOffset = -80; // Adjust based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ?  "bg-background/80 backdrop-blur-md shadow-sm":"bg-transparent"
        }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-bold text-indigo-600 dark:text-indigo-400"
        >
          Dev<span className="text-primary">Portfolio</span>
        </a>

        {/* Desktop Navigatiopn */}
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick(link.href);
              }}
              className="text-sm font-medium text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              {link.title}
            </a>
          ))}
          <ThemeToggle/>
        </nav>


        {/* Mobile Mennu Button */}
        <div className="flex items-center gap-4 md:hidden">
              <ThemeToggle/>
              <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="md:hidden"
              
              >
                {
                  isMenuOpen ? <X size={24}/> : <Menu size={24}/>
                }
              </Button>
        </div>
      </div>

         {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavLinkClick(link.href);
                  }}
                  className="text-sm font-medium py-2 text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
