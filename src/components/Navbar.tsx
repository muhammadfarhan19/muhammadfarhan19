import { useButton } from "@/hooks/useButton";
import Menu from "./Menu";
import Hamburger from "./ui/Hamburger";
// import CV from '@/assets/CV.pdf'

const Navbar = () => {
  const {isOpen, setIsOpen} = useButton()
  return (
    <nav className={`navbar md:px-10 lg:px-20 relative ${isOpen ? "bg-slate-900" : "bg-white"}`}>
      <section className="navbar-start">
        <Hamburger />
        <Menu />
      </section>
      <section className="navbar-center">
        <a className="btn btn-ghost text-xl">farhan</a>
      </section>
      <section className="navbar-end">
        <a className="btn">Resume</a>
      </section>
    </nav>
  );
};

export default Navbar;
