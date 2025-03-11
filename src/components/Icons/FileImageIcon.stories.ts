import type { Meta, StoryObj } from "@storybook/vue3";
import FileImageIcon from "@/components/Icons/FileImageIcon.vue";

const meta: Meta<typeof FileImageIcon> = {
  title: "Components/Icons/FileImageIcon",
  component: FileImageIcon,
};

export default meta;
export const Default = { ...FileImageIcon };
