import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Topbar from "./components/Topbar";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212] "> {/* 背景黑色、按垂直排列 */}
      <Topbar />
      <div className="container mx-auto px-12 py-4">
        <HeroSection />
      </div>
    </main>
  );
}
