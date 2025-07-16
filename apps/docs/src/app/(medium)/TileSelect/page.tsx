import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
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
                    name="example"
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
                      name="example"
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
    </CardContent>
  </Card>
);

export default TileSelectPage;
