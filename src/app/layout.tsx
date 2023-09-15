"use client";

import { WagmiConfig } from "wagmi";
import { config } from "@/wagmi";
import NoSsr from "@/components/NoSsr";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NoSsr>
          <WagmiConfig config={config}>{children}</WagmiConfig>
        </NoSsr>
      </body>
    </html>
  );
}
