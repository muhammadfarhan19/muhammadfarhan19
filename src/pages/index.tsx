import Navbar from "@/components/Navbar";
import { ButtonProvider } from "@/hooks/useButton";

export default function Home() {
  return (
    <main className="w-full h-screen bg-slate-100">
      <ButtonProvider>
        <Navbar />
      </ButtonProvider>
    </main>
  );
}
