import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";
import json from "dedent";

const CodeBlockPage = () => (
  <Card header={<Heading>CodeBlock</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { CodeBlock } from "@colonydb/anthill/CodeBlock";
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
                  <CodeBlock language="tsx">{"console.log('example');"}</CodeBlock>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <CodeBlock language="tsx">{"console.log('example');"}</CodeBlock>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>JSON</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <CodeBlock language="json">{json`{ "foo": "bar" }`}</CodeBlock>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <CodeBlock language="json">{json\`{ "foo": "bar" }\`}</CodeBlock>
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

export default CodeBlockPage;
