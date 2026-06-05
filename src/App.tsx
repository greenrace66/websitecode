import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Research from "./components/Research";
import ResearchDetails from "./components/ResearchDetails";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import SocialHub from "./components/SocialHub";
import Contact from "./components/Contact";
import FinalManuscriptPage from "./components/FinalManuscriptPage";

function App() {
  const pathname = window.location.pathname.replace(/\/$/, "");
  const isFinalManuscriptPage = pathname === "/finalmanuscript";
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark",
  );

  useEffect(() => {
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  if (isFinalManuscriptPage) {
    return <FinalManuscriptPage />;
  }

  return (
    <div
      className={`min-h-screen bg-white text-slate-950 transition-colors ${isDarkMode ? "dark" : ""}`}
    >
      <Header
        isDarkMode={isDarkMode}
        onToggleDarkMode={() => setIsDarkMode((value) => !value)}
      />
      <main>
        <Hero />
        <About />
        <Projects />
        <Research />
        <ResearchDetails />
        <Blog />
        <Resume />
        <SocialHub />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 bg-white py-8 transition-colors">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-6 text-sm text-slate-500 md:flex-row">
          <p>&copy; {new Date().getFullYear()} Nikil Krishna.</p>
          <p>All Rights not reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
