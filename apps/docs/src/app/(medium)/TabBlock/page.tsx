import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const TabBlockPage = () => (
  <Main header={<Heading>TabBlock</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { TabBlock } from "@colonydb/anthill/TabBlock";
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
                      <TabBlock
                        items={[
                          {
                            key: "a",
                            label: "Tab A",
                            content: <div>Qui odit eaque assumenda illo consectetur deserunt facere quos sit.</div>,
                          },
                          {
                            key: "b",
                            label: "Tab B",
                            content: (
                              <div>Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis rem dolorem.</div>
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
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <TabBlock
                          items={[
                            {
                              key: "a",
                              label: "Tab A",
                              content: <div>Qui odit eaque assumenda illo consectetur deserunt facere quos sit.</div>,
                            },
                            {
                              key: "b",
                              label: "Tab B",
                              content: (
                                <div>Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis rem dolorem.</div>
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
          <Section title={<Heading>Seamless</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <TabBlock
                        items={[
                          {
                            key: "a",
                            label: "Tab A",
                            content: <div>Qui odit eaque assumenda illo consectetur deserunt facere quos sit.</div>,
                          },
                          {
                            key: "b",
                            label: "Tab B",
                            content: (
                              <div>Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis rem dolorem.</div>
                            ),
                          },
                        ]}
                        seamless
                      />
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <TabBlock
                          items={[
                            {
                              key: "a",
                              label: "Tab A",
                              content: <div>Qui odit eaque assumenda illo consectetur deserunt facere quos sit.</div>,
                            },
                            {
                              key: "b",
                              label: "Tab B",
                              content: (
                                <div>Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis rem dolorem.</div>
                              ),
                            },
                          ]}
                          seamless
                        />
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
                      <TabBlock
                        items={[
                          {
                            key: "a",
                            label: "Tab A",
                            content: (
                              <TabBlock
                                items={[
                                  {
                                    key: "a",
                                    label: "Tab A",
                                    content: (
                                      <TabBlock
                                        items={[
                                          {
                                            key: "a",
                                            label: "Tab A",
                                            content: (
                                              <TabBlock
                                                items={[
                                                  {
                                                    key: "a",
                                                    label: "Tab A",
                                                    content: (
                                                      <TabBlock
                                                        items={[
                                                          {
                                                            key: "a",
                                                            label: "Tab A",
                                                            content: (
                                                              <TabBlock
                                                                items={[
                                                                  {
                                                                    key: "a",
                                                                    label: "Tab A",
                                                                    content: (
                                                                      <div>
                                                                        Qui odit eaque assumenda illo consectetur
                                                                        deserunt facere quos sit.
                                                                      </div>
                                                                    ),
                                                                  },
                                                                  {
                                                                    key: "b",
                                                                    label: "Tab B",
                                                                    content: (
                                                                      <div>
                                                                        Ducimus aut ut sed culpa enim sunt id sed nam
                                                                        eveniet officiis rem dolorem.
                                                                      </div>
                                                                    ),
                                                                  },
                                                                ]}
                                                              />
                                                            ),
                                                          },
                                                          {
                                                            key: "b",
                                                            label: "Tab B",
                                                            content: (
                                                              <div>
                                                                Ducimus aut ut sed culpa enim sunt id sed nam eveniet
                                                                officiis rem dolorem.
                                                              </div>
                                                            ),
                                                          },
                                                        ]}
                                                      />
                                                    ),
                                                  },
                                                  {
                                                    key: "b",
                                                    label: "Tab B",
                                                    content: (
                                                      <div>
                                                        Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis
                                                        rem dolorem.
                                                      </div>
                                                    ),
                                                  },
                                                ]}
                                              />
                                            ),
                                          },
                                          {
                                            key: "b",
                                            label: "Tab B",
                                            content: (
                                              <div>
                                                Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis rem
                                                dolorem.
                                              </div>
                                            ),
                                          },
                                        ]}
                                      />
                                    ),
                                  },
                                  {
                                    key: "b",
                                    label: "Tab B",
                                    content: (
                                      <div>
                                        Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis rem dolorem.
                                      </div>
                                    ),
                                  },
                                ]}
                              />
                            ),
                          },
                          {
                            key: "b",
                            label: "Tab B",
                            content: (
                              <div>Ducimus aut ut sed culpa enim sunt id sed nam eveniet officiis rem dolorem.</div>
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
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <TabBlock
                          items={[
                            {
                              key: "a",
                              label: "Tab A",
                              content: (
                                <Specimen seamless>
                                  Qui odit eaque assumenda illo consectetur deserunt
                                  facere quos sit.
                                </Specimen>
                              ),
                            },
                            {
                              key: "b",
                              label: "Tab B",
                              content: (
                                <Specimen seamless>
                                  Ducimus aut ut sed culpa enim sunt id sed nam
                                  eveniet officiis rem dolorem.
                                </Specimen>
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
    </Stack>
  </Main>
);

export default TabBlockPage;
