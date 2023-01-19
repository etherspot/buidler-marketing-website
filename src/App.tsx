import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import "./fonts/graphik/GraphikBold.otf";
import { Features } from "./components/Features";
import { Supported } from "./components/Supported";
import { Cards } from "./components/Cards";
import { Implementation } from "./components/Implementation";
import { Batching } from "./components/Batching";
import { Discord } from "./components/Discord";
import { Footer } from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState<boolean>(true);
  return (
    <div className={`min-h-[100vh] relative overflow-x-hidden ${isDark ? "dark" : ""}`}>
      <div className="bg-white dark:bg-[#130C1D] text-black dark:text-white">
        <Navbar />
        <Hero />
        <Features />
        <div className="flex justify-center my-4">
          <a target={"_blank"} href="https://docs.etherspot.dev/" className="px-16 py-4 custom-button text-[20px] font-bold">Read Docs</a>
        </div>
        <Supported />
        <Cards />
        <Implementation />
        <Batching />
        <Discord />
        <Footer />
      </div>
    </div>
  );
}

export default App;
