import React from "react";
import BootstrapIcon from "./svgs/BootstrapIcon";
import ChakraIcon from "./svgs/ChakraIcon";
import NextIcon from "./svgs/NextIcon";
import TailwindIcon from "./svgs/TailwindIcon";
import ReactIcon from "./svgs/ReactIcon";

const Profile = () => {
  return (
    <section className="w-full h-screen -mt-16 pt-16 flex flex-col lg:flex-row items-center">
      <aside className="h-1/2 w-full lg:h-full lg:w-1/2 bg-slate-400"></aside>
      <aside className="h-1/2 w-full lg:h-full lg:w-1/2 bg-slate-400">
        <BootstrapIcon />
        <NextIcon />
        <TailwindIcon />
        <ChakraIcon />
        <ReactIcon />
      </aside>
    </section>
  )
}

export default Profile;
