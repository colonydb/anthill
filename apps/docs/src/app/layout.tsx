import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Anthill | Documentation",
  description: "Reference documentation for Anthill, ColonyDB's design system.",
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => (
  <html lang="en">
    <body>{children}</body>
  </html>
);

export default RootLayout;
