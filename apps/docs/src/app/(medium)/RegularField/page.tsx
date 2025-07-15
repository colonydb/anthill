import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { RegularField } from "@colonydb/anthill/RegularField";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const RegularFieldPage = () => (
  <Card header={<Heading>RegularField</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { RegularField } from "@colonydb/anthill/RegularField";
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
                  <RegularField label="Label">Content</RegularField>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <RegularField label="Label">Content</RegularField>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Required</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <RegularField label="Label" required>
                    Content
                  </RegularField>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <RegularField label="Label" required>Content</RegularField>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Errors</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <RegularField
                    label="Label"
                    errors={[
                      { key: "1", message: "Error message 1" },
                      { key: "2", message: "Error message 2" },
                    ]}
                  >
                    Content
                  </RegularField>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <RegularField
                      label="Label"
                      errors={[
                        { key: "1", message: "Error message 1" },
                        { key: "2", message: "Error message 2" },
                      ]}
                    >
                      Content
                    </RegularField>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Nested</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <RegularField label="Label">
                    <p>Before</p>
                    <RegularField label="Label">
                      <p>Before</p>
                      <RegularField label="Label">
                        <p>Content</p>
                      </RegularField>
                      <p>After</p>
                    </RegularField>
                    <p>After</p>
                  </RegularField>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <RegularField label="Label">
                      <p>Before</p>
                      <RegularField label="Label">
                        <p>Before</p>
                        <RegularField label="Label">
                          <p>Content</p>
                        </RegularField>
                        <p>After</p>
                      </RegularField>
                      <p>After</p>
                    </RegularField>
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

export default RegularFieldPage;
