import { Card } from "@colonydb/anthill/Card";
import { CardTable } from "@colonydb/anthill/CardTable";
import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Main } from "@colonydb/anthill/Main";
import { Specimen } from "@colonydb/anthill/Specimen";

const FontsPage = () => (
  <Main header={<Heading>Fonts</Heading>}>
    <Card>
      <CardTable
        cols={{ name: "Name", specimen: "Specimen" }}
        rows={[
          "hero",
          "title",
          "heading",
          "subheading",
          "regular",
          "regular-bold",
          "regular-italic",
          "regular-bold-italic",
          "regular-monospace",
          "small",
          "small-bold",
          "small-italic",
          "small-bold-italic",
          "small-monospace",
          "tiny",
          "tiny-bold",
          "tiny-italic",
          "tiny-bold-italic",
          "tiny-monospace",
        ].map((font) => ({
          key: font,
          values: {
            name: <Inline font="tiny-monospace">{font}</Inline>,
            specimen: (
              <Specimen>
                <p style={{ font: `var(--font-${font})` }}>
                  Aspernatur veniam quasi dolores nulla quaerat libero culpa ipsa enim quia ut magni sint dolor tenetur.
                  Consequatur itaque officiis perferendis id vero aspernatur sed autem et harum. Est magnam
                  reprehenderit nemo sint quis nam odit aut quod ad rem repellendus eaque et. In rerum et sit quas
                  ratione nostrum sed et officia ut. Aperiam eum aut dolores aut rerum ut sit inventore et quidem
                  molestias maiores. Enim quam aspernatur aliquid similique qui officiis necessitatibus doloribus
                  possimus aut sint totam aut voluptas. Minus excepturi sit odio est. Atque beatae soluta et et est fuga
                  officiis vel facere.
                </p>
              </Specimen>
            ),
          },
        }))}
      />
    </Card>
  </Main>
);

export default FontsPage;
