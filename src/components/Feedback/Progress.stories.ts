import type { Meta, StoryObj } from "@storybook/vue3";
import Progress from "@/components/Feedback/Progress.vue";
import { useVariantStoriesControl } from "@/composables/useVariantProps";

const meta: Meta<typeof Progress> = {
  title: "Components/Feedback/Progress",
  component: Progress,
  argTypes: {
    ...useVariantStoriesControl,
    value: { control: "number" },
    max: { control: "number" },
    indeterminate: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Progress>;

const defaultTplStr = `
<div class="inline-flex flex-col gap-2 items-center">
  <Progress v-bind="args" value="0" max="100" />
  <Progress v-bind="args" value="10" max="100" />
  <Progress v-bind="args" value="40" max="100" />
  <Progress v-bind="args" value="70" max="100" />
  <Progress v-bind="args" value="100" max="100" />
</div>
`;
const indeterminateTplStr = `
<div class="inline-flex flex-col gap-2 items-center">
  <Progress v-bind="args" />
</div>`;

// PROGRESS

const TemplateProgress: Story = {
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
};
export const DefaultProgress = { ...TemplateProgress };
DefaultProgress.args = {};

// PRIMARY COLOR

export const PrimaryProgress = { ...TemplateProgress };
PrimaryProgress.args = {
  variant: "primary",
};

// SECONDARY COLOR

export const SecondaryProgress = { ...TemplateProgress };
SecondaryProgress.args = {
  variant: "secondary",
};

// ACCENT COLOR

export const AccentProgress = { ...TemplateProgress };
AccentProgress.args = {
  variant: "accent",
};

// NEUTRAL COLOR

export const NeutralProgress = { ...TemplateProgress };
NeutralProgress.args = {
  variant: "neutral",
};

// INFO COLOR

export const InfoProgress = { ...TemplateProgress };
InfoProgress.args = {
  variant: "info",
};

// SUCCESS COLOR

export const SuccessProgress = { ...TemplateProgress };
SuccessProgress.args = {
  variant: "success",
};

// WARNING COLOR

export const WarningProgress = { ...TemplateProgress };
WarningProgress.args = {
  variant: "warning",
};

// ERROR COLOR

export const ErrorProgress = { ...TemplateProgress };
ErrorProgress.args = {
  variant: "error",
};

// INDETERMINATE WITHOUT VALUE

const IndeterminateTemplate: Story = {
  render: (args) => ({
    components: { Progress },
    setup() {
      return { args };
    },
    template: indeterminateTplStr,
  }),
};
export const IndeterminateProgress = { ...IndeterminateTemplate };
IndeterminateProgress.args = {
  indeterminate: true,
};
