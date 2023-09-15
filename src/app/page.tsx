"use client";

import { useAccount } from "wagmi";
import { Account } from "./components/Account";
import { Connect } from "./components/Connect";
import { NetworkSwitcher } from "./components/NetworkSwitcher";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <div>
      <h1>wagmi</h1>

      <Connect />

      {isConnected && (
        <>
          <Account />
          <NetworkSwitcher />
        </>
      )}
    </div>
  );
}
