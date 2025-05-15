import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { SKILLS } from "../../lib/constant";
export default function SkillsSection() {
  const [animatedSkills, setAnimatedSkills] = useState({});
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector("#skills");
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  useEffect(() => {
    if (visible) {
      // Initialize all skills with 0 progress
      const initialSkills = {};
      SKILLS.forEach((category) => {
        category.technologies.forEach((tech) => {
          initialSkills[tech.name] = 0;
        });
      });
      setAnimatedSkills(initialSkills);

      // Animate each skill progressively with a small delay between each
      let delay = 0;
      SKILLS.forEach((category) => {
        category.technologies.forEach((tech) => {
          delay += 100;
          setTimeout(() => {
            setAnimatedSkills((prev) => ({
              ...prev,
              [tech.name]: tech.level,
            }));
          }, delay);
        });
      });
    }
  }, [visible]);

  return (
    <section
      id="skills"
      className="py-20 bg-white dark:bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="h-1.5 w-24 bg-indigo-200 dark:bg-indigo-800 rounded-full" />
              <div className="h-1.5 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full absolute top-0 left-0" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical skills and proficiency levels.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <div 
              key={index}
              className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-800 pb-2">
                {category.category}
              </h3>
              <div className="space-y-6">
                {category.technologies.map((tech, techIndex) => (
                  <div key={techIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium">{tech.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {animatedSkills[tech.name] || 0}%
                      </span>
                    </div>
                    <Progress 
                      value={animatedSkills[tech.name] || 0} 
                      className="h-2 bg-indigo-100 dark:bg-indigo-900/30"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}