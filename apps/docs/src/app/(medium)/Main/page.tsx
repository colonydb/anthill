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

const MainPage = () => (
  <Main header={<Heading>Main</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { Main } from "@colonydb/anthill/Main";
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
                      <Main header={<Heading>Example</Heading>}>
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
                      </Main>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Main header={<Heading>Example</Heading>}>
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
                        </Main>
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

export default MainPage;
