import { useMemo, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/etherspotArrow.svg";
import {
  Etherspot,
  TRANSACTION_BLOCK_TYPE,
} from "@etherspot/react-transaction-buidler";
import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";
const chainId = 1;
const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${import.meta.env.REACT_APP_INFURA_ID}`;

const injected = injectedModule();

const onboard = Onboard({
  wallets: [injected],
  chains: [
    {
      id: "0x1",
      token: "ETH",
      label: "Ethereum Mainnet",
      rpcUrl: MAINNET_RPC_URL,
    },
  ],
});

export const Hero = () => {
  const themeOverride = useMemo(() => {
    return {
      color: {
        background: {
          main: "#221f33",
          topMenu: "#443d66",
          topMenuButton: "#ff884d",
          card: "#2b2640",
          button: "#ff884d",
          closeButton: "#ff884d",
          selectInputToggleButton: "#ff884d",
          selectInput: "#443d66",
          selectInputExpanded: "#1a1726",
          selectInputImagePlaceholder: "#443d66",
          textInput: "#1a1726",
          switchInput: "#1a1726",
          switchInputActiveTab: "#443d66",
          switchInputInactiveTab: "transparent",
          pill: "#2b2640",
          checkboxInputInactive: "#665c99",
          dropdownHoverColor: "#443d66",
          selectInputExpandedHover: "#443d66",
        },
        text: {
          selectInput: "#ffeee6",
          selectInputOption: "#ffeee6",
          selectInputOptionSecondary: "#ffeee6",
          searchInput: "#998ae6",
          searchInputSecondary: "#998ae6",
          outerLabel: "#998ae6",
          innerLabel: "#998ae6",
          topMenu: "#998ae6",
          main: "#ffeee6",
          topBar: "#998ae6",
          buttonSecondary: "#998ae6",
          card: "#ffeee6",
          cardTitle: "#ffeee6",
          button: "#fff",
          errorMessage: "#ff4d6a",
          textInput: "#ffeee6",
          textInputSecondary: "#ffeee6",
          switchInputActiveTab: "#ffeee6",
          switchInputInactiveTab: "#bbb8cc",
          selectInputImagePlaceholder: "#ffeee6",
          cardDisabled: "#605e5e",
          pill: "#bbb8cc",
          pillValue: "#ffeee6",
        },
      },
    };
  }, []);
  const [walletAddress, setWalletAddress] = useState("");
  const [connectionProvider, setConnectionProvider] = useState<any>(null);
  const initWallet = async () => {
    const wallets = await onboard.connectWallet();

    console.log(wallets);

    if (wallets[0]) {
      // create an ethers provider with the last connected wallet provider
      const ethersProvider = new ethers.providers.Web3Provider(
        wallets[0].provider,
        "any"
      );
      setConnectionProvider(wallets[0].provider);
      const signer = ethersProvider.getSigner();
    }
  };
  return (
    <div className="mx-auto min-h-[100vh] flex justify-center items-center relative text-black dark:text-white pt-[120px]">
      <img
        src="/ellipse.png"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
      <div className="flex justify-between mx-auto md:w-[85%] w-[95%] md:flex-row flex-col relative">
        <div className="md:w-1/2 w-full relative px-4 pt-16 md:mb-0 mb-[30px]">
          <h1 className="md:text-7xl text-4xl font-semibold mb-16">
            BUIDLer for Web3 builders
          </h1>
          <div className="text-[18px] md:w-4/6 w-5/6 mb-12">
            <h3 className="mb-6">
              Give Your dApp Cutting Edge Account Abstraction Super-Powers
            </h3>
            <p className="text-[#8E8EA8]">
              Implement BUIDLer, a free, plug & play, solution that you can
              easily drop into your dApp and take it to the top level.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="md:text-2xl text-[18px]">Feel the magic</p>
            <Arrow />
          </div>
        </div>
        <div className="md:w-1/2 w-full relative">
          <div className="custom-background-card md:min-h-[90vh] min-h-[50vh] p-6 flex flex-col items-center">
            <h2 className="text-center text-[36px] mb-6">
              BUIDLer React Component
            </h2>
            <div
              onClick={() => {
                if (!connectionProvider) {
                  initWallet();
                }
              }}
            >
              <Etherspot
                themeOverride={themeOverride}
                defaultTransactionBlocks={[
                  { type: TRANSACTION_BLOCK_TYPE.ASSET_BRIDGE },
                ]}
                chainId={chainId}
                provider={connectionProvider || null}
              />
            </div>
            {/* <img src="/etherspotPlaceholder.png" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
