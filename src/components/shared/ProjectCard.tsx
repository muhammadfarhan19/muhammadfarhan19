import { ProjectCardType } from "@/utils/types";
import Image from "next/image";
import React from "react";
import { BiLogoGithub } from "react-icons/bi";

const ProjectCard: React.FC<ProjectCardType> = ({
  image,
  url,
  name,
  githubUrl,
  techStack,
}) => {
  return (
    <div className="w-full h-auto shadow-lg p-4 rounded-md flex flex-col gap-y-4 bg-white transition-all duration-200 scale-95 hover:scale-100">
      <section className="w-full rounded-lg overflow-hidden">
        <Image src={image} alt={name} />
      </section>
      <section className="flex flex-col gap-y-2">
        <a
          href={url}
          className="cursor-pointer hover:underline font-semibold"
          target="_blank"
        >
          {name}
        </a>
        <aside className="flex justify-between">
          <section className="flex gap-x-2">
            {techStack?.length &&
              techStack.map((item, index) => (
                <item.icon key={index} className="w-5 h-5" />
              ))}
          </section>
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              className="transition-all duration-150 hover:-translate-y-1"
            >
              <BiLogoGithub className="w-5 h-5" />
            </a>
          )}
        </aside>
      </section>
    </div>
  );
};

export default ProjectCard;
