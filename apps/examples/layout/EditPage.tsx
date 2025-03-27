import EditPage from "@colonydb/anthill/layout/EditPage";

export default {
  title: "layout/EditPage",
  fullscreen: true,
};

export const Default = () => (
  <EditPage>
    <div>nav</div>
    <div>main</div>
    <div>aside</div>
  </EditPage>
);
