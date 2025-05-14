import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if(aboutSection){
        const yOffSet = -80;
        const y = aboutSection.getBoundingClientRect().top + window.pageYOffset + yOffSet;
        window.scrollTo({top:y,behavior:"smooth"})
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-b from-transparent to-indigo-50 dark:to-indigo-950/30"
    >
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/30 dark:bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-indigo-900 dark:text-indigo-200">
              <span className="block">Hi, I'm</span>
              <span className="text-indigo-600 dark:text-indigo-400">
                Sigma Developer
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium mb-6 text-muted-foreground">
              Fullstack Developer & UX Enthusiast
            </h2>
            <p className="text-lg mb-8 max-w-xl leading-relaxed text-muted-foreground">
              I build exceptional and accessible digital experiences for the
              web. Specialized in creating modern, responsive interfaces with
              clean and maintainable code.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                size="lg"
                onClick={scrollToAbout}
              >
                Explore My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="rounded-full border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950"
                asChild
              >
                <a href="#contact">Contact Me</a>
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-indigo-400 dark:border-indigo-600 shadow-xl animate-float">
              <img
                src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Developer Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>


<div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
     <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={scrollToAbout}
          >
            <ArrowDown className="h-6 w-6 text-indigo-600 dark:text-indigo-400" />
            <span className="sr-only">Scroll down</span>
          </Button>
</div>

      </div>
    </section>
  );
};

export default HeroSection;
