import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import { TabBlockContent } from "@colonydb/anthill/TabBlockContent";
import js from "dedent";

const TabBlockPage = () => (
  <Card header={<Heading>TabBlock</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { TabBlock } from "@colonydb/anthill/TabBlock";
          import { TabBlockContent } from "@colonydb/anthill/TabBlockContent";
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
                  <TabBlock
                    items={[
                      {
                        key: "a",
                        label: "Tab A",
                        content: (
                          <TabBlockContent>
                            Qui odit eaque assumenda illo consectetur deserunt facere quos sit.
                          </TabBlockContent>
                        ),
                      },
                      {
                        key: "b",
                        label: "Tab B",
                        content: (
                          <TabBlockContent>
                            Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis rem dolorem.
                          </TabBlockContent>
                        ),
                      },
                    ]}
                  />
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <TabBlock
                      items={[
                        {
                          key: "a",
                          label: "Tab A",
                          content: (
                            <TabBlockContent>
                              Qui odit eaque assumenda illo consectetur deserunt
                              facere quos sit.
                            </TabBlockContent>
                          ),
                        },
                        {
                          key: "b",
                          label: "Tab B",
                          content: (
                            <TabBlockContent>
                              Ducimus aut ut sed culpa enim sunt id sed nam
                              eveniet officiis rem dolorem.
                            </TabBlockContent>
                          ),
                        },
                      ]}
                    />
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

export default TabBlockPage;
