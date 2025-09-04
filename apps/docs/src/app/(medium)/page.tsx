"use client";

import { Block } from "@colonydb/anthill/Block";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Header } from "@colonydb/anthill/Header";
import { Heading } from "@colonydb/anthill/Heading";
import { Markdown } from "@colonydb/anthill/Markdown";
import { Section } from "@colonydb/anthill/Section";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import md from "dedent";

const HomePage = () => (
  <Section
    title={
      <Header description={<Block>A UI toolkit for React apps.</Block>}>
        <Heading>Anthill</Heading>
      </Header>
    }
  >
    <Card header={<Heading>Installation</Heading>}>
      <CardContent>
        <TabBlock
          items={[
            {
              content: <CodeBlock language="bash">npm install @colonydb/anthill</CodeBlock>,
              key: "npm",
              label: "npm",
            },
            {
              content: <CodeBlock language="bash">yarn add @colonydb/anthill</CodeBlock>,
              key: "yarn",
              label: "Yarn",
            },
            {
              content: <CodeBlock language="bash">pnpm add @colonydb/anthill</CodeBlock>,
              key: "pnpm",
              label: "PNPM",
            },
            {
              content: <CodeBlock language="bash">bun add @colonydb/anthill</CodeBlock>,
              key: "bun",
              label: "Bun",
            },
          ]}
        />
      </CardContent>
    </Card>
    <Card header={<Heading>Usage</Heading>}>
      <CardContent>
        <Markdown>{md`
          \`\`\`tsx
          import { Base } from '@colonydb/anthill/Base';
          import { Button } from '@colonydb/anthill/Button';

          const MyComponent = () => (
            <Base>
              <Button
                onClick={() => {
                  alert('Hello!');
                }}
              >
                Click me
              </Button>
            </Base>
          );
          \`\`\`
        `}</Markdown>
      </CardContent>
    </Card>
  </Section>
);

export default HomePage;
