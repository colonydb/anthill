import FrameworkContext from "@colonydb/anthill/foundation/FrameworkContext";
import { useCallback, useEffect, useState } from "react";
import styles from "./App.module.css";
import * as Action from "./controls/Action.js";
import * as Button from "./controls/Button.js";
import * as ComboBox from "./controls/ComboBox.js";
import * as HuePicker from "./controls/HuePicker.js";
import * as RadioButton from "./controls/RadioButton.js";
import * as TextInput from "./controls/TextInput.js";
import * as ExternalIcon from "./icons/ExternalIcon.js";
import * as GanttChartIcon from "./icons/GanttChartIcon.js";
import * as GanttChartItemIcon from "./icons/GanttChartItemIcon.js";
import * as Icon from "./icons/Icon.js";
import * as MailIcon from "./icons/MailIcon.js";
import * as RemoveIcon from "./icons/RemoveIcon.js";
import * as Aside from "./layout/Aside.js";
import * as EditPage from "./layout/EditPage.js";
import * as Main from "./layout/Main.js";
import * as Stack from "./layout/Stack.js";
import * as Mockups from "./Mockups.js";
import * as Article from "./presentation/Article.js";
import * as Chip from "./presentation/Chip.js";
import * as Field from "./presentation/Field.js";
import * as Heading from "./presentation/Heading.js";
import * as PrototypeBadge from "./presentation/PrototypeBadge.js";
import * as Subheading from "./presentation/Subheading.js";
import * as Table from "./presentation/Table.js";
import * as Title from "./presentation/Title.js";

const examples = {
  "controls:Action:Default": {
    title: "controls/Action/Default",
    Component: Action.Default,
    fullscreen: false,
  },
  "controls:Action:Icon": {
    title: "controls/Action/Icon",
    Component: Action.Icon,
    fullscreen: false,
  },
  "controls:Button:Default": {
    title: "controls/Button/Default",
    Component: Button.Default,
    fullscreen: false,
  },
  "controls:ComboBox:Default": {
    title: "controls/ComboBox/Default",
    Component: ComboBox.Default,
    fullscreen: false,
  },
  "controls:HuePicker:Default": {
    title: "controls/HuePicker/Default",
    Component: HuePicker.Default,
    fullscreen: false,
  },
  "controls:RadioButton:Checked": {
    title: "controls/RadioButton/Checked",
    Component: RadioButton.Checked,
    fullscreen: false,
  },
  "controls:RadioButton:Default": {
    title: "controls/RadioButton/Default",
    Component: RadioButton.Default,
    fullscreen: false,
  },
  "controls:TextInput:Default": {
    title: "controls/TextInput/Default",
    Component: TextInput.Default,
    fullscreen: false,
  },
  "controls:TextInput:Placeholder": {
    title: "controls/TextInput/Placeholder",
    Component: TextInput.Placeholder,
    fullscreen: false,
  },
  "icons:ExternalIcon:Default": {
    title: "icons/ExternalIcon/Default",
    Component: ExternalIcon.Default,
    fullscreen: false,
  },
  "icons:GanttChartIcon:Default": {
    title: "icons/GanttChartIcon/Default",
    Component: GanttChartIcon.Default,
    fullscreen: false,
  },
  "icons:GanttChartItemIcon:Default": {
    title: "icons/GanttChartItemIcon/Default",
    Component: GanttChartItemIcon.Default,
    fullscreen: false,
  },
  "icons:Icon:Default": {
    title: "icons/Icon/Default",
    Component: Icon.Default,
    fullscreen: false,
  },
  "icons:MailIcon:Default": {
    title: "icons/MailIcon/Default",
    Component: MailIcon.Default,
    fullscreen: false,
  },
  "icons:RemoveIcon:Default": {
    title: "icons/RemoveIcon/Default",
    Component: RemoveIcon.Default,
    fullscreen: false,
  },
  "layout:Aside:Default": {
    title: "layout/Aside/Default",
    Component: Aside.Default,
    fullscreen: false,
  },
  "layout:EditPage:Default": {
    title: "layout/EditPage/Default",
    Component: EditPage.Default,
    fullscreen: true,
  },
  "layout:Main:Default": {
    title: "layout/Main/Default",
    Component: Main.Default,
    fullscreen: false,
  },
  "layout:Stack:Default": {
    title: "layout/Stack/Default",
    Component: Stack.Default,
    fullscreen: false,
  },
  "Mockups:Prototype": {
    title: "Mockups/Prototype",
    Component: Mockups.Prototype,
    fullscreen: true,
  },
  "presentation:Article:Default": {
    title: "presentation/Article/Default",
    Component: Article.Default,
    fullscreen: false,
  },
  "presentation:Chip:Default": {
    title: "presentation/Chip/Default",
    Component: Chip.Default,
    fullscreen: false,
  },
  "presentation:Field:Default": {
    title: "presentation/Field/Default",
    Component: Field.Default,
    fullscreen: false,
  },
  "presentation:Heading:Default": {
    title: "presentation/Heading/Default",
    Component: Heading.Default,
    fullscreen: false,
  },
  "presentation:PrototypeBadge:Default": {
    title: "presentation/PrototypeBadge/Default",
    Component: PrototypeBadge.Default,
    fullscreen: false,
  },
  "presentation:Subheading:Default": {
    title: "presentation/Subheading/Default",
    Component: Subheading.Default,
    fullscreen: false,
  },
  "presentation:Table:Default": {
    title: "presentation/Table/Default",
    Component: Table.Default,
    fullscreen: false,
  },
  "presentation:Title:Default": {
    title: "presentation/Title/Default",
    Component: Title.Default,
    fullscreen: false,
  },
};

export const useHash = () => {
  const [hash, setHash] = useState(() => window.location.hash.slice(1));

  const onHashChange = useCallback(() => {
    setHash(window.location.hash.slice(1));
  }, []);

  useEffect(() => {
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  return hash;
};

const hashIsExample = (hash: string): hash is keyof typeof examples => hash in examples;

const App = () => {
  const hash = useHash();

  const example = hashIsExample(hash) ? examples[hash] : null;

  const Component = example
    ? example.Component
    : () => (
        <ul className={styles.menu}>
          {Object.entries(examples).map(([id, example]) => (
            <li key={id}>
              <a href={`#${id}`}>{example.title}</a>
            </li>
          ))}
        </ul>
      );

  const fullscreen = example?.fullscreen ?? false;

  return (
    <FrameworkContext.Provider
      value={{ Link: ({ children, ...props }) => <a {...props}>{children}</a> }}
    >
      {fullscreen ? (
        <Component />
      ) : (
        <div className={styles.container}>
          <div className={styles.content}>
            <Component />
          </div>
        </div>
      )}
    </FrameworkContext.Provider>
  );
};

export default App;
