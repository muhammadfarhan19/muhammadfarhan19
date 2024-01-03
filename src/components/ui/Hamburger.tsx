import { useButton } from "@/hooks/useButton";
import { useDarkMode } from "@/hooks/useDarkMode";

const Hamburger = () => {
  const { isDark, setIsDark } = useDarkMode();
  const { isOpen, setIsOpen } = useButton();

  const barStyle = "w-full h-1 rounded transition-all duration-200";
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="w-6 h-6 -1 flex flex-col gap-0.5 lg:gap-1 items-center justify-center cursor-pointer"
    >
      <div
        className={`${barStyle} ${isOpen && "rotate-45 translate-y-1 lg:translate-y-2"} ${
          isDark ? "bg-slate-300" : "bg-slate-900"
        }`}
      ></div>
      <div
        className={`${barStyle} ${isOpen && "opacity-0 -translate-x-5"} ${
          isDark ? "bg-slate-300" : "bg-slate-900"
        }`}
      ></div>
      <div
        className={`${barStyle} ${isOpen && "-rotate-45 -translate-y-2"} ${
          isDark ? "bg-slate-300" : "bg-slate-900"
        }`}
      ></div>
    </div>
  );
};

export default Hamburger;
