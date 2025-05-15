import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PROJECTS } from "../../lib/constant";
const ProjecSection = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  return (
    <section
      id="projects"
      className="py-20 bg-indigo-50 dark:bg-indigo-950/20 relative "
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="h-1.5 w-24 bg-indigo-200 dark:bg-indigo-800 rounded-full" />
              <div className="h-1.5 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full absolute top-0 left-0" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Showcase of my recent work. These projects reflect my skills and
            experience in web development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all duration-300 bg-white dark:bg-gray-900"
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-transform duration-500 ${
                    hoveredCard === project.id ? "scale-110" : "scale-100"
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 p-4 w-full flex justify-between items-end">
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex space-x-2">
                    {project.githubLink && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full"
                        asChild
                      >
                        <a
                          href={project.githubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub Repository"
                        >
                          <Github className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                    {project.liveLink && (
                      <Button
                        variant="ghost"
                        size="icon"
                        className="bg-black/30 backdrop-blur-sm hover:bg-black/50 text-white rounded-full"
                        asChild
                      >
                        <a
                          href={project.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="bg-indigo-100 hover:bg-indigo-200 text-indigo-800 dark:bg-indigo-900/50 dark:hover:bg-indigo-900 dark:text-indigo-300"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="rounded-full border-indigo-600 dark:border-indigo-400 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 dark:hover:bg-indigo-950"
            asChild
          >
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-4 w-4" /> View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjecSection;
