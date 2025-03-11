import type { Meta, StoryObj } from "@storybook/vue3";
import Avatar from "@/components/DataDisplay/Avatar.vue";

const meta: Meta<typeof Avatar> = {
  title: "Components/DataDisplay/Avatar",
  component: Avatar,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Avatar>;

const defaultTplStr = `
  <Avatar v-bind="args">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
  </Avatar>
`;
const AvatarInCustomSizesTplStr = `
<div class="flex items-center gap-4">
  <Avatar v-bind="args" size="xs">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
  </Avatar>
  <Avatar v-bind="args" size="sm">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
  </Avatar>
  <Avatar v-bind="args" size="md">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
  </Avatar>
  <Avatar v-bind="args" size="lg">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
  </Avatar>
  <Avatar v-bind="args" size="xl">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" alt="" />
  </Avatar>
</div>`;

// AVATAR

const TemplateAvatar: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const DefaultAvatar = { ...TemplateAvatar };
DefaultAvatar.args = {
  size: "lg",
  rounded: "rounded",
};

// CUSTOM SIZES AVATAR

const AvatarInCustomSizesTemplate: Story = {
  render: (args) => ({
    components: { Avatar },
    setup() {
      return { args };
    },
    template: AvatarInCustomSizesTplStr,
  }),
};
export const AvatarInCustomSizes = { ...AvatarInCustomSizesTemplate };
AvatarInCustomSizes.args = {
  rounded: "rounded",
};
