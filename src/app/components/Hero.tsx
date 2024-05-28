import React from "react";
import SkillCard from "./shared/SkillCard";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { DiPostgresql } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { BiLogoGithub, BiLogoTypescript } from "react-icons/bi";
import { ImInstagram } from "react-icons/im";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const HeroPage = () => {
  const dataSkillCard = [
    {
      icon: RiJavascriptFill,
      text: "Javascript",
    },
    {
      icon: BiLogoTypescript,
      text: "Typescript",
    },
    {
      icon: RiNextjsFill,
      text: "Next.JS",
    },
    {
      icon: SiExpress,
      text: "Express.JS",
    },
    {
      icon: RiTailwindCssFill,
      text: "Tailwindcss",
    },
    {
      icon: DiPostgresql,
      text: "PostgreSQL",
    },
    {
      icon: BiLogoGithub,
      text: "Github",
    },
  ];
  const contactsButton = [
    { icon: ImInstagram, href: "https://www.instagram.com/_muhammad.farhan/" },
    {
      icon: FaLinkedinIn,
      href: "https://linkedin.com/in/muhammad-farhan-18bb1b235/",
    },
    { icon: FaGithub, href: "https://github.com/muhammadfarhan19" },
  ];
  return (
    <section className="w-full grid gap-y-5 items-center flex-1">
      <aside className="w-full flex justify-center items-start flex-col space-y-5">
        <h1 className="text-4xl capitalize text-white">hello!</h1>
        <div className="flex flex-wrap gap-x-2 items-end w-full">
          <h1 className="text-white text-3xl">I am</h1>
          <h1 className="text-orange-400 text-3xl font-semibold">
            Muhammad Farhan
          </h1>
        </div>
        <section className="flex gap-3 w-full">
          {contactsButton.map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="blank"
              className="w-10 h-10 grid place-items-center rounded-full bg-white hover:bg-orange-400 transition-all duration-150"
            >
              <item.icon />
            </a>
          ))}
          <button className="px-8 py-2 font-semibold rounded-full bg-orange-400 text-slate-900 transition-all duration-400 hover:text-slate-900 hover:bg-white">
            resume
          </button>
        </section>
      </aside>
      <aside className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 lg:grid-cols-8">
        {dataSkillCard.map((item, index) => (
          <SkillCard Icon={item.icon} text={item.text} key={index} />
        ))}
      </aside>
    </section>
  );
};

export default HeroPage;
