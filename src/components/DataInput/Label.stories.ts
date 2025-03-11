import type { Meta, StoryObj } from "@storybook/vue3";
import Label from "@/components/DataInput/Label.vue";
import InputField from "@/components/DataInput/InputField.vue";
import Select from "@/components/DataInput/Select.vue";

const meta: Meta<typeof Label> = {
  title: "Components/DataInput/Label",
  component: Label,
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ["input", "select", "floating-label", "fieldset-label"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Label>;

const defaultTplStr = `
<Label v-bind="args">
  <span class="label">https://</span>
  <InputField placeholder="URL" />
</Label>
`;
const LabelForInputAtTheEndTplStr = `
<Label v-bind="args">
  <InputField placeholder="domain name" />
  <span class="label">.com</span>
</Label>`;
const LabelForSelectTplStr = `
<Label type="select" v-bind="args">
  <span class="label">Type</span>
  <Select>
    <option>Personal</option>
    <option>Business</option>
  </Select>
</label>`;
const LabelForDateInputTplStr = `
<Label v-bind="args">
  <span class="label">Date</span>
  <InputField type="date" />
</Label>
`;
const FloatingLabelTplStr = `
<Label v-bind="args" type="floating-label">
  <span class="label">Your name</span>
  <InputField placeholder="Your name" />
</Label>
`;
const FloatingLabelWithDifferentSizesTplStr = `
<div class="flex flex-col gap-2">
  <Label v-bind="args" type="floating-label">
    <InputField size="xs" />
    <span>Extra Small</span>
  </Label>
  <Label v-bind="args" type="floating-label">
    <InputField size="sm" />
    <span>Small</span>
  </Label>
  <Label v-bind="args" type="floating-label">
    <InputField size="md" />
    <span>Medium</span>
  </Label>
  <Label v-bind="args" type="floating-label">
    <InputField size="lg" />
    <span>Large</span>
  </Label>
  <Label v-bind="args" type="floating-label">
    <InputField size="xl" />
    <span>Extra Large</span>
  </Label>
</div>
`;

// DEFAULT

const DefaultLabelTemplate: Story = {
  render: (args) => ({
    components: { Label, InputField },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const DefaultLabel = { ...DefaultLabelTemplate };

// LABEL FOR INPUT AT THE END
const LabelForInputAtTheEndTemplate: Story = {
  render: (args) => ({
    components: { Label, InputField },
    setup() {
      return { args };
    },
    template: LabelForInputAtTheEndTplStr,
  }),
};
export const LabelForInputAtTheEnd = { ...LabelForInputAtTheEndTemplate };

// LABEL FOR SELECT
const LabelForSelectTemplate: Story = {
  render: (args) => ({
    components: { Label, InputField, Select },
    setup() {
      return { args };
    },
    template: LabelForSelectTplStr,
  }),
};
export const LabelForSelect = { ...LabelForSelectTemplate };

// LABEL FOR DATE INPUT
const LabelForDateInputTemplate: Story = {
  render: (args) => ({
    components: { Label, InputField },
    setup() {
      return { args };
    },
    template: LabelForDateInputTplStr,
  }),
};
export const LabelForDateInput = { ...LabelForDateInputTemplate };

// FLOATING LABEL
const FloatingLabelTemplate: Story = {
  render: (args) => ({
    components: { Label, InputField },
    setup() {
      return { args };
    },
    template: FloatingLabelTplStr,
  }),
};
export const FloatingLabel = { ...FloatingLabelTemplate };

// FLOATING LABEL WITH DIFFERENT SIZES

const FloatingLabelWithDifferentSizesTemplate: Story = {
  render: (args) => ({
    components: { Label, InputField },
    setup() {
      return { args };
    },
    template: FloatingLabelWithDifferentSizesTplStr,
  }),
};
export const FloatingLabelWithDifferentSizes = {
  ...FloatingLabelWithDifferentSizesTemplate,
};
