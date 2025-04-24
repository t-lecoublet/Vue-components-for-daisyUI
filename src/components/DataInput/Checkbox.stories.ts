import type { Meta, StoryObj } from "@storybook/vue3";
import Checkbox from "@/components/DataInput/Checkbox.vue";
import { useVariantStoriesControl } from "@/composables/useVariantProps";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof Checkbox> = {
  title: "Components/DataInput/Checkbox",
  component: Checkbox,
  argTypes: {
    ...useVariantStoriesControl,
    ...useSizeStoriesControl,
    checked: { control: "boolean" },
    disabled: { control: "boolean" },
    indeterminate: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const defaultTplStr = `
  <Checkbox v-bind="args" />
`;

const TemplateCheckbox: Story = {
  render: (args: any) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...TemplateCheckbox };

const CheckboxColorsTplStr = `
<div class="flex gap-4">
    <Checkbox checked variant="primary" /> 
    <Checkbox checked variant="secondary" />
    <Checkbox checked variant="accent" />
    <Checkbox checked variant="info" />
    <Checkbox checked variant="success" />
    <Checkbox checked variant="warning" />
    <Checkbox checked variant="error" />
</div>`;

const CheckboxColorsTemplate: Story = {
  render: (args: any) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: CheckboxColorsTplStr,
  }),
};
export const CheckboxColors = { ...CheckboxColorsTemplate };

const CheckboxSizesTplStr = `
<div class="flex items-center gap-4">
  <div class="flex items-center gap-2">
    <Checkbox size="xs" />
    <span>XS</span>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox size="sm" />
    <span>SM</span>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox size="md" />
    <span>MD</span>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox size="lg" />
    <span>LG</span>
  </div>
</div>`;

const CheckboxSizesTemplate: Story = {
  render: (args: any) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: CheckboxSizesTplStr,
  }),
};
export const CheckboxSizes = { ...CheckboxSizesTemplate };

const CheckboxStatesTplStr = `
<div class="flex flex-col gap-4">
  <div class="flex items-center gap-2">
    <Checkbox checked />
    <span>Checked</span>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox />
    <span>Unchecked</span>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox indeterminate />
    <span>Indeterminate</span>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox disabled />
    <span>Disabled</span>
  </div>
  <div class="flex items-center gap-2">
    <Checkbox checked disabled />
    <span>Checked & Disabled</span>
  </div>
</div>`;

const CheckboxStatesTemplate: Story = {
  render: (args: any) => ({
    components: { Checkbox },
    setup() {
      return { args };
    },
    template: CheckboxStatesTplStr,
  }),
};
export const CheckboxStates = { ...CheckboxStatesTemplate };
