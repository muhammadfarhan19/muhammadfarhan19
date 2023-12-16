import { useDarkMode } from "@/hooks/useDarkMode";
import DarkIcon from "../svgs/DarkIcon";
import LightIcon from "../svgs/LightIcon";

const Toggle = () => {
  const {isDark, setIsDark} = useDarkMode();
  return (
    <button
      title="Toggle Theme"
      onClick={() => setIsDark(!isDark)}
      className={` lg:ms-3 w-10 h-10 rounded-full grid place-items-center ${isDark ? "border-slate-100" : "border-slate-900"}`}
    >
      {
        isDark ? <LightIcon /> : <DarkIcon />
      }
      
    </button>
  );
};

export default Toggle;

/* 
transition-colors 
        duration-500 
        ease-in
        focus:outline-none 
        focus:ring-2 
        focus:ring-blue-700 
        dark:focus:ring-blue-600 
        focus:border-transparent
*/
