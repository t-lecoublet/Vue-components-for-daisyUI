import type { Meta, StoryObj } from "@storybook/vue3";
import Radio from "@/components/DataInput/Radio.vue";
import { useVariantStoriesControl } from "@/composables/useVariantProps";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof Radio> = {
  title: "Components/DataInput/Radio",
  component: Radio,
  argTypes: {
    ...useVariantStoriesControl,
    ...useSizeStoriesControl,
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Radio>;

const defaultTplStr = `
  <Radio v-bind="args" />
`;

const RadioColorsTplStr = `
<div class="flex flex-col gap-4">
  <label class="flex items-center gap-2">
    <Radio variant="primary" name="radio" /> 
    <span>Primary</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="secondary" name="radio" />
    <span>Secondary</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="accent" name="radio" />
    <span>Accent</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="info" name="radio" />
    <span>Info</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="success" name="radio" />
    <span>Success</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="warning" name="radio" />
    <span>Warning</span>
  </label>
  <label class="flex items-center gap-2">
    <Radio variant="error" name="radio" />
    <span>Error</span>
  </label>
</div>`;

const RadioSizesTplStr = `
<div class="flex items-center gap-4">
  <div class="flex items-center gap-2">
    <Radio size="xs" />
    <span>XS</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio size="sm" />
    <span>SM</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio size="md" />
    <span>MD</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio size="lg" />
    <span>LG</span>
  </div>
</div>`;

const RadioStatesTplStr = `
<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <Radio checked />
    <span>Checked</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio />
    <span>Unchecked</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio disabled />
    <span>Disabled</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio checked disabled />
    <span>Checked & Disabled</span>
  </div>
</div>`;

const RadioGroupTplStr = `
<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <Radio name="radio-group" checked />
    <span>Option 1</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio name="radio-group" />
    <span>Option 2</span>
  </div>
  <div class="flex items-center gap-2">
    <Radio name="radio-group" />
    <span>Option 3</span>
  </div>
</div>`;

const TemplateRadio: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...TemplateRadio };

const RadioColorsTemplate: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: RadioColorsTplStr,
  }),
};
export const RadioColors = { ...RadioColorsTemplate };

const RadioSizesTemplate: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: RadioSizesTplStr,
  }),
};
export const RadioSizes = { ...RadioSizesTemplate };

const RadioStatesTemplate: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: RadioStatesTplStr,
  }),
};
export const RadioStates = { ...RadioStatesTemplate };

const RadioGroupTemplate: Story = {
  render: (args: any) => ({
    components: { Radio },
    setup() {
      return { args };
    },
    template: RadioGroupTplStr,
  }),
};
export const RadioGroup = { ...RadioGroupTemplate };
