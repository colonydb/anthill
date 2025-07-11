"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { Header } from "@colonydb/anthill/Header";
import { Heading } from "@colonydb/anthill/Heading";
import { Markdown } from "@colonydb/anthill/Markdown";
import { PlainText } from "@colonydb/anthill/PlainText";
import { Section } from "@colonydb/anthill/Section";
import md from "dedent";

const HomePage = () => (
  <Section
    title={
      <Header description={<PlainText font="small">ColonyDB&apos;s design system.</PlainText>}>
        <Heading>Anthill</Heading>
      </Header>
    }
  >
    <Card header={<Heading>Installation</Heading>}>
      <CardContent>
        <Markdown>{md`
          PNPM:

          \`\`\`bash
          pnpm add @colonydb/anthill
          \`\`\`

          Yarn:

          \`\`\`bash
          yarn add @colonydb/anthill
          \`\`\`

          npm:

          \`\`\`bash
          npm install @colonydb/anthill
          \`\`\`
        `}</Markdown>
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
