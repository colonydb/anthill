import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Main } from "@colonydb/anthill/Main";
import { Stack } from "@colonydb/anthill/Stack";
import js from "dedent";

const BasePage = () => (
  <Main header={<Heading>Base</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              // app/layout.tsx
              import { Base } from "@colonydb/anthill/Base";
              import type { ReactNode } from "react";

              type Props = {
                children: ReactNode;
              };

              const RootLayout = ({ children }: Props) => (
                <html>
                  <body>
                    <Base>
                      {children}
                    </Base>
                  </body>
                </html>
              );
            `}
          </CodeBlock>
        </CardContent>
      </Card>
    </Stack>
  </Main>
);

export default BasePage;
