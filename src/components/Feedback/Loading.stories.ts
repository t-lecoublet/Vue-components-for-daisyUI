import type { Meta, StoryObj } from "@storybook/vue3";
import Loading from "@/components/Feedback/Loading.vue";
import { useVariantStoriesControl } from "@/composables/useVariantProps";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof Loading> = {
  title: "Components/Feedback/Loading",
  component: Loading,
  argTypes: {
    animation: {
      control: { type: "select" },
      options: ["spinner", "dots", "ring", "ball", "bars", "infinity"],
    },
    ...useVariantStoriesControl,
    ...useSizeStoriesControl,
  },
};

export default meta;

type Story = StoryObj<typeof Loading>;

const defaultTplStr = `
<div class="flex gap-2 items-center">
  <Loading v-bind="args" size="xs" />
  <Loading v-bind="args" size="sm" />
  <Loading v-bind="args" size="md" />
  <Loading v-bind="args" size="lg" />
  <Loading v-bind="args" size="xl" />
</div>
`;
const defaultColorsTplStr = `
<div class="flex gap-2 items-center">
    <Loading v-bind="args" variant="primary" />
    <Loading v-bind="args" variant="secondary" />
    <Loading v-bind="args" variant="accent" />
    <Loading v-bind="args" variant="neutral" />
    <Loading v-bind="args" variant="info" />
    <Loading v-bind="args" variant="success" />
    <Loading v-bind="args" variant="warning" />
    <Loading v-bind="args" variant="error" />
</div>
`;

// LOADING SPINNER

const TemplateLoading: Story = {
  render: (args: any) => ({
    components: { Loading },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  // on indique ici les valeurs
  args: {},
};
export const SpinnerLoading = { ...TemplateLoading };
SpinnerLoading.args = {
  animation: "spinner",
};

// LOADING DOTS

export const DotsLoading = { ...TemplateLoading };
DotsLoading.args = {
  animation: "dots",
};

// LOADING RING

export const RingLoading = { ...TemplateLoading };
RingLoading.args = {
  animation: "ring",
};

// LOADING BALL

export const BallLoading = { ...TemplateLoading };
BallLoading.args = {
  animation: "ball",
};

// LOADING BARS

export const BarsLoading = { ...TemplateLoading };
BarsLoading.args = {
  animation: "bars",
};

// LOADING INFINITY

export const InfinityLoading = { ...TemplateLoading };
InfinityLoading.args = {
  animation: "infinity",
};

// LOADING WITH COLORS

const LoadingWithColorsTemplate: Story = {
  render: (args: any) => ({
    components: { Loading },
    setup() {
      return { args };
    },
    template: defaultColorsTplStr,
  }),
};
export const LoadingWithColors = { ...LoadingWithColorsTemplate };
LoadingWithColors.args = {};
