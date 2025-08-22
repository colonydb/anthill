"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { StatefulSpecimen } from "@colonydb/anthill/StatefulSpecimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import { TileSelect } from "@colonydb/anthill/TileSelect";
import js from "dedent";

const TileSelectPage = () => (
  <Card header={<Heading>TileSelect</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { TileSelect } from "@colonydb/anthill/TileSelect";
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
                <CodeBlock language="tsx">
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
                <Specimen>
                  <TileSelect
                    name="example2"
                    options={[
                      { label: "One", value: "1" },
                      { label: "Two", value: "2" },
                      { label: "Three", value: "3" },
                    ]}
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
                    <TileSelect
                      name="example2"
                      options={[
                        { label: "One", value: "1" },
                        { label: "Two", value: "2" },
                        { label: "Three", value: "3" },
                      ]}
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
                <StatefulSpecimen initialState={"1" as "1" | "2" | "3" | null}>
                  {(state, setState) => (
                    <TileSelect
                      name="example3"
                      options={[
                        { label: "One", value: "1" },
                        { label: "Two", value: "2" },
                        { label: "Three", value: "3" },
                      ]}
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
                    <TileSelect
                      name="example3"
                      options={[
                        { label: "One", value: "1" },
                        { label: "Two", value: "2" },
                        { label: "Three", value: "3" },
                      ]}
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

export default TileSelectPage;
