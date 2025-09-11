"use client";

import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Form } from "@colonydb/anthill/Form";
import { FormErrorBanner } from "@colonydb/anthill/FormErrorBanner";
import { FormFooter } from "@colonydb/anthill/FormFooter";
import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Main } from "@colonydb/anthill/Main";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TabBlock } from "@colonydb/anthill/TabBlock";
import js from "dedent";
import * as v from "valibot";

const FormPage = () => (
  <Main header={<Heading>Form</Heading>}>
    <Stack>
      <Card header={<Heading>Usage</Heading>}>
        <CardContent>
          <CodeBlock language="tsx">
            {js`
              import * as v from "valibot";
              import { Form } from "@colonydb/anthill/Form";
              import { FormErrorBanner } from "@colonydb/anthill/FormErrorBanner";
              import { FormFooter } from "@colonydb/anthill/FormFooter";
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
                      <Form
                        action={async () => ({ ok: true, data: {} })}
                        id="basicExample"
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
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Form
                          action={async () => ({ ok: true, data: {} })}
                          id="basicExample"
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
                    <Specimen seamless>
                      <Form
                        action={async () => ({ ok: true, data: {} })}
                        id="customSuccessExample"
                        initialData={{}}
                        renderSuccess={() => <Inline font="hero">Success!</Inline>}
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
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Form
                          action={async () => ({ ok: true, data: {} })}
                          id="customSuccessExample"
                          initialData={{}}
                          renderSuccess={() => <Inline font="hero">Success!</Inline>}
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
                    <Specimen seamless>
                      <Form
                        action={async () => ({
                          data: {},
                          errors: {
                            count: 2,
                            nested: { name: [{ key: "1", message: "Nested error" }] },
                            root: [{ key: "1", message: "Root error" }],
                          },
                          ok: false,
                        })}
                        id="errorHandlingExample"
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
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Form
                          action={async () => ({
                            data: {},
                            errors: {
                              count: 2,
                              nested: { name: [{ key: "1", message: "Nested error" }] },
                              root: [{ key: "1", message: "Root error" }],
                            },
                            ok: false,
                          })}
                          id="errorHandlingExample"
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
          <Section title={<Heading>Repeatable</Heading>}>
            <TabBlock
              items={[
                {
                  key: "specimen",
                  label: "Specimen",
                  content: (
                    <Specimen seamless>
                      <Form
                        action={async () => ({ ok: true, data: {} })}
                        id="repeatableExample"
                        initialData={{}}
                        repeatable
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
                    <CodeBlock language="tsx" seamless>
                      {js`
                        <Form
                          action={async () => ({ ok: true, data: {} })}
                          id="repeatableExample"
                          initialData={{}}
                          repeatable
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
        </CardContent>
      </Card>
    </Stack>
  </Main>
);

export default FormPage;
