import { action } from "@storybook/addon-actions";

import Aside from "./Aside";
import Action from "../controls/Action";
import DemoIcon from "../icons/Icon";

export default {
  title: "layout/Aside",
};

export const Default = () => (
  <Aside title="Repellendus Maxime">
    <div>
      Temporibus dolorum sit ullam dolor omnis magnam tempora voluptatum. Tempora totam quo ipsum
      quos voluptatem. Molestias quam vitae laborum blanditiis dignissimos expedita nobis aut labore
      sed maxime itaque maiores quis et. Sit et iusto non beatae ut dolorem. Omnis est itaque
      explicabo sunt est quod vel eius aperiam omnis id. Sed pariatur nostrum nulla numquam nobis
      sit occaecati recusandae provident eius fugiat sint.
    </div>
    <div>
      Est animi laudantium et autem eaque qui sit et. Praesentium sit corrupti eum rerum sit at amet
      eveniet ducimus id quia sequi non voluptatem dolorem. Saepe nam eveniet qui eligendi sapiente
      a autem vel vel nulla quo. Voluptatem eius aspernatur in quo aspernatur ipsa quod pariatur
      amet totam ipsa. Optio eius rerum omnis. Ab excepturi praesentium voluptatem asperiores.
      Voluptatum non distinctio ipsum accusamus eveniet ipsa in dolorem. Neque maxime velit itaque
      incidunt accusantium ea quae amet ea. Velit dolores velit molestiae qui aut perspiciatis est.
    </div>
  </Aside>
);

export const Icon = () => (
  <Aside title="Repellendus Maxime" icon={DemoIcon}>
    <div>
      Temporibus dolorum sit ullam dolor omnis magnam tempora voluptatum. Tempora totam quo ipsum
      quos voluptatem. Molestias quam vitae laborum blanditiis dignissimos expedita nobis aut labore
      sed maxime itaque maiores quis et. Sit et iusto non beatae ut dolorem. Omnis est itaque
      explicabo sunt est quod vel eius aperiam omnis id. Sed pariatur nostrum nulla numquam nobis
      sit occaecati recusandae provident eius fugiat sint.
    </div>
    <div>
      Est animi laudantium et autem eaque qui sit et. Praesentium sit corrupti eum rerum sit at amet
      eveniet ducimus id quia sequi non voluptatem dolorem. Saepe nam eveniet qui eligendi sapiente
      a autem vel vel nulla quo. Voluptatem eius aspernatur in quo aspernatur ipsa quod pariatur
      amet totam ipsa. Optio eius rerum omnis. Ab excepturi praesentium voluptatem asperiores.
      Voluptatum non distinctio ipsum accusamus eveniet ipsa in dolorem. Neque maxime velit itaque
      incidunt accusantium ea quae amet ea. Velit dolores velit molestiae qui aut perspiciatis est.
    </div>
  </Aside>
);

export const Breadcrumbs = () => (
  <Aside
    title="Repellendus Maxime"
    icon={DemoIcon}
    breadcrumbs={[
      { title: "Breadcrumb A", icon: DemoIcon, onClick: action("onClick") },
      { title: "Breadcrumb B", icon: DemoIcon, onClick: action("onClick") },
      { title: "Breadcrumb C", icon: DemoIcon, onClick: action("onClick") },
    ]}
  >
    <div>
      Temporibus dolorum sit ullam dolor omnis magnam tempora voluptatum. Tempora totam quo ipsum
      quos voluptatem. Molestias quam vitae laborum blanditiis dignissimos expedita nobis aut labore
      sed maxime itaque maiores quis et. Sit et iusto non beatae ut dolorem. Omnis est itaque
      explicabo sunt est quod vel eius aperiam omnis id. Sed pariatur nostrum nulla numquam nobis
      sit occaecati recusandae provident eius fugiat sint.
    </div>
    <div>
      Est animi laudantium et autem eaque qui sit et. Praesentium sit corrupti eum rerum sit at amet
      eveniet ducimus id quia sequi non voluptatem dolorem. Saepe nam eveniet qui eligendi sapiente
      a autem vel vel nulla quo. Voluptatem eius aspernatur in quo aspernatur ipsa quod pariatur
      amet totam ipsa. Optio eius rerum omnis. Ab excepturi praesentium voluptatem asperiores.
      Voluptatum non distinctio ipsum accusamus eveniet ipsa in dolorem. Neque maxime velit itaque
      incidunt accusantium ea quae amet ea. Velit dolores velit molestiae qui aut perspiciatis est.
    </div>
  </Aside>
);

export const Actions = () => (
  <Aside
    title="Repellendus Maxime"
    icon={DemoIcon}
    breadcrumbs={[
      { title: "Breadcrumb A", icon: DemoIcon, onClick: action("onClick") },
      { title: "Breadcrumb B", icon: DemoIcon, onClick: action("onClick") },
      { title: "Breadcrumb C", icon: DemoIcon, onClick: action("onClick") },
    ]}
    actions={<Action>Export</Action>}
  >
    <div>
      Temporibus dolorum sit ullam dolor omnis magnam tempora voluptatum. Tempora totam quo ipsum
      quos voluptatem. Molestias quam vitae laborum blanditiis dignissimos expedita nobis aut labore
      sed maxime itaque maiores quis et. Sit et iusto non beatae ut dolorem. Omnis est itaque
      explicabo sunt est quod vel eius aperiam omnis id. Sed pariatur nostrum nulla numquam nobis
      sit occaecati recusandae provident eius fugiat sint.
    </div>
    <div>
      Est animi laudantium et autem eaque qui sit et. Praesentium sit corrupti eum rerum sit at amet
      eveniet ducimus id quia sequi non voluptatem dolorem. Saepe nam eveniet qui eligendi sapiente
      a autem vel vel nulla quo. Voluptatem eius aspernatur in quo aspernatur ipsa quod pariatur
      amet totam ipsa. Optio eius rerum omnis. Ab excepturi praesentium voluptatem asperiores.
      Voluptatum non distinctio ipsum accusamus eveniet ipsa in dolorem. Neque maxime velit itaque
      incidunt accusantium ea quae amet ea. Velit dolores velit molestiae qui aut perspiciatis est.
    </div>
  </Aside>
);
