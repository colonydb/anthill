"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Stack } from "@colonydb/anthill/Stack";
import js from "dedent";

const FrameworkContextPage = () => (
  <Section title={<Heading>FrameworkContext</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              // app/FrameworkContextProvider.tsx
              "use client";

              import { FrameworkContext } from "@colonydb/anthill/FrameworkContext";
              import NextLink from "next/link";
              import type { ReactNode } from "react";

              type Props = {
                children: ReactNode;
              };

              export const FrameworkContextProvider = ({ children }: Props) => (
                <FrameworkContext.Provider
                  value={{
                    Link: NextLink,
                  }}
                >
                  {children}
                </FrameworkContext.Provider>
              );
            `}
          </CodeBlock>
          <CodeBlock language="tsx">
            {js`
              // app/layout.tsx
              import { Base } from "@colonydb/anthill/Base";
              import type { ReactNode } from "react";
              import { FrameworkContextProvider } from "./FrameworkContextProvider.js";

              type Props = {
                children: ReactNode;
              };

              const RootLayout = ({ children }: Props) => (
                <html>
                  <body>
                    <Base>
                      <FrameworkContextProvider>
                        {children}
                      </FrameworkContextProvider>
                    </Base>
                  </body>
                </html>
              );

              export default RootLayout;
            `}
          </CodeBlock>
        </CardContent>
      </Card>
    </Stack>
  </Section>
);

export default FrameworkContextPage;
