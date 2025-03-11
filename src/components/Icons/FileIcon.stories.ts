import type { Meta, StoryObj } from "@storybook/vue3";
import FileIcon from "@/components/Icons/FileIcon.vue";

const meta: Meta<typeof FileIcon> = {
  title: "Components/Icons/FileIcon",
  component: FileIcon,
};

export default meta;
export const Default = { ...FileIcon };
