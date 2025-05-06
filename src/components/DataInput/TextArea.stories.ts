import type { Meta, StoryObj } from "@storybook/vue3";
import TextArea from "@/components/DataInput/TextArea.vue";
import { useVariantStoriesControl } from "@/composables/useVariantProps";
import { useSizeStoriesControl } from "@/composables/useSizeProps";

const meta: Meta<typeof TextArea> = {
  title: "Components/DataInput/TextArea",
  component: TextArea,
  argTypes: {
    ...useVariantStoriesControl,
    ...useSizeStoriesControl,
    modelValue: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    ghost: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: "Entrez votre texte ici...",
  },
};

export const WithValue: Story = {
  args: {
    modelValue: "Ceci est un exemple de texte",
    placeholder: "Entrez votre texte ici...",
  },
};

export const Disabled: Story = {
  args: {
    modelValue: "Ce champ est désactivé",
    disabled: true,
  },
};

export const Ghost: Story = {
  args: {
    modelValue: "Style ghost",
    ghost: true,
  },
};

export const Sizes: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <div class="flex flex-col gap-4">
        <TextArea size="xs" placeholder="Taille xs" />
        <TextArea size="sm" placeholder="Taille sm" />
        <TextArea size="md" placeholder="Taille md" />
        <TextArea size="lg" placeholder="Taille lg" />
        <TextArea size="xl" placeholder="Taille xl" />
      </div>
    `,
  }),
};

export const Colors: Story = {
  render: () => ({
    components: { TextArea },
    template: `
      <div class="flex flex-col gap-4">
        <TextArea variant="neutral" placeholder="Neutral" />
        <TextArea variant="primary" placeholder="Primary" />
        <TextArea variant="secondary" placeholder="Secondary" />
        <TextArea variant="accent" placeholder="Accent" />
        <TextArea variant="info" placeholder="Info" />
        <TextArea variant="success" placeholder="Success" />
        <TextArea variant="warning" placeholder="Warning" />
        <TextArea variant="error" placeholder="Error" />
      </div>
    `,
  }),
}; 