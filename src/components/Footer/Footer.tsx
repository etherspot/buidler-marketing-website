import { SiDiscord } from "react-icons/si";
import { ReactComponent as EtherspotLogo } from "../../assets/Logo.svg";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="px-16 border-t-[1px] border-[#2E2E4A] py-10 bg-[#0c0915] bg-opacity-70 flex justify-between items-center">
      <div className="flex justify-between items-center gap-2">
        <span>Powered by</span>
        <EtherspotLogo />
      </div>
      <div className="flex justify-between items-center gap-16">
        <a href="https://google.com">Dev Docs</a>
        <a href="https://google.com">Blog</a>
      </div>
      <div className="flex justify-between items-center gap-5">
        <a target={"_blank"} href="https://google.com">
          <SiDiscord size={21} />
        </a>
        <a target={"_blank"} href="https://google.com">
          <BsGithub size={21} />
        </a>
        <a target={"_blank"} href="https://google.com">
          <BsTwitter size={21} />
        </a>
        <a target={"_blank"} href="https://google.com">
          <FaTelegramPlane size={21} />
        </a>
      </div>
    </div>
  );
};
