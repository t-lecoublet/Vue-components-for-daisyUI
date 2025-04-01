import type { Meta, StoryObj } from "@storybook/vue3";
import Status from "@/components/DataDisplay/Status.vue";

const meta: Meta<typeof Status> = {
  title: "Components/DataDisplay/Status",
  component: Status,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Status>;

const defaultTplStr = `
  <Status v-bind="args" />
`;
const StatusSizesTplStr = `
<div class="flex gap-2 items-center">
  <Status v-bind="args" size="xs" />
  <Status v-bind="args" size="sm" />
  <Status v-bind="args" size="md" />
  <Status v-bind="args" size="lg" />
  <Status v-bind="args" size="xl" />
</div>
`;
const StatusWithColorsTplStr = `
<div class="flex gap-2 items-center">
  <Status v-bind="args" variant="primary" />
  <Status v-bind="args" variant="secondary" />
  <Status v-bind="args" variant="accent" />
  <Status v-bind="args" variant="neutral" />
  <Status v-bind="args" variant="info" />
  <Status v-bind="args" variant="success" />
  <Status v-bind="args" variant="warning" />
  <Status v-bind="args" variant="error" />
</div>`;
const StatusWithPingAnimationTplStr = `
<Status v-bind="args" variant="info" ping /> Server is down`;
const StatusWithBounceAnimationTplStr = `
<Status v-bind="args" variant="info" bounce /> Unread messages`;

// DEFAULT

const DefaultTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...DefaultTemplate };
Default.args = {};

// STATUS SIZES

const StatusSizesTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: StatusSizesTplStr,
  }),
  args: {},
};
export const StatusSizes = { ...StatusSizesTemplate };
StatusSizes.args = {};

// STATUS COLOR

const StatusWithColorsTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: StatusWithColorsTplStr,
  }),
  args: {},
};
export const StatusWithColors = { ...StatusWithColorsTemplate };
StatusWithColors.args = {};

// STATUS WITH PING ANIMATION
const StatusWithPingAnimationTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: StatusWithPingAnimationTplStr,
  }),
};
export const StatusWithPingAnimation = { ...StatusWithPingAnimationTemplate };

// STATUS WITH BOUNCE ANIMATION
const StatusWithBounceAnimationTemplate: Story = {
  render: (args: any) => ({
    components: { Status },
    setup() {
      return { args };
    },
    template: StatusWithBounceAnimationTplStr,
  }),
};
export const StatusWithBounceAnimation = {
  ...StatusWithBounceAnimationTemplate,
};
