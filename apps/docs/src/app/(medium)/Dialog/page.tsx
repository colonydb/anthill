"use client";

import { Button } from "@colonydb/anthill/Button";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Dialog } from "@colonydb/anthill/Dialog";
import { DialogHeader } from "@colonydb/anthill/DialogHeader";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const DialogPage = () => (
  <Main header={<Heading>Dialog</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import { Dialog } from "@colonydb/anthill/Dialog";
              import { DialogHeader } from "@colonydb/anthill/DialogHeader";
            `}
          </CodeBlock>
        </CardContent>
      </Card>
      <Card header={<Heading>Examples</Heading>}>
        <CardContent>
          <Section title={<Heading>Minimal</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Dialog
                        dismissible
                        icon={<Icon symbol="External" />}
                        render={() => (
                          <Card>
                            <CardContent>content</CardContent>
                          </Card>
                        )}
                      >
                        Open
                      </Dialog>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Dialog
                          dismissible
                          icon={<Icon symbol="External" />}
                          render={() => (
                            <Card>
                              <CardContent>content</CardContent>
                            </Card>
                          )}
                        >
                          Open
                        </Dialog>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Header</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Dialog
                        dismissible
                        icon={<Icon symbol="External" />}
                        render={(close) => (
                          <Card header={<DialogHeader close={close}>header</DialogHeader>}>
                            <CardContent>content</CardContent>
                          </Card>
                        )}
                        width="small"
                      >
                        Open
                      </Dialog>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Dialog
                          dismissible
                          icon={<Icon symbol="External" />}
                          render={(close) => (
                            <Card header={<DialogHeader close={close}>header</DialogHeader>}>
                              <CardContent>content</CardContent>
                            </Card>
                          )}
                          width="narrow"
                        >
                          Open
                        </Dialog>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Fixed Width</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Dialog
                        dismissible
                        icon={<Icon symbol="External" />}
                        render={() => (
                          <Card>
                            <CardContent>content</CardContent>
                          </Card>
                        )}
                        width="medium"
                      >
                        Open
                      </Dialog>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Dialog
                          dismissible
                          icon={<Icon symbol="External" />}
                          render={() => (
                            <Card>
                              <CardContent>content</CardContent>
                            </Card>
                          )}
                          width="narrow"
                        >
                          Open
                        </Dialog>
                      `}
                    </CodeBlock>
                  ),
                },
              ]}
            />
          </Section>
          <Section title={<Heading>Manually Closed</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Dialog
                        icon={<Icon symbol="External" />}
                        render={(closeDialog) => <Button onClick={closeDialog}>Close</Button>}
                      >
                        Open
                      </Dialog>
                    </Specimen>
                  ),
                },
                {
                  key: "code",
                  label: "Code",
                  content: (
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Dialog icon={<Icon symbol="External" />} render={(closeDialog) => <Button onClick={closeDialog}>Close</Button>}>
                          Open
                        </Dialog>
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

export default DialogPage;
