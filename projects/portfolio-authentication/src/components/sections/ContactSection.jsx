import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import SocialLinks from "../shared/SocialLinks";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon☀️");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-indigo-50 dark:bg-indigo-950/20 relative"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-block mb-4">
            <div className="relative">
              <div className="h-1.5 w-24 bg-indigo-200 dark:bg-indigo-800 rounded-full" />
              <div className="h-1.5 w-12 bg-indigo-600 dark:bg-indigo-400 rounded-full absolute top-0 left-0" />
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium mb-2">Location</h4>
                  <p className="text-muted-foreground">San Francisco, CA</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Email</h4>
                  <p className="text-muted-foreground">
                    contact@jhondeveloper.com
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Phone</h4>
                  <p className="text-muted-foreground">+1 (123) 456-7890</p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Social Media</h4>
                  <SocialLinks />
                </div>
              </div>
            </div>

            <div className="lg:col-span-3 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-6 text-indigo-600 dark:text-indigo-400">
                Send Me a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Your email"
                      className="bg-gray-50 dark:bg-gray-800"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="Subject"
                    className="bg-gray-50 dark:bg-gray-800"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Your message"
                    className="min-h-32 bg-gray-50 dark:bg-gray-800"
                  />
                </div>

                <Button
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md mt-2"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="animate-spin mr-2">⟳ </span> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" /> Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
