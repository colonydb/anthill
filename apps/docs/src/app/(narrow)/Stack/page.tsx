"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { Section } from "@colonydb/anthill/Section";
import { SpacingLevelContext } from "@colonydb/anthill/SpacingLevelContext";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const StackPage = () => (
  <Card header={<Heading>Stack</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { Stack } from "@colonydb/anthill/Stack";
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
                  <SpacingLevelContext.Provider value={4}>
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
                  </SpacingLevelContext.Provider>
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
      <Section title={<Heading>Nested</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <SpacingLevelContext.Provider value={4}>
                    <Stack>
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
                          Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                          laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                        </p>
                        <p>
                          Quia non quis est repellat distinctio quibusdam quia in iure. Commodi iure dolorem est
                          laboriosam voluptate incidunt ab totam harum laudantium harum quia dolor.
                        </p>
                      </Stack>
                    </Stack>
                  </SpacingLevelContext.Provider>
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
                      <Stack>
                        <p>
                          Quia non quis est repellat distinctio quibusdam quia
                          in iure. Commodi iure dolorem est laboriosam
                          voluptate incidunt ab totam harum laudantium harum
                          quia dolor.
                        </p>
                        <p>
                          Quia non quis est repellat distinctio quibusdam quia
                          in iure. Commodi iure dolorem est laboriosam
                          voluptate incidunt ab totam harum laudantium harum
                          quia dolor.
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
      <Section title={<Heading>Specifc Spacing</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Stack spacing="00">
                    <p>
                      Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                      deleniti pariatur et sed voluptas iure.
                    </p>
                    <p>
                      Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                      deleniti pariatur et sed voluptas iure.
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
                <CodeBlock language="tsx">
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
                <Specimen>
                  <Stack>
                    Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                    deleniti pariatur et sed voluptas iure.
                    <Stack indent>
                      Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                      deleniti pariatur et sed voluptas iure.
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
                <CodeBlock language="tsx">
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
                <Specimen>
                  <Stack tagName="ul">
                    <li>
                      Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                      deleniti pariatur et sed voluptas iure.
                    </li>
                    <li>
                      Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                      deleniti pariatur et sed voluptas iure.
                    </li>
                    <li>
                      Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                      deleniti pariatur et sed voluptas iure.
                    </li>
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
                <Specimen>
                  <Stack color={["blue-s3", "blue-t3"]}>
                    Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque consequatur
                    deleniti pariatur et sed voluptas iure.
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
                    <Stack color={["blue-s3", "blue-t3"]}>
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
);

export default StackPage;
