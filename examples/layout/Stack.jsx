import Stack from "../../src/layout/Stack";

export default {
  title: "layout/Stack",
};

export const Default = () => (
  <Stack>
    <div>Dolore culpa et magni iste sit dolorem.</div>
    <div>
      Pariatur qui quia autem iusto esse quos iusto excepturi magnam ut nam dicta quia eos
      voluptates.
    </div>
    <div>Molestias cum voluptas non amet.</div>
    <div>Ut et vel accusantium distinctio.</div>
    <div>
      Voluptatem dolores voluptas et necessitatibus sequi nisi molestiae et nihil esse sed est ipsum
      beatae enim.
    </div>
  </Stack>
);

export const CustomSpacing = () => (
  <Stack spacing="xl">
    <div>Dolore culpa et magni iste sit dolorem.</div>
    <div>
      Pariatur qui quia autem iusto esse quos iusto excepturi magnam ut nam dicta quia eos
      voluptates.
    </div>
    <div>Molestias cum voluptas non amet.</div>
    <div>Ut et vel accusantium distinctio.</div>
    <div>
      Voluptatem dolores voluptas et necessitatibus sequi nisi molestiae et nihil esse sed est ipsum
      beatae enim.
    </div>
  </Stack>
);
