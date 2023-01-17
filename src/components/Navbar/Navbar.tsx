import { SiDiscord } from "react-icons/si";
import { BsGithub } from "react-icons/bs";

export const Navbar = () => {
  return (
    <div className="w-[95%] sticky top-0 mx-auto z-50 hidden md:flex justify-between items-center custom-navbar">
      <div className="font-bold font-graphik text-2xl">BUIDler</div>
      <div className="flex justify-between items-center gap-16">
        <a href="https://google.com">Dev Docs</a>
        <a href="https://google.com">Implementation</a>
        <a href="https://google.com">Use Cases</a>
      </div>
      <div className="flex justify-between items-center gap-5">
        <a target={"_blank"} href="https://google.com">
          <SiDiscord size={21} />
        </a>
        <a target={"_blank"} href="https://google.com">
          <BsGithub size={21} />
        </a>
      </div>
    </div>
  );
};
