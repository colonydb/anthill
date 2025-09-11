import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const InlinePage = () => (
  <Main header={<Heading>Inline</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { Inline } from "@colonydb/anthill/Inline";
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
                      <Inline>Example</Inline>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Inline>Example</Inline>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Font</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Inline font="tiny-monospace">Example</Inline>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Inline font="tiny-monospace">Example</Inline>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Custom Colour</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Inline hue="green">Example</Inline>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Inline hue="green">Example</Inline>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Truncated</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Inline truncated>
                        Voluptates et facere repudiandae corrupti qui debitis beatae rem sed non accusantium. Rerum
                        repudiandae expedita voluptatibus fugiat consequatur non quia iure omnis est nihil eligendi.
                        Sapiente alias consequatur iusto occaecati veniam delectus laudantium commodi qui laborum error.
                        Debitis consequuntur minima ipsum aperiam omnis nesciunt quia minima corporis laudantium
                        voluptas assumenda ut eos. Et tempore ad distinctio exercitationem fugiat repellat. Beatae
                        repudiandae voluptatem sint aut eos quibusdam qui omnis consequatur aliquid et sed facere quia.
                      </Inline>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Inline truncated>
                          Voluptates et facere repudiandae corrupti qui debitis beatae
                          rem sed non accusantium. Rerum repudiandae expedita
                          voluptatibus fugiat consequatur non quia iure omnis est
                          nihil eligendi. Sapiente alias consequatur iusto occaecati
                          veniam delectus laudantium commodi qui laborum error.
                          Debitis consequuntur minima ipsum aperiam omnis nesciunt
                          quia minima corporis laudantium voluptas assumenda ut eos.
                          Et tempore ad distinctio exercitationem fugiat repellat.
                          Beatae repudiandae voluptatem sint aut eos quibusdam qui
                          omnis consequatur aliquid et sed facere quia.
                        </Inline>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Custom Tag</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Inline tagName="strong">Example</Inline>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Inline tagName="strong">Example</Inline>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>StyleContext</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Inline
                        styleContextConfig={{
                          typography: 6,
                        }}
                      >
                        Example
                      </Inline>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Inline
                          styleContextConfig={{
                            typography: 6,
                          }}
                        >
                          Example
                        </Inline>
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

export default InlinePage;
