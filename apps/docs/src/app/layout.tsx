import "@colonydb/anthill/foundation/Global";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const metadata: Metadata = {
  title: "Anthill | Documentation",
  description: "Reference documentation for Anthill, ColonyDB's design system.",
};

const RootLayout = ({ children }: Props) => (
  <html lang="en">
    <body>
      <div
        style={{
          borderRight: "1px solid #ccc",
          height: "100dvh",
          overflowY: "auto",
          padding: "1lh",
          position: "fixed",
          width: "24ch",
        }}
      >
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
        </ul>
      </div>
      <div
        style={{
          marginLeft: "24ch",
          padding: "1lh",
        }}
      >
        {children}
      </div>
    </body>
  </html>
);

export default RootLayout;
