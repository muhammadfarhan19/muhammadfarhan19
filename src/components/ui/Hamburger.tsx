import { useButton } from "@/hooks/useButton";

const Hamburger = () => {
  const barStyle = "w-3/4 h-1 rounded bg-white transition-all duration-200 bg-slate-500";
  const {isOpen, setIsOpen} = useButton()
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="w-8 flex flex-col gap-1 items-center justify-center cursor-pointer"
    >
      <div
        className={`${barStyle} ${isOpen && "rotate-45 translate-y-2"}`}
      ></div>
      <div
        className={`${barStyle} ${isOpen && "opacity-0 -translate-x-5"}`}
      ></div>
      <div
        className={`${barStyle} ${isOpen && "-rotate-45 -translate-y-2"}`}
      ></div>
    </div>
  );
};

export default Hamburger;
