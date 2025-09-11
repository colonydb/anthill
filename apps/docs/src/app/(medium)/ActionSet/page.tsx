"use client";

import { Action } from "@colonydb/anthill/Action";
import { ActionSet } from "@colonydb/anthill/ActionSet";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const ActionSetPage = () => (
  <Main header={<Heading>ActionSet</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { ActionSet } from "@colonydb/anthill/ActionSet";
            `}
          </CodeBlock>
        </CardContent>
      </Card>
      <Card header={<Heading>Examples</Heading>}>
        <CardContent>
          <Section title={<Heading>Basic</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
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
                    <CodeBlock language="tsx" seamless>
                      {js`
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
                  `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
        </CardContent>
      </Card>
    </Stack>
  </Main>
);

export default ActionSetPage;
