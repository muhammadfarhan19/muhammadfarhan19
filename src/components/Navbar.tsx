import { useButton } from "@/hooks/useButton";
import Menu from "./Menu";
import Hamburger from "./ui/Hamburger";
import Toggle from "./ui/Toggle";
import { useDarkMode } from "@/hooks/useDarkMode";

const Navbar = () => {
  const { isDark, setIsDark } = useDarkMode();
  return (
    <nav
      className={`navbar md:px-10 lg:px-20 relative transition-all duration-200 ${
        isDark ? "bg-slate-900" : "bg-slate-100"
      }`}
    >
      <section className="navbar-start">
        <Hamburger />
        <Menu />
        <Toggle />
      </section>
      <section className="navbar-center">
        <a className={`text-2xl font-medium cursor-pointer ${isDark ? "text-slate-100" : "text-slate-900"}`}>Farhan</a>
      </section>
      <section className="navbar-end">
        <a
          className={`border-2 px-3 lg:px-6 py-1 lg:py-1.5 font-medium rounded-full cursor-pointer transition-all duration-200 ${
            isDark
              ? "border-slate-100 text-slate-100 hover:bg-slate-100 hover:text-slate-900"
              : "text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-slate-100"
          } `}
        >
          Resume
        </a>
      </section>
    </nav>
  );
};

export default Navbar;
