import { useMemo, useState } from "react";
import { ReactComponent as Arrow } from "../../assets/etherspotArrow.svg";
import {
  Etherspot,
  TRANSACTION_BLOCK_TYPE,
} from "@etherspot/react-transaction-buidler";
import { Web3Auth } from "@web3auth/modal";
import { OpenloginAdapter } from "@web3auth/openlogin-adapter";
import Onboard from "@web3-onboard/core";
import injectedModule from "@web3-onboard/injected-wallets";
import { ethers } from "ethers";
import Web3 from "web3";
import { Web3AuthCore } from "@web3auth/core";
import { useAccount, useDisconnect } from "wagmi";
import SignIn from "../SignIn/SignIn";

const chainId = 1;
const MAINNET_RPC_URL = `https://mainnet.infura.io/v3/${
  import.meta.env.VITE_APP_INFURA_ID
}`;

console.log("envv",import.meta.env.VITE_APP_INFURA_ID)

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
          main: "linear-gradient(169deg, #3e3869 5%, #241938 98%)",
          topMenu: "#443d66",
          topMenuButton: "#ffffff",
          card: "#262240",
          button: "linear-gradient(to bottom, #fdb754, #f18214)",
          closeButton: "#ffffff",
          selectInputToggleButton: "#998ae6",
          selectInput: "#474078",
          selectInputExpanded: "#130c1d",
          selectInputImagePlaceholder: "#4f367a",
          textInput: "#1a1726",
          switchInput: "#1a1726",
          switchInputActiveTab:
            "linear-gradient(to bottom, #734fb3, #422d66), linear-gradient(to bottom, #3d265c, #222130)",
          switchInputInactiveTab: "transparent",
          pill: "#2b2640",
          checkboxInputInactive: "#665c99",
          dropdownHoverColor: "#443d66",
          selectInputExpandedHover: "#443d66",
          listItemQuickButtonPrimary: "#eb860b",
          listItemQuickButtonSecondary: "#4f367a",
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
          buttonSecondary: "#fbae49",
          card: "#ffeee6",
          cardTitle: "#ffeee6",
          button: "#fff",
          errorMessage: "#ff4d6a",
          textInput: "#ffeee6",
          textInputSecondary: "#9466e6",
          switchInputActiveTab: "#ffeee6",
          switchInputInactiveTab: "#9466e6",
          selectInputImagePlaceholder: "#ffeee6",
          cardDisabled: "#605e5e",
          pill: "#bbb8cc",
          pillValue: "#ffeee6",
        },
      },
    };
  }, []);

  const [connectedProvider, setConnectedProvider] = useState(null);
  const [web3AuthInstance, setWeb3AuthInstance] = useState<Web3AuthCore | null>(
    null
  );
  const { disconnect: wagmiDisconnect } = useDisconnect();
  const { connector, isConnected } = useAccount();

  return (
    <div className="mx-auto min-h-[70vh] max-w-[1800px] flex justify-center items-center relative text-black dark:text-white pt-[120px]">
      <img
        src="/ellipse.png"
        className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
      />
      <div className="flex justify-between mx-auto md:w-[85%] w-[95%] md:flex-row flex-col relative">
        <div className="max-w-[600px] md:w-1/2 w-full relative px-4 pt-16 md:mb-0 mb-[30px]">
          <h1 className="md:text-7xl text-4xl font-semibold mb-16">
            BUIDLer for Web3 builders
          </h1>
          <div className="text-[18px] md:w-4/6 w-5/6 mb-12">
            <h3 className="mb-6">
              Give Your dApp Cutting Edge Account Abstraction Super-Powers
            </h3>
            <p className="text-[#8E8EA8]">
              Implement BUIDLer, a plug & play solution that you can easily drop
              into your dApp and take it to the top level.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p className="md:text-2xl text-[18px]">Feel the magic</p>
            <Arrow />
          </div>
        </div>
        <div className="max-w-[600px] md:w-1/2 w-full relative">
          <div className="custom-background-card md:min-h-[80vh] min-h-[50vh] p-6 flex flex-col items-center">
            <h2 className="text-center text-[36px] mb-6">
              BUIDLer React Component
            </h2>
            <div>
              {!connectedProvider && (
                <SignIn
                  onWeb3ProviderSet={async (web3Provider) => {
                    if (!web3Provider) {
                      setConnectedProvider(null);
                      return;
                    }

                    const web3 = new Web3(web3Provider as any);

                    // @ts-ignore
                    setConnectedProvider(web3.currentProvider);
                  }}
                  onWeb3AuthInstanceSet={setWeb3AuthInstance}
                />
              )}
              {connectedProvider && (
                <div>
                  <Etherspot
                    provider={connectedProvider}
                    chainId={chainId}
                    themeOverride={themeOverride}
                    onLogout={async () => {
                      try {
                        if (isConnected) wagmiDisconnect();
                        if (connector) await connector.disconnect();
                      } catch (e) {
                        //
                      }

                      try {
                        if (web3AuthInstance) {
                          await web3AuthInstance.logout({ cleanup: true });
                          web3AuthInstance.clearCache();
                        }
                      } catch (e) {
                        //
                      }

                      setConnectedProvider(null);
                    }}
                    showMenuLogout
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
