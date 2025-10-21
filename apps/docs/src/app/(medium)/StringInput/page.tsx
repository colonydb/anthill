"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { StatefulSpecimen } from "@colonydb/anthill/StatefulSpecimen";
import { StringInput } from "@colonydb/anthill/StringInput";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const StringInputPage = () => (
  <Main header={<Heading>StringInput</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { StringInput } from "@colonydb/anthill/StringInput";
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
                      <StringInput name="example1" />
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <StringInput name="example1" />
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Specific ID</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <StringInput id="foo" name="example2" />
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
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
                    <Specimen seamless>
                      <StringInput
                        name="example3"
                        onChange={(value) => {
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
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <StringInput
                          name="example3"
                          onChange={(value) => {
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
                    <StatefulSpecimen initialState={"foo" as string} seamless>
                      {(state, setState) => (
                        <StringInput
                          name="example4"
                          onChange={(value) => {
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
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <StringInput
                          name="example4"
                          onChange={(value) => {
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
          <Section title={<Heading>Seamless</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <StringInput name="example1" placeholder="example" seamless />
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <StringInput name="example1" placeholder="example" seamless />
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

export default StringInputPage;
