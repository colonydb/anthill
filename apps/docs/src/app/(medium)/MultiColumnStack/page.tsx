"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { MultiColumnStack } from "@colonydb/anthill/MultiColumnStack";
import { Section } from "@colonydb/anthill/Section";
import { SpacingLevelContext } from "@colonydb/anthill/SpacingLevelContext";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const MultiColumnStackPage = () => (
  <Card header={<Heading>Stack</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { MultiColumnStack } from "@colonydb/anthill/MultiColumnStack";
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
                    <MultiColumnStack columns={2}>
                      <p>
                        Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                        consequatur deleniti pariatur et sed voluptas iure. Labore et nostrum necessitatibus est sequi
                        aut. Eligendi autem deleniti ut nemo. Neque consequatur deleniti pariatur et sed voluptas iure.
                        Labore et nostrum necessitatibus est sequi aut.
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
                    </MultiColumnStack>
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
                    <MultiColumnStack columns={2}>
                      <p>
                        Labore et nostrum necessitatibus est sequi aut. Eligendi autem deleniti ut nemo. Neque
                        consequatur deleniti pariatur et sed voluptas iure. Labore et nostrum necessitatibus est sequi
                        aut. Eligendi autem deleniti ut nemo. Neque consequatur deleniti pariatur et sed voluptas iure.
                        Labore et nostrum necessitatibus est sequi aut.
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
                    </MultiColumnStack>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Fix Column Widths</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <SpacingLevelContext.Provider value={4}>
                    <MultiColumnStack columns="50px">
                      <p>One</p>
                      <p>Two</p>
                      <p>Three</p>
                      <p>Four</p>
                      <p>Five</p>
                      <p>Six</p>
                      <p>Seven</p>
                      <p>Eight</p>
                      <p>Nine</p>
                      <p>Ten</p>
                      <p>Eleven</p>
                      <p>Twelve</p>
                      <p>Thirteen</p>
                    </MultiColumnStack>
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
                    <MultiColumnStack columns="50px">
                      <p>One</p>
                      <p>Two</p>
                      <p>Three</p>
                      <p>Four</p>
                      <p>Five</p>
                      <p>Six</p>
                      <p>Seven</p>
                      <p>Eight</p>
                      <p>Nine</p>
                      <p>Ten</p>
                      <p>Eleven</p>
                      <p>Twelve</p>
                      <p>Thirteen</p>
                    </MultiColumnStack>
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

export default MultiColumnStackPage;
