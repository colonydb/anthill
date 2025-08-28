"use client";

import { Action } from "@colonydb/anthill/Action";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const ActionPage = () => (
  <Card header={<Heading>Action</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { Action } from "@colonydb/anthill/Action";
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
                  <Action
                    icon={<Icon symbol="External" />}
                    onClick={() => {
                      window.alert("Hello!");
                    }}
                  >
                    Action
                  </Action>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Action
                      icon={<Icon symbol="External" />}
                      onClick={() => {
                        window.alert("Hello!");
                      }}
                    >
                      Action
                    </Action>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Link</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Action icon={<Icon symbol="External" />} href="#example">
                    Action
                  </Action>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Action icon={<Icon symbol="External" />} href="#example">
                      Action
                    </Action>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Icon</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Action
                    icon={<Icon symbol="External" />}
                    onClick={() => {
                      window.alert("Hello!");
                    }}
                    title="Action"
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
                    <Action
                      icon={<Icon symbol="External" />}
                      onClick={() => {
                        window.alert("Hello!");
                      }}
                      title="Action"
                    />
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Disabled</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Action
                    disabled
                    icon={<Icon symbol="External" />}
                    onClick={() => {
                      window.alert("Hello!");
                    }}
                  >
                    Action
                  </Action>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Action
                      disabled
                      icon={<Icon symbol="External" />}
                      onClick={() => {
                        window.alert("Hello!");
                      }}
                    >
                      Action
                    </Action>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Font Size</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Action
                    fontSize="tiny"
                    icon={<Icon symbol="External" />}
                    onClick={() => {
                      window.alert("Hello!");
                    }}
                  >
                    Action
                  </Action>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Action
                      fontSize="tiny"
                      icon={<Icon symbol="External" />}
                      onClick={() => {
                        window.alert("Hello!");
                      }}
                    >
                      Action
                    </Action>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Dangerous</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Action
                    dangerous
                    icon={<Icon symbol="External" />}
                    onClick={() => {
                      window.alert("Hello!");
                    }}
                  >
                    Action
                  </Action>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Action
                      dangerous
                      icon={<Icon symbol="External" />}
                      onClick={() => {
                        window.alert("Hello!");
                      }}
                    >
                      Action
                    </Action>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Padded</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Action
                    icon={<Icon symbol="External" />}
                    onClick={() => {
                      window.alert("Hello!");
                    }}
                    padded
                  >
                    Action
                  </Action>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Action
                      icon={<Icon symbol="External" />}
                      onClick={() => {
                        window.alert("Hello!");
                      }}
                      padded
                    >
                      Action
                    </Action>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Custom Color</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Action
                    hue="blue"
                    icon={<Icon symbol="External" />}
                    onClick={() => {
                      window.alert("Hello!");
                    }}
                  >
                    Action
                  </Action>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Action
                      hue="blue"
                      icon={<Icon symbol="External" />}
                      onClick={() => {
                        window.alert("Hello!");
                      }}
                    >
                      Action
                    </Action>
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

export default ActionPage;
