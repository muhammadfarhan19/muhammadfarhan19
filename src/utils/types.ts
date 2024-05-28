import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface ProjectCardType {
  image: string | StaticImageData;
  url?: string;
  name: string;
  githubUrl?: string;
  techStack?: {
    icon: IconType;
    name: string;
  }[];
}
