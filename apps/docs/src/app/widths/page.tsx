import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Section } from "@colonydb/anthill/Section";
import styles from "./page.module.css";

const WidthsPage = () => (
  <Section title={<Heading>Widths</Heading>}>
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
  </Section>
);

export default WidthsPage;
