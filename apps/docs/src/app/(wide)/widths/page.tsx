import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Main } from "@colonydb/anthill/Main";
import { Stack } from "@colonydb/anthill/Stack";
import styles from "./page.module.css";

const WidthsPage = () => (
  <Main header={<Heading>Widths</Heading>}>
    <Stack>
      <div className={styles.item} style={{ width: "var(--width-tiny)" }}>
        <Inline font="tiny-monospace">tiny</Inline>
      </div>
      <div className={styles.item} style={{ width: "var(--width-small)" }}>
        <Inline font="tiny-monospace">small</Inline>
      </div>
      <div className={styles.item} style={{ width: "var(--width-medium)" }}>
        <Inline font="tiny-monospace">medium</Inline>
      </div>
      <div className={styles.item} style={{ width: "var(--width-large)" }}>
        <Inline font="tiny-monospace">large</Inline>
      </div>
      <div className={styles.item} style={{ width: "var(--width-huge)" }}>
        <Inline font="tiny-monospace">huge</Inline>
      </div>
    </Stack>
  </Main>
);

export default WidthsPage;
