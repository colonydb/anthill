import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import { default as js, default as json } from "dedent";

const CodeBlockPage = async () => {
  const htmlExample = await getHtmlExample();
  return (
    <Main header={<Heading>CodeBlock</Heading>}>
      <Stack>
        <Card header={<Heading>Usage</Heading>}>
          <CardContent>
            <CodeBlock language="tsx">
              {js`
              import { CodeBlock } from "@colonydb/anthill/CodeBlock";
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
                        <CodeBlock language="tsx">{"console.log('example');"}</CodeBlock>
                      </Specimen>
                    ),
                  },
                  {
                    key: "code",
                    label: "Code",
                    content: (
                      <CodeBlock language="tsx" seamless>
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
                      <Specimen seamless>
                        <CodeBlock language="json">{json`{ "foo": "bar" }`}</CodeBlock>
                      </Specimen>
                    ),
                  },
                  {
                    key: "code",
                    label: "Code",
                    content: (
                      <CodeBlock language="tsx" seamless>
                        {js`
                        <CodeBlock language="json">{json\`{ "foo": "bar" }\`}</CodeBlock>
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
                      <Specimen seamless>
                        <CodeBlock language="html">{htmlExample}</CodeBlock>
                      </Specimen>
                    ),
                  },
                  {
                    key: "code",
                    label: "Code",
                    content: (
                      <CodeBlock language="tsx" seamless>
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
      </Stack>
    </Main>
  );
};

const getHtmlExample = async () => {
  const response = await fetch("https://github.com/", {
    next: {
      revalidate: 60,
    },
  });
  const html = await response.text();
  return html;
};

export default CodeBlockPage;
