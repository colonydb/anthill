import EditPage from "./EditPage";

export default {
  title: "layout/EditPage",
  parameters: {
    layout: "fullscreen",
  },
};

export const Default = () => (
  <EditPage>
    <div>nav</div>
    <div>main</div>
    <div>aside</div>
  </EditPage>
);
