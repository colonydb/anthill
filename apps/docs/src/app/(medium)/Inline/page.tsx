import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const InlinePage = () => (
  <Card header={<Heading>Inline</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { Inline } from "@colonydb/anthill/Inline";
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
                  <Inline>Example</Inline>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
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
                <Specimen>
                  <Inline font="regular-monospace">Example</Inline>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Inline font="regular-monospace">Example</Inline>
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
                <Specimen>
                  <Inline hue="green">Example</Inline>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
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
                <Specimen>
                  <Inline truncated>
                    Voluptates et facere repudiandae corrupti qui debitis beatae rem sed non accusantium. Rerum
                    repudiandae expedita voluptatibus fugiat consequatur non quia iure omnis est nihil eligendi.
                    Sapiente alias consequatur iusto occaecati veniam delectus laudantium commodi qui laborum error.
                    Debitis consequuntur minima ipsum aperiam omnis nesciunt quia minima corporis laudantium voluptas
                    assumenda ut eos. Et tempore ad distinctio exercitationem fugiat repellat. Beatae repudiandae
                    voluptatem sint aut eos quibusdam qui omnis consequatur aliquid et sed facere quia.
                  </Inline>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
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
                <Specimen>
                  <Inline tagName="strong">Example</Inline>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Inline tagName="strong">Example</Inline>
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

export default InlinePage;
