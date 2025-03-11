import type { Meta, StoryObj } from "@storybook/vue3";
import FolderClosedIcon from "@/components/Icons/FolderClosedIcon.vue";

const meta: Meta<typeof FolderClosedIcon> = {
  title: "Components/Icons/FolderClosedIcon",
  component: FolderClosedIcon,
};

export default meta;
export const Default = { ...FolderClosedIcon };
