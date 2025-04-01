import type { Meta, StoryObj } from "@storybook/vue3";
import Swap from "./Swap.vue";

const meta = {
  title: "Components/Actions/Swap",
  component: Swap,
  // tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: "boolean",
      description: "Controls the active state of the swap component",
    },
    rotate: {
      control: "boolean",
      description: "Adds a rotate animation",
    },
    flip: {
      control: "boolean",
      description: "Adds a flip animation",
    },
    useCheckbox: {
      control: "boolean",
      description: "Use checkbox to control the swap state",
    },
  },
  args: {
    modelValue: false,
    rotate: false,
    flip: false,
    useCheckbox: true,
  },
} satisfies Meta<typeof Swap>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: (args: any) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args" v-model="args.modelValue" class="text-4xl">
        <template #on>ON</template>
        <template #off>OFF</template>
      </Swap>
    `,
  }),
};

export const WithRotate: Story = {
  args: {
    rotate: true,
  },
  render: (args: any) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args" v-model="args.modelValue" class="text-4xl">
        <template #on>🌞</template>
        <template #off>🌜</template>
      </Swap>
    `,
  }),
};

export const WithFlip: Story = {
  args: {
    flip: true,
  },
  render: (args: any) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args" v-model="args.modelValue" class="text-4xl">
        <template #on>🥞</template>
        <template #off>🍔</template>
      </Swap>
    `,
  }),
};

export const WithClassName: Story = {
  args: {},
  render: (args: any) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args" v-model="args.modelValue" class="text-4xl">
        <template #on>😈</template>
        <template #off>😇</template>
      </Swap>
    `,
  }),
};

export const WithIndeterminate: Story = {
  args: {
    useCheckbox: true,
  },
  render: (args: any) => ({
    components: { Swap },
    setup() {
      return { args };
    },
    template: `
      <Swap v-bind="args" v-model="args.modelValue" class="text-4xl">
        <template #on>ON</template>
        <template #off>OFF</template>
        <template #indeterminate>INDETERMINATE</template>
      </Swap>
    `,
  }),
};
