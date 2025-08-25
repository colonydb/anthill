"use client";

import { Action } from "@colonydb/anthill/Action";
import { ActionSet } from "@colonydb/anthill/ActionSet";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const ActionSetPage = () => (
  <Card header={<Heading>ActionSet</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { ActionSet } from "@colonydb/anthill/ActionSet";
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
                  <ActionSet
                    actions={[
                      {
                        content: (
                          <Action
                            icon={<Icon symbol="Copy" />}
                            onClick={() => {
                              window.alert("example a");
                            }}
                            padded
                          >
                            Example A
                          </Action>
                        ),
                        key: "a",
                      },
                      {
                        content: (
                          <Action
                            icon={<Icon symbol="Copy" />}
                            onClick={() => {
                              window.alert("example b");
                            }}
                            padded
                          >
                            Example B
                          </Action>
                        ),
                        key: "b",
                      },
                      {
                        content: (
                          <Action
                            icon={<Icon symbol="Copy" />}
                            onClick={() => {
                              window.alert("example c");
                            }}
                            padded
                          >
                            Example C
                          </Action>
                        ),
                        key: "c",
                      },
                    ]}
                    title="actions"
                  >
                    Menu
                  </ActionSet>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <ActionSet actions={[{ content: "AAA", key: "a" }]} title="actions" />
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

export default ActionSetPage;
