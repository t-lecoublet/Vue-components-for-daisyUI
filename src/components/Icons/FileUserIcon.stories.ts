import type { Meta, StoryObj } from "@storybook/vue3";
import FileUserIcon from "@/components/Icons/FileUserIcon.vue";

const meta: Meta<typeof FileUserIcon> = {
  title: "Components/Icons/FileUserIcon",
  component: FileUserIcon,
};

export default meta;
export const Default = { ...FileUserIcon };
