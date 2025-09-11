import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Main } from "@colonydb/anthill/Main";
import { RegularField } from "@colonydb/anthill/RegularField";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { StringInput } from "@colonydb/anthill/StringInput";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const RegularFieldPage = () => (
  <Main header={<Heading>RegularField</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { RegularField } from "@colonydb/anthill/RegularField";
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
                      <RegularField label="Label">Content</RegularField>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
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
                    <Specimen seamless>
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
                    <CodeBlock language="tsx" seamless>
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
                    <Specimen seamless>
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
                    <CodeBlock language="tsx" seamless>
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
                    <Specimen resetStyleContext seamless>
                      <RegularField label="label" description="description">
                        <Stack>
                          <StringInput name="input" />
                          <RegularField label="label" description="description">
                            <Stack>
                              <StringInput name="input" />
                              <RegularField label="label" description="description">
                                <StringInput name="input" />
                              </RegularField>
                            </Stack>
                          </RegularField>
                        </Stack>
                      </RegularField>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <RegularField label="label" description="description">
                          <RegularField label="label" description="description">
                            <RegularField label="label" description="description">
                              <StringInput name="input" />
                            </RegularField>
                          </RegularField>
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
    </Stack>
  </Main>
);

export default RegularFieldPage;
