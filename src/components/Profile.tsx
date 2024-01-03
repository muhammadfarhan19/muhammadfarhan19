import React from "react";
import BootstrapIcon from "./svgs/BootstrapIcon";
import ChakraIcon from "./svgs/ChakraIcon";
import NextIcon from "./svgs/NextIcon";
import TailwindIcon from "./svgs/TailwindIcon";
import ReactIcon from "./svgs/ReactIcon";

const Profile = () => {
  return (
    <section className="w-full h-screen -mt-16 pt-16 flex flex-col lg:flex-row items-center justify-center">
      {/* <aside className="h-1/2 w-full lg:h-full lg:w-1/2 bg-slate-400"></aside>
      <aside className="h-1/2 w-full lg:h-full lg:w-1/2 bg-slate-400">
        <BootstrapIcon />
        <NextIcon />
        <TailwindIcon />
        <ChakraIcon />
        <ReactIcon />
      </aside> */}
      <aside className="w-3/4 lg:w-1/2 h-60 rounded-lg bg-slate-800 grid place-items-center">
        <h1 className="text-4xl">On Development</h1>
      </aside>
    </section>
  );
};

export default Profile;
