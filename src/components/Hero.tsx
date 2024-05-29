import React from "react";
import SkillCard from "./shared/SkillCard";
import { contactsButton, dataSkillCard } from "@/utils/projectsData";
import Image from "next/image";
import heroImage from "./../../public/assets/avatar.png";

export const HeroPage = () => {
  return (
    <section className="w-full grid gap-y-5 items-center flex-1">
      <aside className="w-full flex justify-between">
        <section className="flex items-start justify-around flex-col space-y-5 animate__animated animate__fadeIn">
          <h1 className="text-4xl capitalize text-white font-semibold">
            hello!
          </h1>
          <div className="flex flex-wrap gap-x-2 items-end w-full">
            <h1 className="text-white text-2xl">I am</h1>
            <h1 className="text-orange-400 text-2xl md:text-3xl font-semibold">
              Muhammad Farhan
            </h1>
          </div>
          <h1 className="text-orange-400 text-3xl md:text-5xl font-semibold">
            Website Developer
          </h1>
          <section className="flex gap-3 w-full">
            {contactsButton.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="blank"
                className="cursor-pointer w-10 h-10 grid place-items-center rounded-full bg-white hover:bg-orange-400 transition-all duration-150"
              >
                <item.icon />
              </a>
            ))}
            <a
              href="./../../../public/assets/resume.pdf"
              download
              className="cursor-pointer px-8 py-2 font-semibold rounded-full bg-orange-400 text-slate-900 transition-all duration-400 hover:text-slate-900 hover:bg-white"
            >
              resume
            </a>
          </section>
        </section>
        <section className="hidden md:flex">
          <aside className="max-w-[400px]">
            <Image
              src={heroImage}
              alt="hero image"
              className="animate__animated animate__pulse"
            />
          </aside>
        </section>
      </aside>
      <aside className="w-full grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-6 lg:grid-cols-6 animate__animated animate__fadeInUp">
        {dataSkillCard.map((item, index) => (
          <SkillCard Icon={item.icon} text={item.text} key={index} />
        ))}
      </aside>
    </section>
  );
};

export default HeroPage;
