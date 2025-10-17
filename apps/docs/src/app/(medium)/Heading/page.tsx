"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CardTable } from "@colonydb/anthill/CardTable";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Inline } from "@colonydb/anthill/Inline";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const HeadingPage = () => (
  <Main header={<Heading>Heading</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
            import { Heading } from "@colonydb/anthill/Heading";
          `}
          </CodeBlock>
        </CardContent>
      </Card>
      <Card header={<Heading>Heading</Heading>}>
        <CardContent>
          <Section title={<Heading>Basic</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen resetStyleContext seamless>
                      <Heading>Example</Heading>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx">
                      {js`
                        <Heading>Example</Heading>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Specifc Level</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen resetStyleContext seamless>
                      <Heading level={3}>Example</Heading>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx">
                      {js`
                        <Heading level={3}>Example</Heading>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Specific Tag</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen resetStyleContext seamless>
                      <Heading tagName="h5">Example</Heading>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx">
                      {js`
                        <Heading tagName="h5">Example</Heading>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>With Icon</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen resetStyleContext seamless>
                      <Heading tagName="h5">
                        <Icon symbol="Pin" />
                        Example
                      </Heading>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx">
                      {js`
                        <Heading tagName="h5">
                          <Icon symbol="Pin" />
                          Example
                        </Heading>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
        </CardContent>
      </Card>
      <Card header={<Heading>Levels</Heading>}>
        <CardTable
          cols={{
            level: "Level",
            specimen: "Specimen",
          }}
          rows={([1, 2, 3, 4, 5, 6] as const).map((level) => ({
            key: level,
            values: {
              level: <Inline font="tiny-monospace">{level.toString()}</Inline>,
              specimen: (
                <Specimen>
                  <Heading level={level}>Lorem ipsum dolor sit amet</Heading>
                </Specimen>
              ),
            },
          }))}
        />
      </Card>
    </Stack>
  </Main>
);

export default HeadingPage;
