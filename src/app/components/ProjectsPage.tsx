import React from "react";
import ProjectCard from "./shared/ProjectCard";
import { projectsData } from "@/utils/projectsData";

const ProjectsPage = () => {
  return (
    <main className="w-full h-screen flex flex-col space-y-10 py-20">
      <h1 className="text-3xl font-semibold text-white">My Projects</h1>
      <section className="grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-5">
        {projectsData.map((item, index) => (
          <ProjectCard
            key={index}
            name={item.name}
            image={item.image}
            techStack={item.techStack}
            githubUrl={item.githubUrl}
            url={item.url}
          />
        ))}
      </section>
    </main>
  );
};

export default ProjectsPage;
