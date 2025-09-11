"use client";

import { Block } from "@colonydb/anthill/Block";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Header } from "@colonydb/anthill/Header";
import { Heading } from "@colonydb/anthill/Heading";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const HomePage = () => (
  <Main
    header={
      <Header description={<Block>UI toolkit for React apps.</Block>}>
        <Heading>Anthill</Heading>
      </Header>
    }
  >
    <Card header={<Heading>Getting Started</Heading>}>
      <CardContent>
        <Section title={<Heading>Installation</Heading>}>
          <TabBlock
            items={[
              {
                content: (
                  <CodeBlock language="bash" seamless>
                    npm install @colonydb/anthill
                  </CodeBlock>
                ),
                key: "npm",
                label: "npm",
              },
              {
                content: (
                  <CodeBlock language="bash" seamless>
                    yarn add @colonydb/anthill
                  </CodeBlock>
                ),
                key: "yarn",
                label: "Yarn",
              },
              {
                content: (
                  <CodeBlock language="bash" seamless>
                    pnpm add @colonydb/anthill
                  </CodeBlock>
                ),
                key: "pnpm",
                label: "PNPM",
              },
              {
                content: (
                  <CodeBlock language="bash" seamless>
                    deno add npm:@colonydb/anthill
                  </CodeBlock>
                ),
                key: "deno",
                label: "Deno",
              },
              {
                content: (
                  <CodeBlock language="bash" seamless>
                    bun add @colonydb/anthill
                  </CodeBlock>
                ),
                key: "bun",
                label: "Bun",
              },
            ]}
          />
        </Section>
        <Section title={<Heading>Usage</Heading>}>
          <CodeBlock language="tsx">{js`
              import { Base } from '@colonydb/anthill/Base';
              import { Button } from '@colonydb/anthill/Button';

              const MyApp = () => (
                <Base>
                  <Button
                    onClick={() => {
                      window.alert('Hello!');
                    }}
                  >
                    Click me
                  </Button>
                </Base>
              );
            `}</CodeBlock>
        </Section>
      </CardContent>
    </Card>
  </Main>
);

export default HomePage;
