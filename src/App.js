import "./App.css";
import Contact from "./components/contact/contact";
import Education from "./components/education/education";
import Experience from "./components/experience/experience";
import Features from "./components/features/features";
import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Navbar from "./components/navbar/navbar";
import Projects from "./components/projects/projects";
import Skills from "./components/skills/skills";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Experience />
      <Education />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
