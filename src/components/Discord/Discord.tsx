import { ReactComponent as DiscordIcon } from "../../assets/discord.svg";

export const Discord = () => {
  return (
    <div className="relative py-8">
      <div className="md:w-[85%] w-[95%] mx-auto relative">
        <div className="custom-discord-card md:w-[60%] w-full mx-auto flex flex-col items-center justify-center gap-16 px-10">
          <h2 className="text-center text-[#8E8EA8] md:text-4xl text-2xl">
            Have any questions? Join our Discord and chat with the team!
          </h2>
          <a
            href={"https://discord.gg/JHRmWGpP3F"}
            target={"_blank"}
            className="flex justify-start p-y-2 px-1 items-center w-[278px] h-[70px] gap-3 border-[#2E2E4A] border-[1px] rounded-[3rem]"
          >
            <DiscordIcon />
            <h4 className="text-[20px] font-bold">Join our Discord</h4>
          </a>
        </div>
      </div>
    </div>
  );
};
