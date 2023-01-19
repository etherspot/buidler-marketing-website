import { SiDiscord } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import { ReactComponent as EtherspotLogo } from "../../assets/ethSmall.svg";

export const Navbar = () => {
  return (
    <div className="w-[95%] fixed top-0 left-[50%] translate-x-[-50%] mx-auto z-50 flex justify-between items-center custom-navbar">
      <div className="font-bold font-graphik text-2xl">BUIDLer</div>
      <div className="flex justify-between items-center gap-16">
        <a href="https://docs.etherspot.dev/">Dev Docs</a>
        <a href="#implement">Implementation</a>
        <a href="#batching">Use Cases</a>
      </div>
      <div className="flex justify-between items-center gap-5">
        <a target={"_blank"} href="https://etherspot.io/">
          <EtherspotLogo height={22} />
        </a>
        <a target={"_blank"} href="https://discord.gg/JHRmWGpP3F">
          <SiDiscord size={21} />
        </a>
        <a target={"_blank"} href="https://github.com/etherspot/etherspot-sdk">
          <BsGithub size={21} />
        </a>
      </div>
    </div>
  );
};
