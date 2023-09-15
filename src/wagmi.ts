import { configureChains, createConfig } from "wagmi";
import { InjectedConnector } from "wagmi/connectors/injected";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";
import { publicProvider } from "wagmi/providers/public";
import { arbitrum, sepolia, mainnet } from "viem/chains";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [mainnet, arbitrum, sepolia],
  [publicProvider()]
);

export const config = createConfig({
  autoConnect: true,
  connectors: [
    new MetaMaskConnector({ chains }),
    new InjectedConnector({
      chains,
      options: {
        name: "OKX Wallet",
        getProvider: () =>
          typeof window !== "undefined" ? window.okxwallet : undefined,
      },
    }),
  ],
  publicClient,
  webSocketPublicClient,
});
