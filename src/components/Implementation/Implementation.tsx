import { ReactComponent as Arrow } from "../../assets/etherspotArrow.svg";

export const Implementation = () => {
  return (
    <div className="py-8 relative  mx-auto" id="implement">
      <img src="/ellipse.png" className="absolute top-[-60%] left-[-40%]" />
      <div className="flex flex-col md:w-[85%] w-[95%] max-w-[1400px] mx-auto relative">
        <div className="flex justify-between gap-12 items-end md:flex-row flex-col mb-16">
          <h1 className="text-[46px] leading-[50px]">
            BUIDLer <br />
            Implementation
          </h1>
          <div className="flex gap-8 items-center">
            <p className="text-[#8E8EA8] text-[18px]">
              Simply design your transaction using the component dropdown
              function
            </p>
            <div>
              <Arrow />
            </div>
            <p className="text-[#8E8EA8] text-[18px]">
              Copy and paste the output script into your dapp's code
            </p>
          </div>
        </div>
        <div className="flex gap-6 relative md:flex-row flex-col tracking-wide">
          <div className="w-full custom-process-card p-8 flex flex-col">
            <h2 className="text-[32px] mb-4">Install</h2>
            <div className="flex h-full flex-col font-code justify-center gap-y-2 px-8">
              <span className="text-[#E3E3E3]">
                npm i @etherspot/react-transaction-buidler
              </span>
              <span className="text-[#E3E3E3]">or</span>
              <span className="text-[#E3E3E3]">
                yarn add @etherspot/react-transaction-buidler
              </span>
            </div>
          </div>
          <div className="w-full custom-process-card p-8 flex flex-col">
            <h2 className="text-[32px] mb-4">Usage example</h2>
            <div className="flex h-full flex-col font-code justify-center gap-y-2 px-8">
              <span className="text-[#E3E3E3]">
                {"import { Etherspot } from '@etherspot/react-"}
              </span>
              <span className="text-[#E3E3E3]">{"transaction-buidler';"}</span>
              <span className="text-[#E3E3E3]">{"..."}</span>
              <span className="text-[#E3E3E3]">
                {"const ReactComponent = () => {"}
              </span>
              <span className="text-[#E3E3E3]">&nbsp;&nbsp;{"..."}</span>
              <span className="text-[#E3E3E3]">&nbsp;&nbsp;{"return ("}</span>
              <span className="text-[#E3E3E3]">
                &nbsp;&nbsp;&nbsp;&nbsp;
                {"<Etherspot provider={connectedProvider} />"}
              </span>
              <span className="text-[#E3E3E3]">&nbsp;&nbsp;{")"}</span>
              <span className="text-[#E3E3E3]">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
