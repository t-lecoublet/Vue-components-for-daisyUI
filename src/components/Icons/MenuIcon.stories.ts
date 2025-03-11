import type { Meta, StoryObj } from "@storybook/vue3";
import MenuIcon from "@/components/Icons/MenuIcon.vue";

const meta: Meta<typeof MenuIcon> = {
  title: "Components/Icons/MenuIcon",
  component: MenuIcon,
};

export default meta;
export const Default = { ...MenuIcon };
