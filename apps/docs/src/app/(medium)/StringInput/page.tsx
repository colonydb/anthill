"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { StatefulSpecimen } from "@colonydb/anthill/StatefulSpecimen";
import { StringInput } from "@colonydb/anthill/StringInput";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const StringInputPage = () => (
  <Card header={<Heading>StringInput</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { StringInput } from "@colonydb/anthill/StringInput";
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
                  <StringInput name="example1" />
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <StringInput name="example1" />
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Unique ID</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <StringInput id="foo" name="example2" />
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <StringInput id="foo" name="example2" />
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Uncontrolled</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <StringInput
                    name="example3"
                    setValue={(value) => {
                      console.log(value);
                    }}
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
                    <StringInput
                      name="example3"
                      setValue={(value) => {
                        console.log(value);
                      }}
                    />
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Controlled</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <StatefulSpecimen initialState={"foo" as string}>
                  {(state, setState) => (
                    <StringInput
                      name="example4"
                      setValue={(value) => {
                        setState(value);
                      }}
                      value={state}
                    />
                  )}
                </StatefulSpecimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <StringInput
                      name="example4"
                      setValue={(value) => {
                        setState(value);
                      }}
                      value={state}
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

export default StringInputPage;
