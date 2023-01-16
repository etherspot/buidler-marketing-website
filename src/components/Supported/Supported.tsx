import { ReactComponent as IconOne } from "../../assets/icon1.svg";
import { ReactComponent as IconTwo } from "../../assets/icon2.svg";
import { ReactComponent as IconThree } from "../../assets/icon3.svg";
import { ReactComponent as IconFour } from "../../assets/icon4.svg";
import { ReactComponent as IconFive } from "../../assets/icon5.svg";
import { ReactComponent as IconSix } from "../../assets/icon6.svg";
import { ReactComponent as IconSeven } from "../../assets/icon7.svg";
import { ReactComponent as IconEight } from "../../assets/icon8.svg";
import { ReactComponent as IconNine } from "../../assets/icon9.svg";
import { ReactComponent as IconTen } from "../../assets/icon10.svg";
import { ReactComponent as IconEleven } from "../../assets/icon11.svg";
import { ReactComponent as IconTwelve } from "../../assets/icon12.svg";
import { ReactComponent as IconThirteen } from "../../assets/icon13.svg";
import { ReactComponent as IconFourteen } from "../../assets/icon14.svg";

const iconList = [
  {
    name: "icon1",
    icon: <IconOne />,
  },
  {
    name: "icon2",
    icon: <IconTwo />,
  },
  {
    name: "icon3",
    icon: <IconThree />,
  },
  {
    name: "icon4",
    icon: <IconFour />,
  },
  {
    name: "icon5",
    icon: <IconFive />,
  },
  {
    name: "icon6",
    icon: <IconSix />,
  },
  {
    name: "icon7",
    icon: <IconSeven />,
  },
  {
    name: "icon8",
    icon: <IconEight />,
  },
  {
    name: "icon9",
    icon: <IconNine />,
  },
  {
    name: "icon10",
    icon: <IconTen />,
  },
  {
    name: "icon11",
    icon: <IconEleven />,
  },
  {
    name: "icon12",
    icon: <IconTwelve />,
  },
  {
    name: "icon13",
    icon: <IconThirteen />,
  },
  {
    name: "icon14",
    icon: <IconThirteen />,
  },
];

export const Supported = () => {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center w-[55%] mx-auto">
      <div className="mb-16">
        <h1 className="text-center text-[46px]">
          Access all the benefits of
          <span className="text-[#F79D1E]">
            {" "}
            Etherspot account abstraction SDK
          </span>{" "}
          without changing your dApp's user flow. Super simple, super smart.
        </h1>
      </div>
      <div className="mb-14">
        <p className="text-[#8E8EA8] text-[20px]">Supported on BUIDLer</p>
      </div>
      <div className="flex justify-center items-center gap-x-16 gap-y-6 flex-wrap">
        {iconList.map((item) => (
          <div key={item.name}>{item.icon}</div>
        ))}
      </div>
    </div>
  );
};
