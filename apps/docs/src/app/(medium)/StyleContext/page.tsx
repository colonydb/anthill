"use client";

import type { Hue, StyleContextConfig } from "@colonydb/anthill";
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
  const [background, setBackground] = useState<Hue>("gray");
  const [color, setColor] = useState<Hue | "default">("default");
  const [container, setContainer] = useState(0);
  const [muted, setMuted] = useState(false);
  const [spacing, setSpacing] = useState(0);
  const [headingLevel, setHeadingLevel] = useState(1);

  const styleContextConfig = useMemo<StyleContextConfig>(
    () => ({ background, color, container, muted, spacing, headingLevel }),
    [background, color, container, muted, spacing, headingLevel],
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
                      color: {styleContext.color}
                      <br />
                      container: {styleContext.container}
                      <br />
                      spacing: {styleContext.spacing}
                      <br />
                      headingLevel: {styleContext.headingLevel}
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
                    headingLevel: (value) => value + 1,
                  }, []);

                  const { styleContext, styleContextClassName, StyleContextProvider } = useStyleContext(styleContextConfig);

                  return (
                    <div className={styleContextClassName}>
                      <StyleContextProvider>
                        container: {styleContext.container}
                        <br />
                        spacing: {styleContext.spacing}
                        <br />
                        headingLevel: {styleContext.headingLevel}
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
                <RegularField label="Background">
                  <TileSelect
                    name="background"
                    options={(
                      [
                        "gray",
                        "red",
                        "orange",
                        "yellow",
                        "lime",
                        "green",
                        "teal",
                        "cyan",
                        "blue",
                        "violet",
                        "magenta",
                      ] as const
                    ).map((value) => ({ label: value, value }))}
                    onChange={(value) => {
                      setBackground(value === null ? "gray" : value);
                    }}
                    value={background}
                  />
                </RegularField>
                <RegularField label="Color">
                  <TileSelect
                    name="color"
                    options={(
                      [
                        "default",
                        "gray",
                        "red",
                        "orange",
                        "yellow",
                        "lime",
                        "green",
                        "teal",
                        "cyan",
                        "blue",
                        "violet",
                        "magenta",
                      ] as const
                    ).map((value) => ({ label: value, value }))}
                    onChange={(value) => {
                      setColor(value === null ? "default" : value);
                    }}
                    value={color}
                  />
                </RegularField>
                <RegularField label="Muted">
                  <TileSelect
                    name="muted"
                    options={(["false", "true"] as const).map((value) => ({ label: value, value }))}
                    onChange={(value) => {
                      setMuted(value === "true");
                    }}
                    value={muted.toString()}
                  />
                </RegularField>
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
                <RegularField label="Heading Level">
                  <TileSelect
                    name="headingLevel"
                    options={[1, 2, 3, 4, 5, 6]
                      .map((value) => value.toString())
                      .map((value) => ({ label: value, value }))}
                    onChange={(value) => {
                      setHeadingLevel(value === null ? 1 : parseInt(value));
                    }}
                    value={headingLevel.toString()}
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
                  {...styleContextConfig}
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
