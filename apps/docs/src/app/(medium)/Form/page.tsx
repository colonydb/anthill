"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Form } from "@colonydb/anthill/Form";
import { FormErrorBanner } from "@colonydb/anthill/FormErrorBanner";
import { FormFooter } from "@colonydb/anthill/FormFooter";
import { Heading } from "@colonydb/anthill/Heading";
import { PlainText } from "@colonydb/anthill/PlainText";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";
import * as v from "valibot";

const FormPage = () => (
  <Card header={<Heading>Form</Heading>}>
    <CardContent>
      <CodeBlock language="tsx">
        {js`
          import * as v from "valibot";
          import { Form } from "@colonydb/anthill/Form";
          import { FormErrorBanner } from "@colonydb/anthill/FormErrorBanner";
          import { FormFooter } from "@colonydb/anthill/FormFooter";
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
                  <Form
                    action={async () => ({ ok: true, data: {} })}
                    id="example"
                    initialData={{}}
                    schema={v.object({})}
                  >
                    <FormFooter actionLabel="Submit" />
                  </Form>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Form
                      action={async () => ({ ok: true, data: {} })}
                      id="example"
                      initialData={{}}
                      schema={v.object({})}
                    >
                      <FormFooter actionLabel="Submit" />
                    </Form>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Custom Success</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Form
                    action={async () => ({ ok: true, data: {} })}
                    id="example"
                    initialData={{}}
                    renderSuccess={() => <PlainText font="hero">Success!</PlainText>}
                    schema={v.object({})}
                  >
                    <FormFooter actionLabel="Submit" />
                  </Form>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Form
                      action={async () => ({ ok: true, data: {} })}
                      id="example"
                      initialData={{}}
                      renderSuccess={() => <PlainText font="hero">Success!</PlainText>}
                      schema={v.object({})}
                    >
                      <FormFooter actionLabel="Submit" />
                    </Form>
                  `}
                </CodeBlock>
              ),
            },
          ]}
        />
      </Section>
      <Section title={<Heading>Error Handling</Heading>}>
        <TabBlock
          items={[
            {
              key: "specimen",
              label: "Specimen",
              content: (
                <Specimen>
                  <Form
                    action={async () => ({
                      ok: false,
                      errors: {
                        count: 2,
                        nested: { name: [{ key: "1", message: "Nested error" }] },
                        root: [{ key: "1", message: "Root error" }],
                      },
                    })}
                    id="example"
                    initialData={{}}
                    schema={v.object({ name: v.optional(v.any()) })}
                  >
                    <Stack>
                      <FormErrorBanner />
                      <FormErrorBanner field="name" />
                      <FormFooter actionLabel="Submit" />
                    </Stack>
                  </Form>
                </Specimen>
              ),
            },
            {
              key: "code",
              label: "Code",
              content: (
                <CodeBlock language="tsx">
                  {js`
                    <Form
                      action={async () => ({
                        ok: false,
                        errors: {
                          count: 2,
                          nested: { name: [{ key: "1", message: "Nested error" }] },
                          root: [{ key: "1", message: "Root error" }],
                        },
                      })}
                      id="example"
                      initialData={{}}
                      schema={v.object({ name: v.optional(v.any()) })}
                    >
                      <Stack>
                        <FormErrorBanner />
                        <FormErrorBanner field="name" />
                        <FormFooter actionLabel="Submit" />
                      </Stack>
                    </Form>
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

export default FormPage;
