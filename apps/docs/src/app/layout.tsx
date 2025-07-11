import { Base } from "@colonydb/anthill/Base";
import { Heading } from "@colonydb/anthill/Heading";
import { Link } from "@colonydb/anthill/Link";
import { Section } from "@colonydb/anthill/Section";
import { Stack } from "@colonydb/anthill/Stack";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import type { ReactNode } from "react";
import FrameworkContextProvider from "./FrameworkContextProvider";
import styles from "./layout.module.css";

const brandFont = Roboto({
  style: ["normal"],
  subsets: ["latin"],
  weight: ["400"],
});

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
      <FrameworkContextProvider>
        <Base brandTypeface={brandFont.style.fontFamily}>
          <nav className={styles.nav}>
            <Section headingLevel={4} tagName="ul" spacing="00">
              <li>
                <Link href="/">Home</Link>
              </li>
              <Stack tagName="li">
                <Heading>Tokens</Heading>
                <Stack tagName="ul">
                  <li>
                    <Link href="/typography">Typography</Link>
                  </li>
                  <li>
                    <Link href="/color">Colour</Link>
                  </li>
                </Stack>
              </Stack>
              <Stack tagName="li">
                <Heading>Components</Heading>
                <Stack tagName="ul">
                  <li>
                    <Link href="/Action">Action</Link>
                  </li>
                  <li>
                    <Link href="/Banner">Banner</Link>
                  </li>
                  <li>
                    <Link href="/Button">Button</Link>
                  </li>
                  <li>
                    <Link href="/Card">Card</Link>
                  </li>
                  <li>
                    <Link href="/CodeBlock">CodeBlock</Link>
                  </li>
                  <li>
                    <Link href="/Dialog">Dialog</Link>
                  </li>
                  <li>
                    <Link href="/Header">Header</Link>
                  </li>
                  <li>
                    <Link href="/Heading">Heading</Link>
                  </li>
                  <li>
                    <Link href="/Icon">Icon</Link>
                  </li>
                  <li>
                    <Link href="/Link">Link</Link>
                  </li>
                  <li>
                    <Link href="/Markdown">Markdown</Link>
                  </li>
                  <li>
                    <Link href="/PlainText">PlainText</Link>
                  </li>
                  <li>
                    <Link href="/RichText">RichText</Link>
                  </li>
                  <li>
                    <Link href="/Specimen">Specimen</Link>
                  </li>
                  <li>
                    <Link href="/Section">Section</Link>
                  </li>
                  <li>
                    <Link href="/Stack">Stack</Link>
                  </li>
                  <li>
                    <Link href="/TabBlock">TabBlock</Link>
                  </li>
                  <li>
                    <Link href="/TabSet">TabSet</Link>
                  </li>
                </Stack>
              </Stack>
            </Section>
          </nav>
          <div className={styles.content}>{children}</div>
        </Base>
      </FrameworkContextProvider>
    </body>
  </html>
);

export default RootLayout;
