import type { Meta, StoryObj } from "@storybook/vue3";
import FileInput from "@/components/DataInput/FileInput.vue";
import { useVariantStoriesControl } from "@/composables/useVariantProps";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof FileInput> = {
  title: "Components/DataInput/FileInput",
  component: FileInput,
  argTypes: {
    ...useVariantStoriesControl,
    ...useSizeStoriesControl,
    ghost: { control: "boolean" },
    disabled: { control: "boolean" },
  },
};

export default meta;

type Story = StoryObj<typeof FileInput>;

const defaultTplStr = `
  <FileInput v-bind="args" />
`;

const FileInputSizesTplStr = `
<div class="flex flex-col gap-4">
  <FileInput size="xs" v-bind="args" />
  <FileInput size="sm" v-bind="args" />
  <FileInput size="md" v-bind="args" />
  <FileInput size="lg" v-bind="args" />
  <FileInput size="xl" v-bind="args" />
</div>`;

const FileInputColorsTplStr = `
<div class="flex flex-col gap-4">
  <FileInput variant="primary" v-bind="args" />
  <FileInput variant="secondary" v-bind="args" />
  <FileInput variant="accent" v-bind="args" />
  <FileInput variant="info" v-bind="args" />
  <FileInput variant="success" v-bind="args" />
  <FileInput variant="warning" v-bind="args" />
  <FileInput variant="error" v-bind="args" />
</div>`;

const GhostFileInputTplStr = `
  <FileInput ghost v-bind="args" />
`;

const DisabledFileInputTplStr = `
  <FileInput disabled v-bind="args" />
`;

// DEFAULT
const TemplateFileInput: Story = {
  render: (args: any) => ({
    components: { FileInput },
    setup() {
      return { args };
    },
    template: defaultTplStr,
  }),
  args: {},
};
export const Default = { ...TemplateFileInput };

// FILE INPUT SIZES
const FileInputSizesTemplate: Story = {
  render: (args: any) => ({
    components: { FileInput },
    setup() {
      return { args };
    },
    template: FileInputSizesTplStr,
  }),
};
export const FileInputSizes = { ...FileInputSizesTemplate };

// FILE INPUT COLORS
const FileInputColorsTemplate: Story = {
  render: (args: any) => ({
    components: { FileInput },
    setup() {
      return { args };
    },
    template: FileInputColorsTplStr,
  }),
};
export const FileInputColors = { ...FileInputColorsTemplate };

// GHOST FILE INPUT
const GhostFileInputTemplate: Story = {
  render: (args: any) => ({
    components: { FileInput },
    template: GhostFileInputTplStr,
  }),
};
export const GhostFileInput = { ...GhostFileInputTemplate };
