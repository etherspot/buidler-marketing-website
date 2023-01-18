import { ReactComponent as SectionOne } from "../../assets/section1.svg";
import { ReactComponent as SectionTwo } from "../../assets/section2.svg";
import { ReactComponent as SectionThree } from "../../assets/section3.svg";
import { ReactComponent as SectionFour } from "../../assets/section4.svg";
import { ReactComponent as SectionFive } from "../../assets/section5.svg";

const sectionTiles = [
  {
    title: "Social Logins",
    icon: <SectionOne />,
    content: "onboard your Web2 users easily",
  },
  {
    title: "Transaction Batching / Multi-Call",
    icon: <SectionTwo />,
    content: "performing several actions in a single transaction",
  },
  {
    title: "Cross-Chain Bridging",
    icon: <SectionThree />,
    content: "allow your dApp to onboard users from any EVM chain",
  },
  {
    title: "Seamless Multi-Chain Experience",
    icon: <SectionFour />,
    content: "users can control their wallets on any chain from any endpoint",
  },
  {
    title: "Highly customizable",
    icon: <SectionFive />,
    content:
      "interact with Keybased (Metamask) wallet only, deposit to Etherspot's Smart Wallet, go fully Smart Wallet.",
  },
];

export const Features = () => {
  return (
    <div className="flex justify-between items-stretch md:w-[90%] w-[95%] mx-auto py-16 flex-wrap">
      {sectionTiles.map((tile) => (
        <div
          className="px-8 py-2 md:[&:not(:last-child)]:border-r-[1px] dark:border-[#2E2E4A] min-h-[200px] md:w-1/5 w-1/2"
          key={tile.title}
        >
          <div className="mb-8 h-11">{tile.icon}</div>
          <h2 className="mb-6 text-2xl">{tile.title}</h2>
          <p className="text-[#8E8EA8]">{tile.content}</p>
        </div>
      ))}
    </div>
  );
};
