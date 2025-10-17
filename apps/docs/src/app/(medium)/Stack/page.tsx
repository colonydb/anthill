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

const StackPage = () => (
  <Main header={<Heading>Stack</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { Stack } from "@colonydb/anthill/Stack";
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
                    <Specimen resetStyleContext seamless>
                      <Stack>
                        <p>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </p>
                        <p>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </p>
                        <p>
                          Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                          laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                        </p>
                        <p>
                          Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                          laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                        </p>
                      </Stack>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx">
                      {js`
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
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Specific Spacing</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen resetStyleContext seamless>
                      <Stack spacingLevel={3}>
                        <p>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </p>
                        <p>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </p>
                        <Stack>
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </p>
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </p>
                        </Stack>
                      </Stack>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Stack spacing="00">
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi
                            autem deleniti ut nemo. Neque consequatur deleniti
                            pariatur et sed voluptas iure.
                          </p>
                          <p>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi
                            autem deleniti ut nemo. Neque consequatur deleniti
                            pariatur et sed voluptas iure.
                          </p>
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
                          </Stack>
                        </Stack>
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
                    <Specimen resetStyleContext seamless>
                      <Stack>
                        Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                        consequatur deleniti pariatur et sed voluptas iure.
                        <Stack indent>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                          <Stack indent>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                            consequatur deleniti pariatur et sed voluptas iure.
                          </Stack>
                        </Stack>
                      </Stack>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Stack>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi
                          autem deleniti ut nemo. Neque consequatur deleniti pariatur
                          et sed voluptas iure.
                          <Stack indent>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi
                            autem deleniti ut nemo. Neque consequatur deleniti
                            pariatur et sed voluptas iure.
                            <Stack indent>
                              Labore et nostrum necessitatibus est sequi aut. Eligendi
                              autem deleniti ut nemo. Neque consequatur deleniti
                              pariatur et sed voluptas iure.
                            </Stack>
                          </Stack>
                        </Stack>
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
                    <Specimen resetStyleContext seamless>
                      <Stack tagName="ul">
                        <li>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </li>
                        <li>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </li>
                        <li>
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                          consequatur deleniti pariatur et sed voluptas iure.
                        </li>
                      </Stack>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Stack tagName="ul">
                          <li>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi
                            autem deleniti ut nemo. Neque consequatur deleniti
                            pariatur et sed voluptas iure.
                          </li>
                          <li>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi
                            autem deleniti ut nemo. Neque consequatur deleniti
                            pariatur et sed voluptas iure.
                          </li>
                          <li>
                            Labore et nostrum necessitatibus est sequi aut. Eligendi
                            autem deleniti ut nemo. Neque consequatur deleniti
                            pariatur et sed voluptas iure.
                          </li>
                        </Stack>
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
                    <Specimen resetStyleContext seamless>
                      <Stack color="blue">
                        Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                        consequatur deleniti pariatur et sed voluptas iure.
                      </Stack>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Stack color="blue">
                          Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                          deleniti pariatur et sed voluptas iure.
                        </Stack>
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

export default StackPage;
