import { Card } from "@colonydb/anthill/Card";
import { CardTable } from "@colonydb/anthill/CardTable";
import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Section } from "@colonydb/anthill/Section";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";

const TypefacesPage = () => (
  <Section title={<Heading>Typefaces</Heading>}>
    <Card>
      <CardTable
        cols={{ name: "Name", specimen: "Specimen" }}
        rows={["brand", "system", "monospace"].map((typeface) => ({
          key: typeface,
          values: {
            name: <Inline font="tiny-monospace">{typeface}</Inline>,
            specimen: (
              <Stack spacing="00">
                <Specimen>
                  <p
                    style={{
                      fontFamily: `var(--typeface-${typeface})`,
                      fontSize: "var(--size-title-font)",
                      lineHeight: "var(--size-title-line)",
                    }}
                  >
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </Specimen>
                <Specimen>
                  <p style={{ fontFamily: `var(--${typeface})` }}>The quick brown fox jumps over the lazy dog.</p>
                </Specimen>
              </Stack>
            ),
          },
        }))}
      />
    </Card>
  </Section>
);

export default TypefacesPage;
