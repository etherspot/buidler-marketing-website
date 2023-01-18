import { ReactComponent as CardIconOne } from "../../assets/cardIcon1.svg";
import { ReactComponent as CardIconTwo } from "../../assets/cardIcon2.svg";
import { ReactComponent as CardIconThree } from "../../assets/cardIcon3.svg";
import { ReactComponent as CardIconFour } from "../../assets/cardIcon4.svg";
import { ReactComponent as CardIconFive } from "../../assets/cardIcon5.svg";
import { ReactComponent as CardIconSix } from "../../assets/cardIcon6.svg";
import { ReactComponent as CardIconSeven } from "../../assets/cardIcon7.svg";
import { ReactComponent as CardIconEight } from "../../assets/cardIcon8.svg";
import { ReactComponent as CardIconNine } from "../../assets/cardIcon9.svg";
import { ReactComponent as CardIconTen } from "../../assets/cardIcon10.svg";
import { ReactComponent as CardIconEleven } from "../../assets/cardIcon11.svg";
import { ReactComponent as EtherspotLogo } from "../../assets/EtherspotLogo.svg";

export const Cards = () => {
  return (
    <div className="mx-auto md:w-[85%] w-[95%] relative flex justify-between items-center gap-8 py-16 md:flex-row flex-col">
      <div className="w-full relative custom-card flex flex-col">
        <h3 className="text-2xl">
          Direct access for your dApp to Li.Fi, Uniswap, Sushiswap, Quickswap,
          1inch, ParaSwap, HoneySwap, Socket Network, and more.
        </h3>
        <div className="flex justify-between items-center flex-wrap gap-x-10 gap-y-6 mt-auto">
          <CardIconOne />
          <CardIconTwo />
          <CardIconThree />
          <CardIconFour />
          <CardIconFive />
          <CardIconSix />
          <CardIconSeven />
          <CardIconEight width={58} />
        </div>
      </div>
      <div className="w-full relative custom-card flex flex-col">
        <h3 className="text-2xl">
          Compatible with any Web3 provider (MetaMask, WalletConnect, Torus, and
          others).
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-6 mt-auto">
          <CardIconNine />
          <CardIconTen />
          <CardIconEleven />
        </div>
      </div>
      <div className="w-full relative flex flex-col custom-card">
        <h3 className="text-2xl">
          Interaction between your Etherspot smart wallet and web3 key-based
          wallet is included.
        </h3>
        <div className="flex justify-center items-center flex-wrap gap-x-10 gap-y-6 mt-auto">
          <EtherspotLogo />
        </div>
      </div>
    </div>
  );
};
