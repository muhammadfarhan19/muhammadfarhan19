import { useButton } from "@/hooks/useButton";
import ContactIcon from "./svgs/ContactIcon";
import ProfileIcon from "./svgs/ProfileIcon";
import ProjectsIcon from "./svgs/ProjectsIcon";

const Menu = () => {
  const {isOpen, setIsOpen} = useButton();

  const menuStyle = "menu dropdown-content p-2 bg-base-100 rounded-box w-52 shadow-xl absolute transition-all duration-200 translate-y-24"

  const contacts = [
    {
      icon: <ProfileIcon />,
      name: "Profile",
    },
    {
      icon: <ProjectsIcon />,
      name: "Projects",
    },
    {
      icon: <ContactIcon />,
      name: "Contact Me",
    },
  ];
  return (
    <ul
      tabIndex={0}
      className={`${menuStyle} ${!isOpen && "-translate-x-72 opacity-0 border-base-200"}`}
    >
      {contacts.map((contact, index) => (
        <li key={index} className="transition-all duration-200 hover:ps-2">
          <a>
            {contact.icon} {contact.name}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Menu;
