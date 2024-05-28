import { BiLogoTypescript } from "react-icons/bi";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiChakraui, SiExpress } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { ProjectCardType } from "./types";
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa";

import bayiSehat from "./../../public/assets/bayi-sehat.png";
import sosmedDashboard from "./../../public/assets/sosmed-dashboard.png";
import expenseChart from "./../../public/assets/expense-chart.png";
import huddle from "./../../public/assets/huddle.png";
import finalProject from "./../../public/assets/final-project.png";
import BWASlicing from "./../../public/assets/bwa-slicing.png";

export const projectsData: ProjectCardType[] = [
  {
    name: "Bayi Sehat",
    url: "http://bayi-sehat.vercel.app",
    image: bayiSehat,
    techStack: [
      {
        icon: BiLogoTypescript,
        name: "Typescript",
      },
      {
        icon: RiNextjsFill,
        name: "Next.JS",
      },
      {
        icon: SiExpress,
        name: "Express.JS",
      },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
      },
      {
        icon: DiPostgresql,
        name: "PostgreSQL",
      },
    ],
  },
  {
    name: "Final Project | MSIB 4 X Ruangguru",
    url: "https://student-portal-32b9f.web.app/",
    image: finalProject,
    githubUrl: "https://github.com/muhammadfarhan19/Final-Project_Library-App",
    techStack: [
      {
        icon: RiJavascriptFill,
        name: "Javascript",
      },
      {
        icon: FaReact,
        name: "React.JS",
      },
      {
        icon: SiChakraui,
        name: "ChakraUI",
      },
    ],
  },
  {
    name: "BWA - Slicing Challege",
    url: "https://bwa-intern-challenge.netlify.app/",
    image: BWASlicing,
    githubUrl: "https://github.com/muhammadfarhan19/bwa-intern-challenge",
    techStack: [
      {
        icon: FaHtml5,
        name: "HTML",
      },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
      },
    ],
  },
  {
    name: "Frontend Mentor - Sosmed Dashboard",
    url: "https://sosmed-dashboard-orcin.vercel.app/",
    image: sosmedDashboard,
    techStack: [
      {
        icon: FaHtml5,
        name: "HTML",
      },
      {
        icon: FaCss3Alt,
        name: "CSS",
      },
    ],
  },
  {
    name: "Frontend Mentor - Expense Chart",
    url: "https://frontend-mentor-expense-chart.vercel.app/",
    image: expenseChart,
    githubUrl: "https://github.com/muhammadfarhan19/expense-chart",
    techStack: [
      {
        icon: RiJavascriptFill,
        name: "Javascript",
      },
      {
        icon: FaReact,
        name: "React.JS",
      },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
      },
    ],
  },
  {
    name: "Frontend Mentor - Huddle Rouge",
    url: "https://frontend-mentor-huddle-rouge.vercel.app/",
    image: huddle,
    githubUrl: "https://github.com/muhammadfarhan19/frontend-mentor-huddle",
    techStack: [
      {
        icon: FaHtml5,
        name: "HTML",
      },
      {
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
      },
    ],
  },
];
