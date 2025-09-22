"use client";

import type { StyleContextConfig } from "@colonydb/anthill";
import { Block } from "@colonydb/anthill/Block";
import { Card } from "@colonydb/anthill/Card";
import { CardContent } from "@colonydb/anthill/CardContent";
import { CodeBlock } from "@colonydb/anthill/CodeBlock";
import { Heading } from "@colonydb/anthill/Heading";
import { RegularField } from "@colonydb/anthill/RegularField";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";
import { TileSelect } from "@colonydb/anthill/TileSelect";
import js from "dedent";
import { useMemo, useState } from "react";

const StyleContextPage = () => {
  const [container, setContainer] = useState(0);
  const [spacing, setSpacing] = useState(0);
  const [typography, setTypography] = useState(0);

  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({ container, spacing, typography }),
    [container, spacing, typography],
  );

  return (
    <Section title={<Heading>StyleContext</Heading>}>
      <Stack>
        <Card header={<Heading>Usage</Heading>}>
          <CardContent>
            <CodeBlock language="tsx">
              {js`
                "use client";

                import { StyleContext } from "@colonydb/anthill/StyleContext";
                import { useContext } from "react";

                export const ExampleComponent = ({ children }: Props) => {
                  const styleContext = useContext(StyleContext);
                  return (
                    <div>
                      container: {styleContext.container}
                      <br />
                      spacing: {styleContext.spacing}
                      <br />
                      typography: {styleContext.typography}
                    </div>
                  );
                };
              `}
            </CodeBlock>
            <CodeBlock language="tsx">
              {js`
                "use client";

                import type { StyleContextConfig } from "@colonydb/anthill";
                import { useStyleContext } from "@colonydb/anthill/useStyleContext";
                import { useMemo } from "react";

                export const ExampleComponent = ({ children }: Props) => {
                  const styleContextConfig = useMemo<StyleContextConfig>({
                    container: (value) => value + 1,
                    spacing: (value) => value + 1,
                    typography: (value) => value + 1,
                  }, []);

                  const { styleContext, styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

                  return (
                    <div className={styleContextClassName}>
                      <StyleContextProvider>
                        container: {styleContext.container}
                        <br />
                        spacing: {styleContext.spacing}
                        <br />
                        typography: {styleContext.typography}
                      </StyleContextProvider>
                    </div>
                  );
                };
              `}
            </CodeBlock>
          </CardContent>
        </Card>
        <Card header={<Heading>Playground</Heading>}>
          <CardContent>
            <Section title={<Heading>Configuration</Heading>}>
              <Stack>
                <RegularField label="Container">
                  <TileSelect
                    name="container"
                    options={[0, 1, 2, 3, 4].map((value) => value.toString()).map((value) => ({ label: value, value }))}
                    onChange={(value) => {
                      setContainer(value === null ? 0 : parseInt(value));
                    }}
                    value={container.toString()}
                  />
                </RegularField>
                <RegularField label="Spacing">
                  <TileSelect
                    name="spacing"
                    options={[0, 1, 2, 3, 4, 5, 6]
                      .map((value) => value.toString())
                      .map((value) => ({ label: value, value }))}
                    onChange={(value) => {
                      setSpacing(value === null ? 0 : parseInt(value));
                    }}
                    value={spacing.toString()}
                  />
                </RegularField>
                <RegularField label="Typography">
                  <TileSelect
                    name="typography"
                    options={[0, 1, 2, 3, 4, 5]
                      .map((value) => value.toString())
                      .map((value) => ({ label: value, value }))}
                    onChange={(value) => {
                      setTypography(value === null ? 0 : parseInt(value));
                    }}
                    value={typography.toString()}
                  />
                </RegularField>
              </Stack>
            </Section>
            <Section title={<Heading>Result</Heading>}>
              <Specimen>
                <Block
                  style={{
                    background: "var(--context-background)",
                    border: "var(--context-border)",
                    borderRadius: "var(--context-border-radius)",
                    font: "var(--context-body-font)",
                    padding: "var(--context-spacing)",
                  }}
                  styleContextConfig={styleContextConfig}
                >
                  <div style={{ font: "var(--context-heading-font)" }}>Heading</div>
                  <div style={{ marginTop: "var(--context-spacing)" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Proin gravida hendrerit lectus a. Quisque id diam vel quam elementum
                    pulvinar. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                    nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                    mollit anim id est laborum.
                  </div>
                </Block>
              </Specimen>
            </Section>
          </CardContent>
        </Card>
      </Stack>
    </Section>
  );
};

export default StyleContextPage;
