import type { Meta, StoryObj } from "@storybook/vue3";
import { ref } from "vue";

import Steps from "./Steps.vue";
import StepItem from "./StepItem.vue";
import { useVariantStoriesControl } from "@/composables/useVariantProps";

const meta = {
  title: "Components/Navigation/Steps",
  component: Steps,
  argTypes: {
    direction: {
      control: "select",
      options: ["steps-horizontal", "steps-vertical"],
      description: "Direction of the steps (horizontal or vertical)",
    },
    variant: {
      ...useVariantStoriesControl.variant,
      description: "Color variant of active steps",
    },
    responsive: {
      control: "boolean",
      description:
        "Makes steps responsive (vertical on small screen, horizontal on large screen)",
    },
    items: {
      description: "Array of step items to render",
    },
    activeSteps: {
      description: "Array of indexes of active steps",
    },
    customClass: {
      control: "text",
      description: "Custom class to add to the component",
    },
  },
} satisfies Meta<typeof Steps>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic horizontal steps
export const Horizontal: Story = {
  args: {
    direction: "steps-horizontal",
    items: [
      { label: "Register", active: true },
      { label: "Choose plan", active: true },
      { label: "Purchase" },
      { label: "Receive Product" },
    ],
  },
};

// Vertical steps
export const Vertical: Story = {
  args: {
    direction: "steps-vertical",
    items: [
      { label: "Register", active: true },
      { label: "Choose plan", active: true },
      { label: "Purchase" },
      { label: "Receive Product" },
    ],
  },
};

// Responsive steps
export const Responsive: Story = {
  args: {
    responsive: true,
    items: [
      { label: "Register", active: true },
      { label: "Choose plan", active: true },
      { label: "Purchase" },
      { label: "Receive Product" },
    ],
  },
};

// Using different variants
export const DifferentVariants: Story = {
  render: (args) => ({
    components: { Steps },
    setup() {
      return { args };
    },
    template: `
      <div class="flex flex-col gap-4">
        <Steps :items="args.items" variant="primary" />
        <Steps :items="args.items" variant="secondary" />
        <Steps :items="args.items" variant="accent" />
        <Steps :items="args.items" variant="info" />
        <Steps :items="args.items" variant="success" />
        <Steps :items="args.items" variant="warning" />
        <Steps :items="args.items" variant="error" />
        <Steps :items="args.items" variant="neutral" />
      </div>
    `,
  }),
  args: {
    items: [
      { label: "Register", active: true },
      { label: "Choose plan", active: true },
      { label: "Purchase" },
      { label: "Receive Product" },
    ],
  },
};

// With data-content
export const WithDataContent: Story = {
  args: {
    items: [
      { label: "Step 1", dataContent: "?", active: true },
      { label: "Step 2", dataContent: "!", active: true },
      { label: "Step 3", dataContent: "✓", active: true },
      { label: "Step 4", dataContent: "✕", active: true },
      { label: "Step 5", dataContent: "★", active: true },
    ],
    variant: "neutral",
  },
};

// With custom icons
export const WithCustomIcons: Story = {
  render: (args) => ({
    components: { Steps },
    setup() {
      return { args };
    },
    template: `
      <Steps :items="args.items">
        <template #step-icon="{ index }">
          <span v-if="index === 0">😕</span>
          <span v-else-if="index === 1">😃</span>
          <span v-else-if="index === 2">😍</span>
        </template>
        <!-- or you can do that -->
        <template #step-icon-0>
          <span class="step-icon">😕</span>
        </template>
        <template #step-icon-1>
          <span class="step-icon">😃</span>
        </template>
        <template #step-icon-2>
          <span class="step-icon">😍</span>
        </template>
      </Steps>
    `,
  }),
  args: {
    items: [
      { label: "Step 1", active: true },
      { label: "Step 2", active: true },
      { label: "Step 3" },
    ],
    variant: "neutral",
  },
};

// With manual children
export const WithManualChildren: Story = {
  render: (args) => ({
    components: { Steps, StepItem },
    setup() {
      return { args };
    },
    template: `
      <Steps>
        <StepItem label="Register" active />
        <StepItem label="Choose plan" active />
        <StepItem label="Purchase" />
        <StepItem label="Receive Product" />
      </Steps>
    `,
  }),
};

// With scrollable wrapper
export const WithScrollableWrapper: Story = {
  render: (args) => ({
    components: { Steps },
    setup() {
      const items = Array.from({ length: 24 }, (_, i) => ({
        label: i === 0 ? "start" : i === 23 ? "end" : String(i + 1),
        active: i > 0 && i < 5,
        customClass:
          i > 0 && i < 5
            ? "step-secondary"
            : i > 5 && i < 8
              ? "step-accent"
              : i > 8 && i < 11
                ? "step-error"
                : i > 12 && i < 15
                  ? "step-warning"
                  : i > 15
                    ? "step-neutral"
                    : "",
      }));

      return { items };
    },
    template: `
      <div class="overflow-x-auto">
        <Steps :items="items" />
      </div>
    `,
  }),
};
