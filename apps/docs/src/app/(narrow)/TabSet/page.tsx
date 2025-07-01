"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import { TabSet } from "@colonydb/anthill/TabSet";
import js from "dedent";

const TabSetPage = () => (
  <Card header={<Heading>TabSet</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { TabSet } from "@colonydb/anthill/TabSet";
        `}
      </CodeBlock>
      <Section title={<Heading>Basic</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <TabSet
                    items={[
                      {
                        key: "a",
                        label: "Tab A",
                        onClick: () => {
                          window.alert("Hello!");
                        },
                        selected: true,
                      },
                      {
                        key: "b",
                        label: "Tab B",
                        onClick: () => {
                          window.alert("Hello!");
                        },
                      },
                    ]}
                  />
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <TabSet
                      items={[
                        {
                          key: "a",
                          label: "Tab A",
                          onClick: () => {
                            window.alert("Hello!");
                          },
                          selected: true,
                        },
                        {
                          key: "b",
                          label: "Tab B",
                          onClick: () => {
                            window.alert("Hello!");
                          },
                        },
                      ]}
                    />
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
    </CardContent>
  </Card>
);

export default TabSetPage;
