import type { Meta, StoryObj } from "@storybook/vue3";
import InputField from "@/components/DataInput/InputField.vue";
import Label from "@/components/DataInput/Label.vue";
import Kbd from "@/components/DataDisplay/Kbd.vue";
import Badge from "@/components/DataDisplay/Badge.vue";
import SearchIcon from "@/components/Icons/SearchIcon.vue";
import FileIcon from "@/components/Icons/FileIcon.vue";
import Fieldset from "@/components/DataInput/Fieldset.vue";

const meta: Meta<typeof InputField> = {
  title: "Components/DataInput/InputField",
  component: InputField,
  argTypes: {
    placeholder: {
      control: { type: "text" },
    },
  },
};

export default meta;

type Story = StoryObj<typeof InputField>;

const defaultTplStr = `
  <InputField placeholder="Type here" v-bind="args" />
`;
const TextInputWithLabelInsideTplStr = `
<div class="flex flex-col gap-2">
  <Label>
    <SearchIcon class="h-[1em] opacity-50" />
    <InputField type="search" placeholder="Search" class="grow" v-bind="args" />
    <Kbd>⌘</Kbd>
    <Kbd>K</Kbd>
  </Label>
  <Label>
    <FileIcon class="h-[1em] opacity-50" />
    <InputField placeholder="index.php" class="grow" v-bind="args" />
  </Label>
  <Label>
    Path
    <InputField placeholder="src/app/" class="grow" v-bind="args" />
    <Badge variant="neutral" size="xs">Optional</Badge>
  </Label>
</div>`;
const WithFieldsetAndFieldsetLegendTplStr = `
<Fieldset legend="What is your name?" label="optional">
  <InputField v-bind="args" />
</Fieldset>
`;
const ColorsInputTplStr = `
<div class="flex flex-col gap-4">
  <InputField placeholder="neutral" variant="neutral" v-bind="args" />
  <InputField placeholder="primary" variant="primary" v-bind="args" />
  <InputField placeholder="secondary" variant="secondary" v-bind="args" />
  <InputField placeholder="accent" variant="accent" v-bind="args" />
  
  <InputField placeholder="info" variant="info" v-bind="args" />
  <InputField placeholder="success" variant="success" v-bind="args" />
  <InputField placeholder="warning" variant="warning" v-bind="args" />
  <InputField placeholder="error" variant="error" v-bind="args" />
</div>`;
const SizesInputTplStr = `
<div class="flex flex-col gap-4">
  <InputField placeholder="XSmall" size="xs" v-bind="args" />
  <InputField placeholder="Small" size="sm" v-bind="args" />
  <InputField placeholder="Medium" size="md" v-bind="args" />
  <InputField placeholder="Large" size="lg" v-bind="args" />
  <InputField placeholder="XLarge" size="xl" v-bind="args" />
</div>`;
const DisabledInputTplStr = `
<InputField placeholder="You can't touch this" disabled v-bind="args" />`;
const TextInputWithDataListSuggestionTplStr = `
<InputField 
  placeholder="Which browser do you use" 
  suggestion-name="browsers" 
  :suggestion-list="['Chrome', 'Firefox', 'Safari', 'Opera', 'Edge']" 
  v-bind="args" />`;

// DEFAULT

const DefaultInputFieldTemplate: Story = {
  render: (args: any) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const DefaultInputField = { ...DefaultInputFieldTemplate };

// TEXT INPUT WITH LABEL INSIDE

const TextInputWithLabelInsideTemplate: Story = {
  render: (args: any) => ({
    components: { InputField, Label, Kbd, Badge, SearchIcon, FileIcon },
    setup() {
      return { args };
    },
    template: TextInputWithLabelInsideTplStr,
  }),
};
export const TextInputWithLabelInside = { ...TextInputWithLabelInsideTemplate };
TextInputWithLabelInside.args = {};

// GHOST STYLE

export const GhostStyle = { ...DefaultInputFieldTemplate };
GhostStyle.args = {
  ghost: true,
};

// WITH FIELDSET AND FIELDSET LEGEND

const WithFieldsetAndFieldsetLegendTemplate: Story = {
  render: (args: any) => ({
    components: { InputField, Fieldset, Label },
    setup() {
      return { args };
    },
    template: WithFieldsetAndFieldsetLegendTplStr,
  }),
};
export const WithFieldsetAndFieldsetLegend = {
  ...WithFieldsetAndFieldsetLegendTemplate,
};
WithFieldsetAndFieldsetLegend.args = {};

// COLORS INPUT

const ColorsInputTemplate: Story = {
  render: (args: any) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: ColorsInputTplStr,
  }),
};
export const ColorsInput = { ...ColorsInputTemplate };
ColorsInput.args = {};

// SIZES INPUT

const SizesInputTemplate: Story = {
  render: (args: any) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: SizesInputTplStr,
  }),
};
export const SizesInput = { ...SizesInputTemplate };
SizesInput.args = {};

// DISABLED INPUT

const DisabledInputTemplate: Story = {
  render: (args: any) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: DisabledInputTplStr,
  }),
};
export const DisabledInput = { ...DisabledInputTemplate };
DisabledInput.args = {};

// TEXT INPUT WITH DATA LIST SUGGESTION

const TextInputWithDataListSuggestionTemplate: Story = {
  render: (args: any) => ({
    components: { InputField },
    setup() {
      return { args };
    },
    template: TextInputWithDataListSuggestionTplStr,
  }),
};
export const TextInputWithDataListSuggestion = {
  ...TextInputWithDataListSuggestionTemplate,
};
TextInputWithDataListSuggestion.args = {};

// DATE INPUT

export const DateInputField = {
  ...DefaultInputFieldTemplate,
};
DateInputField.args = {
  type: "date",
};

// TIME INPUT

export const TimeInputField = {
  ...DefaultInputFieldTemplate,
};
TimeInputField.args = {
  type: "time",
};

// DATA-TIME LOCAL INPUT

export const DateTimeLocalInputField = {
  ...DefaultInputFieldTemplate,
};
DateTimeLocalInputField.args = {
  type: "datetime-local",
};
