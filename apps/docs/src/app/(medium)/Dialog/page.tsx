"use client";

import { Button } from "@colonydb/anthill/Button";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Dialog } from "@colonydb/anthill/Dialog";
import { DialogHeader } from "@colonydb/anthill/DialogHeader";
import { Heading } from "@colonydb/anthill/Heading";
import { Icon } from "@colonydb/anthill/Icon";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";

const DialogPage = () => (
  <Card header={<Heading>Dialog</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import { Dialog } from "@colonydb/anthill/Dialog";
          import { DialogHeader } from "@colonydb/anthill/DialogHeader";
        `}
      </CodeBlock>
      <Section title={<Heading>Minimal</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
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
                <CodeBlock language="tsx">
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
                <Specimen>
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
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
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
                <Specimen>
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
                <CodeBlock language="tsx">
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
                <Specimen>
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
                <CodeBlock language="tsx">
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
);

export default DialogPage;
