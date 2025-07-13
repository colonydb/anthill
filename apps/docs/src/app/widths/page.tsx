import { Heading } from "@colonydb/anthill/Heading";
import { PlainText } from "@colonydb/anthill/PlainText";
import { Section } from "@colonydb/anthill/Section";
import styles from "./page.module.css";

const WidthsPage = () => (
  <Section title={<Heading>Widths</Heading>}>
    <div className={styles.container}>
      <div>
        <PlainText font="tiny-monospace">wide</PlainText>
      </div>
      <div>
        <PlainText font="tiny-monospace">medium</PlainText>
      </div>
      <div>
        <PlainText font="tiny-monospace">narrow</PlainText>
      </div>
    </div>
  </Section>
);

export default WidthsPage;
