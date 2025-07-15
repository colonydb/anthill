import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Link } from "@colonydb/anthill/Link";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const LinkPage = () => (
  <Card header={<Heading>Link</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { Link } from "@colonydb/anthill/Link";
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
                  <Link href="https://example.com">Example</Link>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Link href="https://example.com">Example</Link>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>External</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Link external href="https://example.com">
                    Example
                  </Link>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Link external href="https://example.com">Example</Link>
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
                  <Link href="https://example.com" icon={<Icon symbol="External" />}>
                    Example
                  </Link>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Link href="https://example.com" icon={<Icon symbol="External" />}>
                      Example
                    </Link>
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

export default LinkPage;
