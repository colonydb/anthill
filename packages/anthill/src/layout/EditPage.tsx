import { Children, useRef } from "react";
import ScrollContext from "../foundation/ScrollContext.js";
import styles from "./EditPage.module.css";

type Props = {
  children: React.ReactNode;
};

const EditPage = ({ children }: Props) => {
  const mainRef = useRef(null);
  const asideRef = useRef(null);
  const childrenArray = Children.toArray(children);
  let nav = null;
  let main = null;
  let aside = null;
  if (childrenArray.length >= 3) {
    nav = childrenArray[0];
    main = childrenArray[1];
    aside = childrenArray[2];
  } else {
    main = childrenArray[0];
    aside = childrenArray[1];
  }
  return (
    <div className={styles.layout}>
      <div className={styles.nav}>{nav}</div>
      <div ref={mainRef} className={styles.main}>
        <ScrollContext.Provider value={mainRef}>{main}</ScrollContext.Provider>
      </div>
      <div ref={asideRef} className={styles.aside}>
        <ScrollContext.Provider value={asideRef}>{aside}</ScrollContext.Provider>
      </div>
    </div>
  );
};

export default EditPage;
