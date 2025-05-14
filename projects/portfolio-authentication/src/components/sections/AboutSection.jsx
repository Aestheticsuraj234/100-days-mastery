import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-black relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-indigo-50 to-transparent dark:from-indigo-950/30 dark:to-transparent" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="h-1.5 w-24 bg-indigo-200 dark:bg-indigo-800 rounded-full" />
              <div className="h-1.5 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full absolute top-0 left-0" />
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Get to know more about my background, experience, and what drives me
            as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative max-w-md">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-indigo-600 dark:border-indigo-400 rounded-lg" />

              <div className="relative z-10 rounded-lg overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="About Me"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-2xl font-bold mb-4 text-indigo-600 dark:text-indigo-400">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              I'm a passionate Frontend Developer with 5+ years of experience
              building responsive web applications. I began my journey as a
              self-taught developer, constantly exploring new technologies and
              frameworks to enhance my skills.
            </p>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              My approach combines clean code principles with a keen eye for
              design, ensuring that the applications I build are not only
              functional but also provide a great user experience. I'm
              constantly learning and growing, staying up-to-date with the
              latest industry trends and best practices.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <Card className="border-indigo-100 dark:border-indigo-900/50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-primary mb-2">Education</h4>
                  <p className="text-muted-foreground">
                    B.S. Computer Science, Tech University
                  </p>
                </CardContent>
              </Card>
              <Card className="border-indigo-100 dark:border-indigo-900/50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-primary mb-2">Experience</h4>
                  <p className="text-muted-foreground">
                    5+ Years of Professional Experience
                  </p>
                </CardContent>
              </Card>

              <Card className="border-indigo-100 dark:border-indigo-900/50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-primary mb-2">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </CardContent>
              </Card>

              <Card className="border-indigo-100 dark:border-indigo-900/50">
                <CardContent className="p-4">
                  <h4 className="font-medium text-primary mb-2">
                    Availability
                  </h4>
                  <p className="text-muted-foreground">
                    Available for freelance
                  </p>
                </CardContent>
              </Card>
            </div>

            <a href="/resume.pdf" download>
              <Button
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full"
                size="lg"
              >
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
