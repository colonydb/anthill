import { Banner } from "@colonydb/anthill/Banner";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const BannerPage = () => (
  <Card header={<Heading>Banner</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { Banner } from "@colonydb/anthill/Banner";
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
                  <Banner>Banner</Banner>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Banner>Banner</Banner>
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
                  <Banner
                    color="red"
                    headingLevel={5}
                    title={
                      <Heading>
                        <Icon symbol="Mail" /> Warning
                      </Heading>
                    }
                  >
                    Sit accusamus similique sed expedita recusandae in iure dignissimos eveniet. Et velit omnis sit
                    inventore assumenda. Et aut fugiat reprehenderit autem consequuntur dolore ducimus ut accusamus
                    iusto veritatis fugiat occaecati ut non. Quos at non provident ipsam. Non omnis nihil saepe soluta
                    suscipit eum exercitationem molestias. Velit ipsam quasi illum suscipit incidunt in. Eveniet facilis
                    voluptas nulla consequatur nostrum aliquid exercitationem nulla explicabo rerum ex officiis eos
                    tenetur. Dolor occaecati laboriosam aut tempora autem sit quo autem aut omnis aut.
                  </Banner>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Banner
                      color="red"
                      headingLevel={5}
                      title={
                        <Heading>
                          <Icon symbol="Mail" /> Warning
                        </Heading>
                      }
                    >
                      Sit accusamus similique sed expedita recusandae in iure dignissimos eveniet. Et velit omnis sit
                      inventore assumenda. Et aut fugiat reprehenderit autem consequuntur dolore ducimus ut accusamus
                      iusto veritatis fugiat occaecati ut non. Quos at non provident ipsam. Non omnis nihil saepe soluta
                      suscipit eum exercitationem molestias. Velit ipsam quasi illum suscipit incidunt in. Eveniet facilis
                      voluptas nulla consequatur nostrum aliquid exercitationem nulla explicabo rerum ex officiis eos
                      tenetur. Dolor occaecati laboriosam aut tempora autem sit quo autem aut omnis aut.
                    </Banner>
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

export default BannerPage;
