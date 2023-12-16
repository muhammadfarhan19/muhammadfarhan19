import Navbar from "@/components/Navbar";
import { ButtonProvider } from "@/hooks/useButton";
import { DarkModeProvider } from "@/hooks/useDarkMode";

export default function Home() {
  return (
    <main className="w-full h-screen bg-slate-100">
      <DarkModeProvider>
        <ButtonProvider>
          <Navbar />
        </ButtonProvider>
      </DarkModeProvider>
    </main>
  );
}
