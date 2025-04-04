import type { Meta, StoryObj } from "@storybook/vue3";
import Tooltip from "@/components/Feedback/Tooltip.vue";
import Alert from "@/components/Feedback/Alert.vue";
import Button from "@/components/Actions/Button.vue";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Feedback/Tooltip",
  component: Tooltip,
  argTypes: {
    dataTip: {
      control: "text",
    },
    open: {
      control: "boolean",
    },
    position: {
      control: { type: "select" },
      options: ["top", "bottom", "left", "right"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Tooltip>;

const DefaultTplStr = `
<div class="m-12">
  <Tooltip v-bind="args" data-tip="Hello world">
    <Button>Hover me</Button>
  </Tooltip>
</div>`;
const WithTooltipContentTplStr = `
<div class="m-12">
  <Tooltip v-bind="args">
    <template #content>
      <div class="animate-bounce text-orange-400 -rotate-10 text-2xl font-black">Wow!</div>
    </template>
    <Button>Hover me</Button>
  </Tooltip>
</div>
`;
const ForceOpenTooltipTplStr = `
<div class="m-12">
  <Tooltip :open="true" v-bind="args" data-tip="Hello world">
    <Button>Force open</Button>
  </Tooltip>
</div>
`;
const TopTooltipTplStr = `
<div class="m-12">
  <Tooltip v-bind="args" data-tip="Hello world" position="top" :open="true">
    <Button>Top</Button>
  </Tooltip>
</div>
`;
const BottomTooltipTplStr = `
<div class="m-12">
  <Tooltip v-bind="args" data-tip="Hello world" position="bottom" :open="true">
    <Button>Bottom</Button>
  </Tooltip>
</div>`;
const LeftTooltipTplStr = `
<div class="m-12 ml-48">
  <Tooltip v-bind="args" data-tip="Hello world" position="left" :open="true">
    <Button>Left</Button>
  </Tooltip>
</div>`;
const RightTooltipTplStr = `
<div class="m-12">
  <Tooltip v-bind="args" data-tip="Hello world" position="right" :open="true">
    <Button>Right</Button>
  </Tooltip>
</div>
`;
const ColorsTooltipTplStr = `
<div class="m-16 flex gap-4">
  <Tooltip v-bind="args" data-tip="neutral" variant="neutral" :open="true">
    <Button variant="neutral">neutral</Button>
  </Tooltip>
  <Tooltip v-bind="args" data-tip="primary" variant="primary" :open="true">
    <Button variant="primary">primary</Button>
  </Tooltip>
  <Tooltip v-bind="args" data-tip="secondary" variant="secondary" :open="true">
    <Button variant="secondary">secondary</Button>
  </Tooltip>
  <Tooltip v-bind="args" data-tip="accent" variant="accent" :open="true">
    <Button variant="accent">accent</Button>
  </Tooltip>
  <Tooltip v-bind="args" data-tip="info" variant="info" :open="true">
    <Button variant="info">info</Button>
  </Tooltip>
  <Tooltip v-bind="args" data-tip="success" variant="success" :open="true">
    <Button variant="success">success</Button>
  </Tooltip>
  <Tooltip v-bind="args" data-tip="warning" variant="warning" :open="true">
    <Button variant="warning">warning</Button>
  </Tooltip>
  <Tooltip v-bind="args" data-tip="error" variant="error" :open="true">
    <Button variant="error">error</Button>
  </Tooltip>
</div>
`;

// DEFAULT TOOLTIP

const DefaultTooltipTemplate: Story = {
  render: (args: any) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: DefaultTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const DefaultTooltip = { ...DefaultTooltipTemplate };

// WITH TOOLTIP CONTENT

const WithTooltipContentTemplate: Story = {
  render: (args: any) => ({
    components: { Tooltip, Button, Alert },
    setup() {
      return { args };
    },
    template: WithTooltipContentTplStr,
  }),
};
export const WithTooltipContent = { ...WithTooltipContentTemplate };

// FORCE OPEN

const ForceOpenTooltipTemplate: Story = {
  render: (args: any) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: ForceOpenTooltipTplStr,
  }),
};
export const ForceOpenTooltip = { ...ForceOpenTooltipTemplate };

// TOP TOOLTIP

const TopTooltipTemplate: Story = {
  render: (args: any) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: TopTooltipTplStr,
  }),
};
export const TopTooltip = { ...TopTooltipTemplate };

// BOTTOM TOOLTIP

const BottomTooltipTemplate: Story = {
  render: (args: any) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: BottomTooltipTplStr,
  }),
};
export const BottomTooltip = { ...BottomTooltipTemplate };

// LEFT TOOLTIP

const LeftTooltipTemplate: Story = {
  render: (args: any) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: LeftTooltipTplStr,
  }),
};
export const LeftTooltip = { ...LeftTooltipTemplate };

// RIGHT TOOLTIP

const RightTooltipTemplate: Story = {
  render: (args: any) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: RightTooltipTplStr,
  }),
};
export const RightTooltip = { ...RightTooltipTemplate };

// COLORS TOOLTIP

const ColorsTooltipTemplate: Story = {
  render: (args: any) => ({
    components: { Tooltip, Button },
    setup() {
      return { args };
    },
    template: ColorsTooltipTplStr,
  }),
};
export const ColorsTooltip = { ...ColorsTooltipTemplate };
