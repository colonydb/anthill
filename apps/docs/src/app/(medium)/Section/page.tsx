"use client";

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

const SectionPage = () => (
  <Main header={<Heading>Section</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { Section } from "@colonydb/anthill/Section";
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
                      <Section title={<Heading>Example</Heading>}>
                        <Stack>
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </p>
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </p>
                          <Heading>Example</Heading>
                          <p>
                            Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                            laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                          </p>
                          <p>
                            Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                            laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                          </p>
                        </Stack>
                      </Section>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Section title={<Heading>Example</Heading>}>
                          <Stack>
                            <p>
                              Labore et nostrum necessitatibus est sequi aut.
                              Eligendi autem deleniti ut nemo. Neque consequatur
                              deleniti pariatur et sed voluptas iure.
                            </p>
                            <p>
                              Labore et nostrum necessitatibus est sequi aut.
                              Eligendi autem deleniti ut nemo. Neque consequatur
                              deleniti pariatur et sed voluptas iure.
                            </p>
                            <Heading>Example</Heading>
                            <p>
                              Quia non quis est repellat distinctio quibusdam quia
                              in iure. Commodi iure dolorem est laboriosam voluptate
                              incidunt ab totam harum laudantium harum quia dolor.
                            </p>
                            <p>
                              Quia non quis est repellat distinctio quibusdam quia
                              in iure. Commodi iure dolorem est laboriosam voluptate
                              incidunt ab totam harum laudantium harum quia dolor.
                            </p>
                          </Stack>
                        </Section>
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
                    <Specimen seamless>
                      <Section title={<Heading>Example</Heading>}>
                        <Stack>
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </p>
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </p>
                          <Section title={<Heading>Example</Heading>}>
                            <Stack>
                              <p>
                                Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                                laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                              </p>
                              <p>
                                Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                                laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                              </p>
                            </Stack>
                          </Section>
                        </Stack>
                      </Section>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Section title={<Heading>Example</Heading>}>
                          <Stack>
                            <p>
                              Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                              consequatur deleniti pariatur et sed voluptas iure.
                            </p>
                            <p>
                              Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                              consequatur deleniti pariatur et sed voluptas iure.
                            </p>
                            <Section title={<Heading>Example</Heading>}>
                              <Stack>
                                <p>
                                  Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                                  laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                                </p>
                                <p>
                                  Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                                  laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                                </p>
                              </Stack>
                            </Section>
                          </Stack>
                        </Section>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Specifc Heading Level</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Section headingLevel={3} title={<Heading>Heading</Heading>}>
                        <Stack>
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </p>
                          <Section title={<Heading>Heading</Heading>}>
                            <Stack>
                              <p>
                                Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                                consequatur deleniti pariatur et sed voluptas iure.
                              </p>
                              <Section title={<Heading>Heading</Heading>}>
                                <Stack>
                                  <p>
                                    Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo.
                                    Neque consequatur deleniti pariatur et sed voluptas iure.
                                  </p>
                                  <Section title={<Heading>Heading</Heading>}>
                                    <p>
                                      Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo.
                                      Neque consequatur deleniti pariatur et sed voluptas iure.
                                    </p>
                                  </Section>
                                </Stack>
                              </Section>
                            </Stack>
                          </Section>
                        </Stack>
                      </Section>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Section headingLevel={3} title={<Heading>Heading</Heading>}>
                          <Stack>
                            <p>
                              Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                              consequatur deleniti pariatur et sed voluptas iure.
                            </p>
                            <Section title={<Heading>Heading</Heading>}>
                              <Stack>
                                <p>
                                  Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                                  consequatur deleniti pariatur et sed voluptas iure.
                                </p>
                                <Section title={<Heading>Heading</Heading>}>
                                  <Stack>
                                    <p>
                                      Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo.
                                      Neque consequatur deleniti pariatur et sed voluptas iure.
                                    </p>
                                    <Section title={<Heading>Heading</Heading>}>
                                      <p>
                                        Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo.
                                        Neque consequatur deleniti pariatur et sed voluptas iure.
                                      </p>
                                    </Section>
                                  </Stack>
                                </Section>
                              </Stack>
                            </Section>
                          </Stack>
                        </Section>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Indent</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Section>
                        Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                        consequatur deleniti pariatur et sed voluptas iure.
                        <Section indent>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                          <Section indent>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </Section>
                        </Section>
                      </Section>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Section>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi
                          autem deleniti ut nemo. Neque consequatur deleniti pariatur
                          et sed voluptas iure.
                          <Section indent>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi
                            autem deleniti ut nemo. Neque consequatur deleniti
                            pariatur et sed voluptas iure.
                            <Section indent>
                              Labore et nostrum necessitatibus est sequi aut. Eligendi
                              autem deleniti ut nemo. Neque consequatur deleniti
                              pariatur et sed voluptas iure.
                            </Section>
                          </Section>
                        </Section>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Specifc Tag</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Section tagName="div">
                        Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                        consequatur deleniti pariatur et sed voluptas iure.
                      </Section>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Section tagName="div">
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </Section>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Colour</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Section hue="blue">
                        Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                        consequatur deleniti pariatur et sed voluptas iure.
                      </Section>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Section hue="blue">
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </Section>
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

export default SectionPage;
