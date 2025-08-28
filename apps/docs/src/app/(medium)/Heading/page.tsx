"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CardTable } from "@colonydb/anthill/CardTable";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { HeadingLevelContext } from "@colonydb/anthill/HeadingLevelContext";
import { Icon } from "@colonydb/anthill/Icon";
import { Inline } from "@colonydb/anthill/Inline";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const HeadingPage = () => (
  <Stack>
    <Card header={<Heading>Heading</Heading>}>
      <CardContent>
        <CodeBlock language="tsx">
          {js`
            import { Heading } from "@colonydb/anthill/Heading";
          `}
        </CodeBlock>
        <Section title={<Heading>Basic</Heading>}>
          <TabBlock
            items={[
              {
                key: "specimen",
                label: "Specimen",
                content: (
                  <HeadingLevelContext.Provider value={1}>
                    <Specimen>
                      <Heading>Example</Heading>
                    </Specimen>
                  </HeadingLevelContext.Provider>
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
                  <HeadingLevelContext.Provider value={1}>
                    <Specimen>
                      <Heading level={3}>Example</Heading>
                    </Specimen>
                  </HeadingLevelContext.Provider>
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
                  <HeadingLevelContext.Provider value={1}>
                    <Specimen>
                      <Heading tagName="h5">Example</Heading>
                    </Specimen>
                  </HeadingLevelContext.Provider>
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
                  <HeadingLevelContext.Provider value={1}>
                    <Specimen>
                      <Heading tagName="h5">
                        <Icon symbol="Pin" color="blue-00" />
                        Example
                      </Heading>
                    </Specimen>
                  </HeadingLevelContext.Provider>
                ),
              },
              {
                key: "code",
                label: "Code",
                content: (
                  <CodeBlock language="tsx">
                    {js`
                      <Heading tagName="h5">
                        <Icon symbol="Pin" color="blue-00" />
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
    <Card header={<Heading>Heading Levels</Heading>}>
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
                <Section headingLevel={level} title={<Heading>Example</Heading>}>
                  <p>Lorem</p>
                </Section>
              </Specimen>
            ),
          },
        }))}
      />
    </Card>
  </Stack>
);

export default HeadingPage;
