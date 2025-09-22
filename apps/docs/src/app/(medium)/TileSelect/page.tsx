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
import { TabBlock } from "@colonydb/anthill/TabBlock";
import { TileSelect } from "@colonydb/anthill/TileSelect";
import js from "dedent";

const TileSelectPage = () => (
  <Main header={<Heading>TileSelect</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { TileSelect } from "@colonydb/anthill/TileSelect";
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
                      <TileSelect
                        name="example1"
                        options={[
                          { label: "One", value: "1" },
                          { label: "Two", value: "2" },
                          { label: "Three", value: "3" },
                        ]}
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
                        <TileSelect
                          name="example1"
                          options={[
                            { label: "One", value: "1" },
                            { label: "Two", value: "2" },
                            { label: "Three", value: "3" },
                          ]}
                        />
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
                      <TileSelect
                        name="example2"
                        options={[
                          { label: "One", value: "1" },
                          { label: "Two", value: "2" },
                          { label: "Three", value: "3" },
                        ]}
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
                        <TileSelect
                          name="example2"
                          options={[
                            { label: "One", value: "1" },
                            { label: "Two", value: "2" },
                            { label: "Three", value: "3" },
                          ]}
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
                    <StatefulSpecimen initialState={"1" as "1" | "2" | "3" | null} seamless>
                      {(state, setState) => (
                        <TileSelect
                          name="example3"
                          options={[
                            { label: "One", value: "1" },
                            { label: "Two", value: "2" },
                            { label: "Three", value: "3" },
                          ]}
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
                        <TileSelect
                          name="example3"
                          options={[
                            { label: "One", value: "1" },
                            { label: "Two", value: "2" },
                            { label: "Three", value: "3" },
                          ]}
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
        </CardContent>
      </Card>
    </Stack>
  </Main>
);

export default TileSelectPage;
