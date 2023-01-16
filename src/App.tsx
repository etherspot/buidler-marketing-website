import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import "./fonts/graphik/GraphikBold.otf";
import { Features } from "./components/Features";

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  return (
    <div className={`min-h-[100vh] relative ${isDark ? "dark" : ""}`}>
      <div className="bg-white dark:bg-[#1A0F1E] text-black dark:text-white">
        <Navbar />
        <Hero />
        <Features />
      </div>
    </div>
  );
}

export default App;
