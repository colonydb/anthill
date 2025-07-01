import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CardTable } from "@colonydb/anthill/CardTable";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import * as icons from "@colonydb/anthill/icons";
import { PlainText } from "@colonydb/anthill/PlainText";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const IconPage = () => (
  <Stack>
    <Card header={<Heading>Icon</Heading>}>
      <CardContent>
        <CodeBlock language="tsx">
          {js`
            import { Icon } from "@colonydb/anthill/Icon";
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
                    <Icon symbol="External" />
                  </Specimen>
                ),
              },
              {
                key: "code",
                label: "Code",
                content: (
                  <CodeBlock language="tsx">
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
                  <Specimen>
                    <Icon symbol="External" title="Open" />
                  </Specimen>
                ),
              },
              {
                key: "code",
                label: "Code",
                content: (
                  <CodeBlock language="tsx">
                    {js`
                      <Icon symbol="External" title="Open" />
                    `}
                  </CodeBlock>
                ),
              },
            ]}
          />
        </Section>
        <Section title={<Heading>Coloured</Heading>}>
          <TabBlock
            items={[
              {
                key: "specimen",
                label: "Specimen",
                content: (
                  <Specimen>
                    <Icon color="green-00" symbol="Mail" />
                  </Specimen>
                ),
              },
              {
                key: "code",
                label: "Code",
                content: (
                  <CodeBlock language="tsx">
                    {js`
                      <Icon color="green-00" symbol="Mail" />
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
                  <Specimen>
                    <Icon fontSize="hero" symbol="Mail" />
                  </Specimen>
                ),
              },
              {
                key: "code",
                label: "Code",
                content: (
                  <CodeBlock language="tsx">
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
    <Card header={<Heading>Icon Symbols</Heading>}>
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
            symbol: <PlainText font="tiny-monospace">{name}</PlainText>,
            tiny: (
              <Specimen>
                <Icon symbol={name} fontSize="tiny" />
              </Specimen>
            ),
            small: (
              <Specimen>
                <Icon symbol={name} fontSize="small" />
              </Specimen>
            ),
            regular: (
              <Specimen>
                <Icon symbol={name} fontSize="regular" />
              </Specimen>
            ),
            subheading: (
              <Specimen>
                <Icon symbol={name} fontSize="subheading" />
              </Specimen>
            ),
            heading: (
              <Specimen>
                <Icon symbol={name} fontSize="heading" />
              </Specimen>
            ),
            title: (
              <Specimen>
                <Icon symbol={name} fontSize="title" />
              </Specimen>
            ),
            hero: (
              <Specimen>
                <Icon symbol={name} fontSize="hero" />
              </Specimen>
            ),
          },
        }))}
      />
    </Card>
  </Stack>
);

export default IconPage;
