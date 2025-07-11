import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CardTable } from "@colonydb/anthill/CardTable";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const CardPage = () => (
  <Card header={<Heading>Card</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { Card } from "@colonydb/anthill/Card";
          import { CardContent } from "@colonydb/anthill/CardContent";
          import { CardTable } from "@colonydb/anthill/CardTable";
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
                  <Card>
                    <CardContent>
                      <p>The quick brown fox jumps over the lazy dog.</p>
                    </CardContent>
                  </Card>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Card>
                      <CardContent>
                        <p>The quick brown fox jumps over the lazy dog.</p>
                      </CardContent>
                    </Card>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Header &amp; Footer</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Section headingLevel={2}>
                    <Card footer={<p>footer</p>} header={<Heading>Header</Heading>}>
                      <CardContent>
                        <p>The quick brown fox jumps over the lazy dog.</p>
                      </CardContent>
                    </Card>
                  </Section>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Card footer={<p>footer</p>} header={<Heading>Header</Heading>}>
                      <CardContent>
                        <p>The quick brown fox jumps over the lazy dog.</p>
                      </CardContent>
                    </Card>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Icon</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Section headingLevel={2}>
                    <Card header={<Heading>Header</Heading>} icon={<Icon symbol="Mail" />} headingLevel={1}>
                      <CardContent>
                        <p>The quick brown fox jumps over the lazy dog.</p>
                      </CardContent>
                    </Card>
                  </Section>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Card header={<Heading>Header</Heading>} icon={<Icon symbol="Mail" />}>
                      <CardContent>
                        <p>The quick brown fox jumps over the lazy dog.</p>
                      </CardContent>
                    </Card>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Table</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Card>
                    <CardTable
                      cols={{ a: "Col A", b: "Col B" }}
                      rows={[
                        {
                          key: "1",
                          values: {
                            a: <p>A1</p>,
                            b: <p>B1</p>,
                          },
                        },
                        {
                          key: "2",
                          values: {
                            a: <p>A2</p>,
                            b: <p>B2</p>,
                          },
                        },
                      ]}
                    />
                  </Card>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Card>
                      <CardTable
                        cols={{ a: "Col A", b: "Col B" }}
                        rows={[
                          {
                            key: "1",
                            values: {
                              a: <p>A1</p>,
                              b: <p>B1</p>,
                            },
                          },
                          {
                            key: "2",
                            values: {
                              a: <p>A2</p>,
                              b: <p>B2</p>,
                            },
                          },
                        ]}
                      />
                    </Card>
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

export default CardPage;
