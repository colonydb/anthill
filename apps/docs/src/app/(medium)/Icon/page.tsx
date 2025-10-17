import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CardTable } from "@colonydb/anthill/CardTable";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Inline } from "@colonydb/anthill/Inline";
import * as icons from "@colonydb/anthill/icons";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const IconPage = () => (
  <Main header={<Heading>Icon</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { Icon } from "@colonydb/anthill/Icon";
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
                    <Specimen center seamless>
                      <Icon symbol="External" />
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Icon symbol="External" />
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Title</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen center seamless>
                      <Icon symbol="External" title="Open" />
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Icon symbol="External" title="Open" />
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Hero Font Size</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen center seamless>
                      <Icon fontSize="hero" symbol="Mail" />
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Icon fontSize="hero" symbol="Mail" />
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
        </CardContent>
      </Card>
      <Card header={<Heading>Symbols</Heading>}>
        <CardTable
          cols={{
            symbol: "Symbol",
            tiny: "Tiny",
            small: "Small",
            regular: "Regular",
            subheading: "Subheading",
            heading: "Heading",
            title: "Title",
            hero: "Hero",
          }}
          rows={(Object.keys(icons) as Array<keyof typeof icons>).map((name) => ({
            key: name,
            values: {
              symbol: <Inline font="tiny-monospace">{name}</Inline>,
              tiny: (
                <Specimen center>
                  <Icon symbol={name} fontSize="tiny" />
                </Specimen>
              ),
              small: (
                <Specimen center>
                  <Icon symbol={name} fontSize="small" />
                </Specimen>
              ),
              regular: (
                <Specimen center>
                  <Icon symbol={name} fontSize="regular" />
                </Specimen>
              ),
              subheading: (
                <Specimen center>
                  <Icon symbol={name} fontSize="subheading" />
                </Specimen>
              ),
              heading: (
                <Specimen center>
                  <Icon symbol={name} fontSize="heading" />
                </Specimen>
              ),
              title: (
                <Specimen center>
                  <Icon symbol={name} fontSize="title" />
                </Specimen>
              ),
              hero: (
                <Specimen center>
                  <Icon symbol={name} fontSize="hero" />
                </Specimen>
              ),
            },
          }))}
        />
      </Card>
    </Stack>
  </Main>
);

export default IconPage;
