import type { Meta, StoryObj } from "@storybook/vue3";
import RadialProgress from "./RadialProgress.vue";
import { computed, ref } from "vue";

const meta = {
  title: "Components/Feedback/RadialProgress",
  component: RadialProgress,
  tags: ["autodocs"],
  argTypes: {
    value: {
      control: { type: "range", min: 0, max: 100, step: 1 },
      description: "The progress value (0-100)",
    },
    size: {
      control: { type: "select" },
      options: ["xs", "sm", "md", "lg"],
      description: "Size of the radial progress",
    },
    variant: {
      control: { type: "select" },
      options: [
        "primary",
        "secondary",
        "accent",
        "info",
        "success",
        "warning",
        "error",
        "neutral",
      ],
      description: "Color of the radial progress",
    },
    thickness: {
      control: { type: "text" },
      description: "Css unit that control the thickness",
    },
  },
  args: {
    value: 70,
    variant: "primary",
  },
} satisfies Meta<typeof RadialProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

const sizeTlpStr = `
<div class="flex items-end gap-4">
  <RadialProgress value="75" size="xs">xs</RadialProgress>
  <RadialProgress value="75" size="sm">sm</RadialProgress>
  <RadialProgress value="75" size="6rem">custom</RadialProgress>
  <RadialProgress value="75" size="md">md</RadialProgress>
  <RadialProgress value="75" size="lg">lg</RadialProgress>
  <RadialProgress value="75" size="xl">xl</RadialProgress>
</div>`;
export const Sizes: Story = {
  render: () => ({
    components: { RadialProgress },
    template: sizeTlpStr,
  }),
  parameters: {
    docs: {
      source: {
        code: sizeTlpStr,
        language: "html",
      },
    },
  },
};

const colorsTplStr = `
<div class="flex flex-wrap gap-4">
  <RadialProgress value="70" variant="primary">70%</RadialProgress>
  <RadialProgress value="70" variant="secondary">70%</RadialProgress>
  <RadialProgress value="70" variant="accent">70%</RadialProgress>
  <RadialProgress value="70" variant="info">70%</RadialProgress>
  <RadialProgress value="70" variant="success">70%</RadialProgress>
  <RadialProgress value="70" variant="warning">70%</RadialProgress>
  <RadialProgress value="70" variant="error">70%</RadialProgress>
  <RadialProgress value="70" variant="neutral">70%</RadialProgress>
</div>`;
export const Colors: Story = {
  render: () => ({
    components: { RadialProgress },
    template: colorsTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: colorsTplStr,
        language: "html",
      },
    },
  },
};

const thicknessTplStr = `
<div class="flex flex-wrap gap-4">
  <RadialProgress value="70" size="lg" thickness="2px">thin (2px)</RadialProgress>
  <RadialProgress value="70" size="lg">normal</RadialProgress>
  <RadialProgress value="70" size="lg" thickness="2rem">thick (2rem)</RadialProgress>
</div>`;
export const Thickness: Story = {
  render: () => ({
    components: { RadialProgress },
    template: thicknessTplStr,
  }),
  parameters: {
    docs: {
      source: {
        code: thicknessTplStr,
        language: "html",
      },
    },
  },
};

export const Interactive: Story = {
  render: () => ({
    components: { RadialProgress },
    setup() {
      const progress = ref(0);

      const increment = () => {
        progress.value = Math.min(100, progress.value + 10);
      };

      const decrement = () => {
        progress.value = Math.max(0, progress.value - 10);
      };

      const variant = computed(() => {
        if (progress.value < 20) {
          return "error";
        }
        if (progress.value < 40) {
          return "warning";
        }
        if (progress.value < 60) {
          return "info";
        }
        if (progress.value < 80) {
          return "accent";
        }
        if (progress.value < 100) {
          return "success";
        }
      });

      return { progress, increment, decrement, variant };
    },
    template: `
      <div class="flex flex-col items-center gap-4">
        <RadialProgress :variant="variant" :value="progress">{{ progress }}%</RadialProgress>
        <div class="flex gap-2">
          <button class="btn btn-primary" @click="decrement">-10%</button>
          <button class="btn btn-primary" @click="increment">+10%</button>
        </div>
      </div>
    `,
  }),
  parameters: {
    docs: {
      source: {
        code: `
<script setup lang="ts">
  const progress = ref(0)

  const increment = () => {
    progress.value = Math.min(100, progress.value + 10)
  }

  const decrement = () => {
    progress.value = Math.max(0, progress.value - 10)
  }

  const variant = computed(() => {
    if (progress.value < 20) { return 'error' }
    if (progress.value < 40) { return 'warning' }
    if (progress.value < 60) { return 'info' }
    if (progress.value < 80) { return 'accent' }
    if (progress.value < 100) { return 'success' }
  })
</script>
<template>
    <div class="flex flex-col items-center gap-4">
    <RadialProgress :variant="variant" :value="progress">{{ progress }}%</RadialProgress>
    <div class="flex gap-2">
      <button class="btn btn-primary" @click="decrement">-10%</button>
      <button class="btn btn-primary" @click="increment">+10%</button>
    </div>
  </div>
</template>
    `,
        language: "html",
      },
    },
  },
};
