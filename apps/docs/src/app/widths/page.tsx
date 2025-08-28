import { Heading } from "@colonydb/anthill/Heading";
import { Inline } from "@colonydb/anthill/Inline";
import { Section } from "@colonydb/anthill/Section";
import styles from "./page.module.css";

const WidthsPage = () => (
  <Section title={<Heading>Widths</Heading>}>
    <div className={styles.container}>
      <div>
        <Inline font="tiny-monospace">wide</Inline>
      </div>
      <div>
        <Inline font="tiny-monospace">medium</Inline>
      </div>
      <div>
        <Inline font="tiny-monospace">narrow</Inline>
      </div>
    </div>
  </Section>
);

export default WidthsPage;
