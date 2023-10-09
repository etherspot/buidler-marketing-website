import React from "react";
import { configureChains, createConfig, mainnet, WagmiConfig } from "wagmi";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { CoinbaseWalletConnector } from "wagmi/connectors/coinbaseWallet";
import { WalletConnectConnector } from "wagmi/connectors/walletConnect";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet],
  [
    infuraProvider({ apiKey: import.meta.env.VITE_APP_INFURA_ID ?? "" }),
    publicProvider(),
  ]
);

const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: "Etherspot Buidler",
      },
    }),
    new WalletConnectConnector({
      chains,
      options: {
        isNewChainsStale: false,
        projectId: import.meta.env.VITE_APP_WALLET_CONNECT_PROJECT_ID ?? "",
        showQrModal: true,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});

const WagmiProvider = ({ children }: { children: React.ReactNode }) => (
  <WagmiConfig config={config}>{children}</WagmiConfig>
);

export default WagmiProvider;
