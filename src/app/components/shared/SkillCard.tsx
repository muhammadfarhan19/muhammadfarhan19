import React from "react";
import { IconType } from "react-icons";

interface SkillCardProps {
  Icon: IconType;
  text: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ Icon, text }) => {
  return (
    <div className="w-full md:w-auto h-10 px-3 rounded-md flex items-center border bg-white justify-between gap-x-3">
      <Icon className='w-8 h-8' />
      <h1 className="text-sm font-semibold">{text}</h1>
    </div>
  );
};

export default SkillCard;
