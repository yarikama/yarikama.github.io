import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Topbar from "./components/Topbar";
import AboutSection from "./components/AboutSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] "> {/* 背景黑色、按垂直排列 */}
      <Topbar />
      <div className="container mt-24 px-12 py-4">
        <HeroSection />
        <AboutSection />
      </div>
    </main>
  );
}
