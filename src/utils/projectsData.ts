import { BiLogoGithub, BiLogoTypescript } from "react-icons/bi";
import {
  RiJavascriptFill,
  RiNextjsFill,
  RiTailwindCssFill,
} from "react-icons/ri";
import { SiChakraui, SiExpress } from "react-icons/si";
import { DiPostgresql } from "react-icons/di";
import { ProjectCardType } from "./types";
import {
  FaCss3Alt,
  FaGithub,
  FaHtml5,
  FaLinkedinIn,
  FaReact,
} from "react-icons/fa";
import { ImInstagram } from "react-icons/im";

import bayiSehat from "./../../public/assets/bayi-sehat.png";
import sosmedDashboard from "./../../public/assets/sosmed-dashboard.png";
import expenseChart from "./../../public/assets/expense-chart.png";
import huddle from "./../../public/assets/huddle.png";
import finalProject from "./../../public/assets/final-project.png";
import BWASlicing from "./../../public/assets/bwa-slicing.png";
import intradikti from "./../../public/assets/intradikti.png";
import hadisApp from "./../../public/assets/hadisApp.png";

export const projectsData: ProjectCardType[] = [
  {
    name: "Tugas Akhir | Bayi Sehat",
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
    name: "Intra DIKTI | MSIB 6 X Kemendikbud Ristek",
    url: "https://intradikti.kemdikbud.go.id/",
    image: intradikti,
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
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
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
    name: "Hadis App",
    url: "https://hadis-app.vercel.app/",
    image: hadisApp,
    githubUrl: "https://github.com/muhammadfarhan19/hadis-app",
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
        icon: RiTailwindCssFill,
        name: "Tailwindcss",
      },
    ],
  },
  {
    name: "BWA | Slicing Challege",
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
    name: "Frontend Mentor | Sosmed Dashboard",
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
    name: "Frontend Mentor | Expense Chart",
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
    name: "Frontend Mentor | Huddle Rouge",
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

export const dataSkillCard = [
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
export const contactsButton = [
  { icon: ImInstagram, href: "https://www.instagram.com/_muhammad.farhan/" },
  {
    icon: FaLinkedinIn,
    href: "https://linkedin.com/in/muhammad-farhan-18bb1b235/",
  },
  { icon: FaGithub, href: "https://github.com/muhammadfarhan19" },
];
