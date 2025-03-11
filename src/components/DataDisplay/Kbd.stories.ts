import type { Meta, StoryObj } from "@storybook/vue3";
import Kbd from "@/components/DataDisplay/Kbd.vue";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof Kbd> = {
  title: "Components/DataDisplay/Kbd",
  component: Kbd,
  argTypes: {
    ...useSizeStoriesControl,
  },
};

export default meta;

type Story = StoryObj<typeof Kbd>;

const defaultTplStr = `
  <Kbd v-bind="args">K</Kbd>
`;
const KbdSizesTplStr = `
<div class="flex gap-2 items-center">
  <Kbd size="xs" v-bind="args">XSmall</Kbd>
  <Kbd size="sm" v-bind="args">Small</Kbd>
  <Kbd size="md" v-bind="args">Medium</Kbd>
  <Kbd size="lg" v-bind="args">Large</Kbd>
  <Kbd size="xl" v-bind="args">XLarge</Kbd>
</div>`;
const InTextKbdTplStr = `
<div class="flex gap-2 items-center">
  <p>
    Press <Kbd v-bind="args">F</Kbd> to pay respects.
  </p>
</div>
`;
const KeyCombinationsTplStr = `
<div>
  <Kbd v-bind="args">ctrl</Kbd> + <Kbd v-bind="args">shift</Kbd> + <Kbd v-bind="args">del</Kbd>
</div>
`;
const FunctionKeysTplStr = `
<div class="flex gap-2 m-4">
  <Kbd v-bind="args">⌘</Kbd>
  <Kbd v-bind="args">⌥</Kbd>
  <Kbd v-bind="args">⇧</Kbd>
  <Kbd v-bind="args">⌃</Kbd>
</div>
`;
const FullKeyboardTplStr = `
<div class="my-1 flex w-full justify-center gap-1">
  <Kbd v-bind="args">q</Kbd>
  <Kbd v-bind="args">w</Kbd>
  <Kbd v-bind="args">e</Kbd>
  <Kbd v-bind="args">r</Kbd>
  <Kbd v-bind="args">t</Kbd>
  <Kbd v-bind="args">y</Kbd>
  <Kbd v-bind="args">u</Kbd>
  <Kbd v-bind="args">i</Kbd>
  <Kbd v-bind="args">o</Kbd>
  <Kbd v-bind="args">p</Kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <Kbd v-bind="args">a</Kbd>
  <Kbd v-bind="args">s</Kbd>
  <Kbd v-bind="args">d</Kbd>
  <Kbd v-bind="args">f</Kbd>
  <Kbd v-bind="args">g</Kbd>
  <Kbd v-bind="args">h</Kbd>
  <Kbd v-bind="args">j</Kbd>
  <Kbd v-bind="args">k</Kbd>
  <Kbd v-bind="args">l</Kbd>
</div>
<div class="my-1 flex w-full justify-center gap-1">
  <Kbd v-bind="args">z</Kbd>
  <Kbd v-bind="args">x</Kbd>
  <Kbd v-bind="args">c</Kbd>
  <Kbd v-bind="args">v</Kbd>
  <Kbd v-bind="args">b</Kbd>
  <Kbd v-bind="args">n</Kbd>
  <Kbd v-bind="args">m</Kbd>
  <Kbd v-bind="args">/</Kbd>
</div>
`;
const ArrowKeysTplStr = `
<div class="flex w-full justify-center">
  <Kbd v-bind="args">▲</Kbd>
</div>
<div class="flex w-full justify-center gap-12">
  <Kbd v-bind="args">◀︎</Kbd>
  <Kbd v-bind="args">▶︎</Kbd>
</div>
<div class="flex w-full justify-center">
  <Kbd v-bind="args">▼</Kbd>
</div>
`;

// DEFAULT

const DefaultTemplate: Story = {
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...DefaultTemplate };
Default.args = {};

// KBD SIZES

const KbdSizesTemplate: Story = {
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: KbdSizesTplStr,
  }),
};
export const KbdSizes = { ...KbdSizesTemplate };
KbdSizes.args = {};

// IN TEXT KBD

const InTextKbdTemplate: Story = {
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: InTextKbdTplStr,
  }),
};
export const InTextKbd = { ...InTextKbdTemplate };
InTextKbd.args = {};

// KEY COMBINATIONS

const KeyCombinationsTemplate: Story = {
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: KeyCombinationsTplStr,
  }),
};
export const KeyCombinations = { ...KeyCombinationsTemplate };
KeyCombinations.args = {};

// FUNCTION KEYS

const FunctionKeysTemplate: Story = {
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: FunctionKeysTplStr,
  }),
};
export const FunctionKeys = { ...FunctionKeysTemplate };
FunctionKeys.args = {};

// FULL KEYBOARD

const FullKeyboardTemplate: Story = {
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: FullKeyboardTplStr,
  }),
};
export const FullKeyboard = { ...FullKeyboardTemplate };
FullKeyboard.args = {};

// ARROW KEYS

const ArrowKeysTemplate: Story = {
  render: (args) => ({
    components: { Kbd },
    setup() {
      return { args };
    },
    template: ArrowKeysTplStr,
  }),
};
export const ArrowKeys = { ...ArrowKeysTemplate };
ArrowKeys.args = {};
