import { Button } from "@/components/ui/button"
import Navbar from "./components/layout/Navbar"
import { ThemeProvider } from "./providers/theme-provider"
import HeroSection from "./components/sections/HeroSection"
import AboutSection from "./components/sections/AboutSection"

function App() {
  return (
  <ThemeProvider>
  <Navbar/>
  <main>
   <HeroSection/>
   <AboutSection/>
    {/* Aboutsection */}
    {/* ProjectSection */}
    {/* SkillsSection */}
    {/* ContactSection */}
    {/*  */}
  </main>
  {/* footer */}
  </ThemeProvider>
  )
}

export default App
