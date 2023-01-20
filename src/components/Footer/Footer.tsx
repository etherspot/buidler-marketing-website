import { SiDiscord } from "react-icons/si";
import { ReactComponent as EtherspotLogo } from "../../assets/Logo.svg";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="px-16 border-t-[1px] border-[#2E2E4A] py-10 bg-[#0c0915] bg-opacity-70 flex justify-between items-center md:gap-x-2 gap-y-8 md:flex-row flex-col">
      <div className="flex justify-between items-center gap-2">
        <span>Powered by</span>
        <EtherspotLogo />
      </div>
      <div className="flex justify-between items-center gap-16">
        <a target={"_blank"} href="https://docs.etherspot.dev/">
          Dev Docs
        </a>
        <a target={"_blank"} href="https://etherspot.io/blog/">
          Blog
        </a>
      </div>
      <div className="flex justify-between items-center gap-5">
        <a target={"_blank"} href="https://discord.etherspot.io">
          <SiDiscord size={21} />
        </a>
        <a target={"_blank"} href="https://github.com/etherspot/etherspot-sdk">
          <BsGithub size={21} />
        </a>
        <a target={"_blank"} href="https://twitter.com/etherspot">
          <BsTwitter size={21} />
        </a>
        <a target={"_blank"} href="https://t.me/etherspot">
          <FaTelegramPlane size={21} />
        </a>
      </div>
    </div>
  );
};
