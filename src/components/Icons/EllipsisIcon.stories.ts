import type { Meta, StoryObj } from "@storybook/vue3";
import EllipsisIcon from "@/components/Icons/EllipsisIcon.vue";

const meta: Meta<typeof EllipsisIcon> = {
  title: "Components/Icons/EllipsisIcon",
  component: EllipsisIcon,
};

export default meta;
export const Default = { ...EllipsisIcon };
