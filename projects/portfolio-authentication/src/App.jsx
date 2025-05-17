import { Button } from "@/components/ui/button"
import Navbar from "./components/layout/Navbar"
import { ThemeProvider } from "./providers/theme-provider"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"
import ProjecSection from "./components/sections/ProjecSection"
import SkillsSection from "./components/sections/SkillsSection"
import ContactSection from "./components/sections/ContactSection"
import { Toaster } from "sonner"
import Footer from "./components/layout/Footer"

function App() {
  return (
  <ThemeProvider>
  <Navbar/>
  <main>
    <Toaster/>
   <HeroSection/>
   <AboutSection/>
   <ProjecSection/>
   <SkillsSection/>
   <ContactSection/>
  </main>
  <Footer/>
  {/* footer */}
  </ThemeProvider>
  )
}

export default App
