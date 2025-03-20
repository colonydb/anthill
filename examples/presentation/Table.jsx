import action from "../mockAction";

import Table from "../../src/presentation/Table";

export default {
  title: "presentation/Table",
};

export const Default = () => (
  <Table
    head={[
      { id: 1, value: "Column 1" },
      { id: 2, value: "Column 2" },
      { id: 3, value: "Column 3" },
    ]}
    body={[
      {
        id: 1,
        value: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
        ],
      },
      {
        id: 2,
        value: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
        ],
      },
      {
        id: 3,
        value: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
        ],
      },
      {
        id: 4,
        value: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
        ],
      },
      {
        id: 5,
        value: [
          { id: 1, value: 1 },
          { id: 2, value: 2 },
          { id: 3, value: 3 },
        ],
      },
    ]}
  />
);
