import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import HeroPage from "./components/Hero";
import ProjectsPage from "./components/ProjectsPage";

export default function Home() {
  return (
    <>
      <main className="flex h-screen flex-col items-center space-y-5 md:space-y-10 px-10 md:px-20 lg:px-32 bg-slate-900">
        <Navbar />
        <HeroPage />
      </main>
      <main className="flex h-full flex-col items-center md:space-y-10 px-10 md:px-20 lg:px-32 bg-slate-900">
        <ProjectsPage />
      </main>
    </>
  );
}
