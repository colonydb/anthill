import { Card } from "@colonydb/anthill/Card";
import { CardTable } from "@colonydb/anthill/CardTable";
import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Main } from "@colonydb/anthill/Main";
import { Specimen } from "@colonydb/anthill/Specimen";
import { Stack } from "@colonydb/anthill/Stack";

const TypefacesPage = () => (
  <Main header={<Heading>Typefaces</Heading>}>
    <Card>
      <CardTable
        cols={{ name: "Name", specimen: "Specimens" }}
        rows={["brand", "system", "monospace"].map((typeface) => ({
          key: typeface,
          values: {
            name: <Inline font="tiny-monospace">{typeface}</Inline>,
            specimen: (
              <Stack spacingLevel={3}>
                <Specimen>
                  <p
                    style={{
                      fontFamily: `var(--config-${typeface}-typeface)`,
                      fontSize: "var(--config-title-font-size)",
                      lineHeight: "var(--config-title-line-height)",
                    }}
                  >
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </Specimen>
                <Specimen>
                  <p style={{ fontFamily: `var(--config-${typeface}-typeface)` }}>
                    The quick brown fox jumps over the lazy dog.
                  </p>
                </Specimen>
              </Stack>
            ),
          },
        }))}
      />
    </Card>
  </Main>
);

export default TypefacesPage;
